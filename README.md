# Hash-analyze

Hash-analyze is a browser-based tool for reviewing fleet camera installation records. Upload job logs or spreadsheets, get an instant dashboard of hours, audit outcomes, and technician workload, then ask follow-up questions in a chat panel powered by Google Gemini.

Everything runs in the browser. Your files are not uploaded to a backend server.

## What it does

1. **Import data** — paste text, or upload CSV, Excel (`.xlsx` / `.xls`), PDF, or plain-text logs.
2. **Parse automatically** — the app detects tabular data (CSV/Excel) or structured job-sheet blocks and fills the dashboard.
3. **Review at a glance** — see total jobs, hours logged, pass/fail audit counts, a technician workload chart, and a sortable table of records.
4. **Ask questions** — use the chat tab or one-click audit shortcuts to analyze the imported data with Gemini 2.5 Flash.

If no API key is provided, the app runs in **demo mode** with sample responses so you can explore the UI without calling Gemini.

## Supported file formats

| Format | Extensions | Notes |
|--------|------------|-------|
| CSV / TSV | `.csv`, `.txt` | Best with a header row containing columns like `Date`, `Technician`, `Vehicle ID` |
| Excel | `.xlsx`, `.xls` | Converted client-side via SheetJS |
| PDF | `.pdf` | Text is extracted with PDF.js. Works for text-based PDFs only — scanned documents need OCR and are not supported |
| Job sheets | `.txt`, `.log` | Structured blocks using the `--- JOB SHEET #001 ---` template (see below) |
| JSON / logs | `.json`, `.log` | Treated as plain text |

The parser skips title rows, sheet markers, and PDF page headers, and handles quoted CSV fields.

## Quick start

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm

### Run locally

```bash
git clone https://github.com/hashnori/hashAnalyze.git
cd hashAnalyze
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview   # optional — serve the production build locally
```

The build output goes to the `dist/` folder.

## Gemini API key

To enable live AI analysis:

1. Go to [Google AI Studio](https://aistudio.google.com/apikey).
2. Create an API key.
3. Paste it into the **Gemini API Key** field in the app header.

The key is stored in your browser's `localStorage` only. It is sent directly from your browser to Google's Gemini API when you send a chat message — it never passes through a Hash-analyze server.

## Data formats

### Tabular (CSV / Excel)

Include a header row with recognizable column names. Examples that work well:

```
Date,Technician,Vehicle ID,Installation Type,Time Taken,Status,Audit Status
2026-06-15,Alex Mercer,VT-102,3-Camera Fleet,2.5,Completed,Passed
2026-06-16,Sarah Connor,VT-409,4-Camera System,4.0,Completed with Warnings,Needs Verification
```

Recognized header keywords:

- **Date** — `date`
- **Technician** — `technician`, `tech`, `installer`
- **Vehicle** — `vehicle id`, `vehicle`, `car`, `truck`
- **Install type** — `installation`, `type`
- **Equipment** — `equipment`, `parts`, `tools`
- **Duration** — `time taken`, `hours`, `duration`
- **Status** — `status`, `state` (excluding audit columns)
- **Audit** — `audit`, `inspect`, `qa`

A title row above the headers (e.g. `Fleet Installation Report`) is fine — the parser will find the header row automatically.

### Job sheet template

For free-form logs, use repeated blocks like this:

```
--- JOB SHEET #001 ---
Date: 2026-06-15
Technician: Alex Mercer
Vehicle ID: VT-102 (Cargo Van)
Installation Type: 3-Camera Fleet Security
Equipment Used: Hash-Cam Pro HD, MDVR-Lite
Time Taken: 2.5 hours
Status: Fully Completed
Audit Status: Passed
Notes: Front camera aligned and secured. All feeds tested.
```

Load the built-in sample from the **Load Sample Sheets** button to see a working example.

## Express audit shortcuts

The left panel includes three preset prompts:

- **Quality Assurance Audit** — find failed audits, wiring issues, and incomplete jobs
- **Technician Performance Index** — compare hours, job counts, and error rates
- **Hardware & Cable Consumption** — summarize parts used and inventory gaps

Each shortcut opens the chat tab and sends a structured prompt to Gemini using your imported file as context.

## Project structure

```
hashAnalyze/
├── index.tsx          # Main React app (UI, parsing, Gemini integration)
├── main.tsx           # App entry point
├── index.html         # Vite HTML shell
├── index.css          # Tailwind styles
├── vite.config.ts     # Vite configuration
├── public/            # Static assets (favicon)
└── package.json
```

## Tech stack

- **React 19** + **Vite 6** — frontend and bundler
- **Tailwind CSS** — styling
- **SheetJS (xlsx)** — Excel parsing (loaded from CDN)
- **PDF.js** — PDF text extraction
- **Gemini 2.5 Flash** — AI analysis (`gemini-2.5-flash`)

## Deployment

Hash-analyze is a static Vite app and deploys to any static host (Vercel, Netlify, Cloudflare Pages, etc.).

Typical settings:

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Output directory | `dist` |
| Framework preset | Vite |

No server-side environment variables are required. Users enter their own Gemini API key in the browser.

## Limitations

- **PDFs** must contain selectable text. Image-only or scanned PDFs will not parse.
- **Parsing is heuristic** — unusual column names or layouts may need manual adjustment or pasting into the job-sheet template.
- **Demo mode** returns canned summaries, not real analysis of your data.
- **API usage** counts against your Google AI Studio quota when a key is provided.

## License

See the repository for license details.
