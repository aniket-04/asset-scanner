# 📦 `asset-scanner`

A powerful CLI tool to scan and analyze all image assets in your project. Easily filter by size, type, and location. Generate reports with just one command.

---

## 🚀 Features

- 🔍 Scans entire project or specific directory
- 📂 Supports filtering by image type (`png`, `jpg`, `gif`, etc.)
- 📏 Filter assets by size (`--min`, `--max` in KB, MB, Bytes)
- 📊 Shows total assets, filtered assets, and type breakdown
- 📄 Generates a JSON report file with asset info
- 📌 Sort by size (ascending or descending)

---

## 📥 Installation

To install `asset-scanner` globally on your system, use the following npm command:

```bash
npm install asset-scanner
```
---
## 📥 Usage

Run the command to scan your assets:

```bash
npx asset-scan [options]
```
#### ⚙️ Options

| Option     | Description                                    | Example                       |
| ---------- | ---------------------------------------------- | ----------------------------- |
| `--path`   | Folder to scan (defaults to current directory) | `--path ./src/assets`         |
| `--types`   | Filter by image type (comma separated)         | `--types png,jpg`              |
| `--min`    | Minimum file size in KB (`KB`)        | `--min-size 100KB`                 |
| `--max`    | Maximum file size in KB (`KB`)        | `--max-size 2000KB`                   |
| `--sort`   | Sort results by size         | `--sort size`                 |
| `--save` | File name to save the report in JSON format    | `--save assets-report.json` |
| `--stats` | Shows total assets, filtered assets, and detailed types breakdown    | `--stats` |

---
## 📌 Examples

```bash
npx asset-scan --types png,gif --sort size --save output.json
```

```bash
npx asset-scan --stats
```











