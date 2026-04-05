const fs = require('fs');
const path = require('path');

//! check line argument 
const args = process.argv.slice(2);

//! Help message 
function showHelp() {
    console.log("File Statistics Tool");
    console.log("Usage: node count.js <file.txt> [options]");
    console.log("Options:");
    console.log("  -h, --help     Show this help message");
    console.log("  -s, --summary  Show only summary {total counts}");
    console.log("  -d, --details  Show detailed statistics {lines, words, characters}");
    console.log("\nExample:");
    console.log("  node count.js sample.txt -s");
    console.log("  node count.js sample.txt -d");
    process.exit(0);
}

//! Show help if no argument is provided
if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
    showHelp();
}

// Pass command line options
const filePath = args[0];
const showDetails = args.includes('-d') || args.includes('--details');

// validate file path
if (!filePath.endsWith('.txt') || !fs.existsSync(filePath)) {
    console.error("Error: Please provide a valid .txt file.");
    process.exit(1);
}

// count statistics 
function countStatistics(buffer) {
    const content = buffer.toString();

    const charCount = buffer.length;

    const lines = content.split(/\r?\n/);
    const lineCount = lines.length;

    const words = content.split(/\s+/).filter((word) => word.length > 0);
    const wordCount = words.length;

    const byteSize = buffer.byteLength;

    let stats = {
        charCount,
        lineCount,
        wordCount,
        byteSize,
    };

    if (showDetails) {
        const nonWhitespaceCharCount = content.replace(/\s/g, "").length;

        const wordLengths = words.map((word) => word.length);
        const averageWordLength = wordCount === 0
            ? 0
            : wordLengths.reduce((sum, length) => sum + length, 0) / wordCount;

        const paragraphCount = content
            .split(/\r?\n\s*\r?\n/)
            .filter((para) => para.trim().length > 0).length;

        const wordFrequency = {};
        words.forEach((word) => {
            const normalizedWord = word.toLowerCase().replace(/[^\w]/g, "");
            if (normalizedWord.length > 0) {
                wordFrequency[normalizedWord] = (wordFrequency[normalizedWord] || 0) + 1;
            }
        });

        const sortedWords = Object.entries(wordFrequency)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10);

        stats = {
            ...stats,
            nonWhitespaceCharCount,
            averageWordLength,
            paragraphCount,
            commonWords: sortedWords
        };
    }

    return stats;
}

// format byte size
function formatBytes(bytes, decimal = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat(bytes / Math.pow(k, i)).toFixed(decimal) + " " + sizes[i];
}

// display results
function displayStatistics(stats) {
    console.log("\n=== Text File Statistics ===\n");
    console.log(`File: ${path.basename(filePath)}`);
    console.log(`Size: ${formatBytes(stats.byteSize)}`);
    console.log(`Characters: ${stats.charCount}`);
    console.log(`Words: ${stats.wordCount}`);
    console.log(`Lines: ${stats.lineCount}`);

    if (showDetails) {
        console.log("\n=== Detailed Statistics ===\n");
        console.log(`Non-Whitespace characters: ${stats.nonWhitespaceCharCount}`);
        console.log(`Paragraphs: ${stats.paragraphCount}`);
        console.log(`Average word length: ${stats.averageWordLength.toFixed(2)} characters`);

        console.log("\n=== Most Common Words ===\n");
        stats.commonWords.forEach(([word, count]) => {
            console.log(`"${word}": ${count} occurrences`);
        });
    }

    console.log("\n=== End of Statistics ===");
}

// main execution
const buffer = fs.readFileSync(filePath);
const statistics = countStatistics(buffer);
displayStatistics(statistics);