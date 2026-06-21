Hash-analyze 🛠️

Hash-analyze is an LLM-powered fleet telematics & installation auditor. Upload Excel sheets or paste raw text logs to instantly generate live quality dashboards, track technician workloads, and run conversational, cross-referenced compliance audits via Gemini 2.5 Flash.

🚀 Key Features

📊 Live Parsed Dashboard: Instant telemetry visualization including cumulative labor hours, job outcomes, an SVG quality split chart (Passed vs. Failed), and a dynamic technician workload leaderboard.

🟢 Drag & Drop Excel Parsing: Out-of-the-box support for Microsoft Excel (.xlsx, .xls) and CSV files using an embedded client-side SheetJS engine. It reads binary workbooks on the fly and converts them to structured, LLM-ready context.

🤖 Integrated Gemini 2.5 Flash API: Communicates directly with Google's production-ready gemini-2.5-flash model. Equipped with exponential backoff retries (up to 5 attempts) to guarantee connection resilience.

⚡ One-Click Express Actions: Pre-configured shortcut prompt templates designed for:

Complete Quality Assurance audits (locating reversed mounts, loose cables, or power faults).

Technician Performance comparisons (total jobs, speed, and error frequencies).

Inventory and materials consumption.

💬 Optimized Bottom-Aligned Chat Layout: A sleek chat viewport designed with a natural bottom-anchored alignment pattern and automatic smart scrolling.

🔒 API Key Security: Safe local storage saving for user API keys, ensuring keys never touch third-party servers.

✨ Simulation Demo Mode: Instantly interactive right out of the box. If an API key is not present, the app falls back to an intelligent local mock system to demonstrate features.

🛠️ Technology Stack

Frontend Framework: React

Styling: Tailwind CSS

Spreadsheet Engine: SheetJS (xlsx)

Artificial Intelligence: Google Gemini 2.5 Flash API (gemini-2.5-flash)

📥 Installation & Setup

Since this is a single-file application structure optimized for fast deployments, you can spin it up with minimal overhead:

Clone the repository:

git clone https://github.com/your-username/hash-analyze.git
cd hash-analyze


Run on Local Server:
Place App.jsx inside any standard React setup (like Vite).

npm install
npm run dev


Get a Gemini API Key:

Visit Google AI Studio.

Generate an API key.

Paste it into the top bar of Hash-analyze to activate full artificial intelligence reasoning.

📋 Sample Sheet Structure

Hash-analyze recognizes standard tabular data (from Excel or CSV sheet uploads) as well as raw job templates like this:

--- JOB SHEET #001 ---
Date: 2026-06-15
Technician: Alex Mercer
Vehicle ID: VT-102 (Cargo Van)
Installation Type: 3-Camera Fleet Security (Front Dash, Dual Side Views)
Equipment Used: Hash-Cam Pro HD, MDVR-Lite, 15m Coaxial cables
Time Taken: 2.5 hours
Status: Fully Completed
Audit Status: Passed
Notes: Front windshield camera aligned and secured. Left/right side camera mirrors mounted. tested video feeds locally.


If uploading Excel or CSV tables, ensure you have column headers containing keywords like Date, Technician, Vehicle, Hours (or Time), and Audit (or Status) for optimal dashboard parsing.
