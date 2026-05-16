const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/run", async (req, res) => {

    try {

        const response = await fetch(
            "https://emkc.org/api/v2/piston/execute",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req.body)
            }
        );

        const data = await response.json();

        res.json(data);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });
    }
});

app.listen(3001, () => {
    console.log("Backend running on port 3001");
});
