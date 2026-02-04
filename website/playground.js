/**
 * Rust Playground API Integration
 * Connects to the official Rust Playground for free code execution
 */

const RustPlayground = {
    API_URL: 'https://play.rust-lang.org/execute',
    
    /**
     * Execute Rust code
     * @param {string} code - The Rust code to execute
     * @param {Object} options - Execution options
     * @returns {Promise<Object>} - Execution result with output and timing
     */
    async execute(code, options = {}) {
        const {
            channel = 'stable',  // stable, beta, nightly
            mode = 'debug',      // debug, release
            edition = '2021',    // 2015, 2018, 2021
            crateType = 'bin',   // bin, lib
            tests = false,
            backtrace = false
        } = options;

        const startTime = performance.now();

        try {
            const response = await fetch(this.API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    channel,
                    mode,
                    edition,
                    crateType,
                    tests,
                    backtrace,
                    code
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            const endTime = performance.now();
            const executionTime = (endTime - startTime).toFixed(0);

            return {
                success: result.success,
                stdout: result.stdout || '',
                stderr: result.stderr || '',
                executionTime: parseInt(executionTime),
                error: null
            };
        } catch (error) {
            const endTime = performance.now();
            const executionTime = (endTime - startTime).toFixed(0);

            return {
                success: false,
                stdout: '',
                stderr: '',
                executionTime: parseInt(executionTime),
                error: error.message
            };
        }
    },

    /**
     * Format compilation output
     * @param {Object} result - Execution result
     * @returns {Object} - Formatted output with type and message
     */
    formatOutput(result) {
        if (result.error) {
            return {
                type: 'error',
                message: `Network Error: ${result.error}`,
                runtime: result.executionTime
            };
        }

        if (!result.success) {
            // Compilation or runtime error
            const errorMessage = result.stderr || 'Unknown error occurred';
            return {
                type: 'error',
                message: this.cleanErrorMessage(errorMessage),
                runtime: result.executionTime
            };
        }

        // Success - show stdout (and stderr warnings if any)
        let output = result.stdout;
        if (result.stderr && result.stderr.includes('warning')) {
            output = `⚠️ Warnings:\n${result.stderr}\n\n📤 Output:\n${result.stdout}`;
        }

        return {
            type: 'success',
            message: output || '(No output)',
            runtime: result.executionTime
        };
    },

    /**
     * Clean up error messages for better readability
     * @param {string} error - Raw error message
     * @returns {string} - Cleaned error message
     */
    cleanErrorMessage(error) {
        // Remove file path noise from playground
        return error
            .replace(/src\/main\.rs:/g, 'Line ')
            .replace(/error\[E\d+\]:/g, '❌ Error:')
            .replace(/warning:/g, '⚠️ Warning:')
            .replace(/--> src\/main\.rs:/g, '→ Line ')
            .trim();
    },

    /**
     * Test if the Playground API is reachable
     * @returns {Promise<boolean>}
     */
    async testConnection() {
        try {
            const result = await this.execute('fn main() { println!("test"); }');
            return result.success;
        } catch {
            return false;
        }
    }
};

// Export for global use
window.RustPlayground = RustPlayground;
