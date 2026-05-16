import type { FileManagerOptions, SupportedFileType, ExportOptions } from './types';
export interface PlaygroundOptions {
    onOutput?: (output: string, isError?: boolean) => void;
    onInputRequest?: (message: string) => Promise<string>;
    onFileImported?: (content: string, fileName: string, filePath: string, language: string) => void;
    onFileExported?: (fileName: string) => void;
    onFileError?: (error: string) => void;
}
export interface FileInfo {
    name: string;
    path: string;
    content: string;
    language: string;
    size: number;
    lastModified: Date;
}
export declare class FileManager {
    private supportedTypes;
    private currentFile;
    private options;
    constructor(options?: FileManagerOptions);
    /**
     * Import file - creates file input and handles selection
     */
    importFile(): Promise<FileInfo | null>;
    /**
     * Export current code to file
     */
    exportFile(content: string, options: ExportOptions): void;
    /**
     * Process dropped or selected file
     */
    processFile(file: File): Promise<FileInfo>;
    /**
     * Handle drag and drop files
     */
    handleDrop(event: DragEvent): Promise<FileInfo | null>;
    /**
     * Read file content as text
     */
    private readFile;
    /**
     * Get file extension for language
     */
    private getExtensionForLanguage;
    /**
     * Get language from file name
     */
    private getLanguage;
    /**
     * Check if file type is supported
     */
    private isSupported;
    /**
     * Get accept string for file input
     */
    private getAcceptString;
    /**
     * Handle errors
     */
    private handleError;
    /**
     * Get current file info
     */
    getCurrentFile(): FileInfo | null;
    /**
     * Clear current file
     */
    clearCurrentFile(): void;
    /**
     * Get supported file types
     */
    getSupportedTypes(): SupportedFileType[];
}
export declare class Playground {
    private core;
    private fileManager;
    private options;
    private isExecuting;
    constructor(options?: PlaygroundOptions);
    /**
     * Set up core input handling
     */
    private setupCore;
    /**
     * Fallback browser prompt for input requests
     */
    private showBrowserPrompt;
    /**
     * Import a file using file manager
     */
    importFile(): Promise<FileInfo | null>;
    /**
     * Export current code to file
     */
    exportFile(content: string, language: string, fileName?: string): void;
    /**
     * Handle file drop events
     */
    handleFileDrop(event: DragEvent): Promise<FileInfo | null>;
    /**
     * Execute code using core - let core handle all language execution
     */
    runCode(code: string, language: string): Promise<void>;
    /**
     * Check if code is currently executing
     */
    isRunning(): boolean;
    /**
     * Get list of supported languages from core
     */
    getSupportedLanguages(): string[];
    /**
     * Check if a language is supported by core
     */
    isLanguageSupported(language: string): boolean;
    /**
     * Get current file information
     */
    getCurrentFile(): FileInfo | null;
    /**
     * Clear current file
     */
    clearCurrentFile(): void;
    /**
     * Get file manager instance
     */
    getFileManager(): FileManager;
    /**
     * Get supported file types for import
     */
    getSupportedFileTypes(): SupportedFileType[];
}
export default Playground;
//# sourceMappingURL=index.d.ts.map