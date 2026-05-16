import type { FileManagerOptions, SupportedFileType, ExportOptions } from './types';
export declare class FileManager {
    private options;
    private supportedTypes;
    constructor(options?: FileManagerOptions);
    /**
     * Import file - creates file input and handles selection
     */
    importFile(): Promise<void>;
    /**
     * Export current code to file
     */
    exportFile(content: string, options: ExportOptions): void;
    /**
     * Process dropped or selected file
     */
    processFile(file: File): Promise<void>;
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
     * Get supported file types
     */
    getSupportedTypes(): SupportedFileType[];
}
//# sourceMappingURL=file-package.d.ts.map