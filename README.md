# 📄 File Statistics Tool (Node.js)

A simple and efficient **command-line tool** built with Node.js to analyze text files and generate useful statistics such as word count, line count, character count, and more.

---

## 🚀 Features

* 📊 Count:

  * Characters
  * Words
  * Lines
  * File size (bytes)

* 🔍 Detailed Statistics (optional):

  * Non-whitespace characters
  * Paragraph count
  * Average word length
  * Most common words

* ⚡ Fast and lightweight (no external dependencies)

---

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <your-repo-link>
```

2. Navigate to the project folder:

```bash
cd file-statistics-tool
```

3. Run using Node.js:

```bash
node count.js <file.txt>
```

---

## 📌 Usage

```bash
node count.js <file.txt> [options]
```

### Options:

| Option            | Description              |
| ----------------- | ------------------------ |
| `-h`, `--help`    | Show help message        |
| `-s`, `--summary` | Show only summary        |
| `-d`, `--details` | Show detailed statistics |

---

## 💡 Examples

### 🔹 Basic Usage

```bash
node count.js sample.txt
```

### 🔹 Detailed Statistics

```bash
node count.js sample.txt -d
```

### 🔹 Help Command

```bash
node count.js --help
```

---

## 📷 Sample Output

```
=== Text File Statistics ===

File: sample.txt
Size: 1.25 KB
Characters: 1200
Words: 200
Lines: 25

=== Detailed Statistics ===

Non-Whitespace characters: 950
Paragraphs: 5
Average word length: 4.75 characters

=== Most Common Words ===

"the": 20 occurrences
"node": 10 occurrences
"file": 8 occurrences

=== End of Statistics ===
```

---

## 🧠 How It Works

* Uses Node.js built-in modules:

  * `fs` → for file reading
  * `path` → for file handling
* Processes file content using string manipulation and regex
* Calculates statistics efficiently in-memory

---

## 📦 Tech Stack

* Node.js (JavaScript)
* No external libraries

---

## 🎯 Future Improvements

* Add support for multiple file formats (PDF, CSV)
* Add colored CLI output
* Convert into an npm package
* Add real-time file monitoring

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📜 License

This project is open-source and available under the MIT License.

---

## 👩‍💻 Author

**Janhvi Awasthi**

* 💼 Passionate Web Developer
* 🚀 DSA Learner

---

⭐ If you like this project, don’t forget to give it a star!
