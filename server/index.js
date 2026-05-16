const express = require("express");
const { exec, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const os = require("os");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json({ limit: "2mb" }));

function extractClassName(code) {
  const pub = code.match(/public\s+class\s+(\w+)/);
  if (pub) return pub[1];
  const any = code.match(/\bclass\s+(\w+)/);
  return any ? any[1] : "Main";
}

function cleanup(dir) {
  try { fs.rmSync(dir, { recursive: true, force: true }); } catch (_) {}
}

app.get("/", (_, res) => res.json({ status: "DroidJ server running" }));

// ── Compile + Run (main workflow) ──────────────────────────────────────────
app.post("/api/run", (req, res) => {
  const { code, input = "" } = req.body;
  if (!code) return res.status(400).json({ error: "code required" });

  const className = extractClassName(code);
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "droidj-"));
  const filePath = path.join(tmpDir, `${className}.java`);

  fs.writeFileSync(filePath, code);

  exec(`javac "${filePath}"`, { cwd: tmpDir }, (err, _, stderr) => {
    if (err) {
      cleanup(tmpDir);
      return res.json({ success: false, error: stderr || err.message, phase: "compile" });
    }

    let out = "", errOut = "";
    const proc = spawn("java", [className], { cwd: tmpDir });
    const killer = setTimeout(() => {
      proc.kill();
      errOut += "\n[DroidJ] Program stopped — ran over 10 seconds.";
    }, 10000);

    if (input.trim()) {
      proc.stdin.write(input.endsWith("\n") ? input : input + "\n");
    }
    proc.stdin.end();

    proc.stdout.on("data", d => out += d.toString());
    proc.stderr.on("data", d => errOut += d.toString());

    proc.on("close", code => {
      clearTimeout(killer);
      cleanup(tmpDir);
      res.json({
        success: code === 0 || out.length > 0,
        output: out,
        error: errOut,
        phase: "run",
        exitCode: code,
      });
    });

    proc.on("error", err => {
      clearTimeout(killer);
      cleanup(tmpDir);
      res.json({ success: false, error: err.message, phase: "run" });
    });
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`\n✅ DroidJ server → http://localhost:${PORT}\n`));
