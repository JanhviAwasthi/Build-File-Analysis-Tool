# Text File Word Counter

A Node.js command line tool that counts words,lines, and characters in a text file

 ## Features
 -Counts the total number of words in a text file
 -Counts the total number of lines in a text file
 -Counts the total number of characters in a text file
 -Shows file size in human-readable format
 -Provides detailed statistics with the `--details` flag
 -Works with any text file (uses Buffer to handle different encodings)

 ## Usage

 ```bash
 node count.js <file.txt> [options]
 ```
 ### Examples
 Count basic statistics in a text file:
 ```bash
 node count.js sample.txt
 ```
 Show detailed statistics:
 
 ```bash

node count.js sample.txt --detail
```
