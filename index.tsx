import React, { useState, useEffect, useRef } from 'react';

const KeyIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m-2 4a5 5 0 11-7.07-7.07l1.27-1.27A6.91 6.91 0 0115 7zm-3 6l.81 1H11l-1 1h-1v1H8l-1 1H6v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-2l4.24-4.24" />
  </svg>
);

const FileIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ChatIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const MagicIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const AlertIcon = () => (
  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SAMPLE_INSTALLATION_LOGS = `--- JOB SHEET #001 ---
Date: 2026-06-15
Technician: Alex Mercer
Vehicle ID: VT-102 (Cargo Van)
Installation Type: 3-Camera Fleet Security (Front Dash, Dual Side Views)
Equipment Used: Hash-Cam Pro HD, MDVR-Lite, 15m Coaxial cables
Time Taken: 2.5 hours
Status: Fully Completed
Audit Status: Passed
Notes: Front windshield camera aligned and secured. Left/right side camera mirrors mounted using standard vehicle mounting plates. Tested video feeds locally, clear reception, telemetry and GPS signal synced.

--- JOB SHEET #002 ---
Date: 2026-06-16
Technician: Sarah Connor
Vehicle ID: VT-409 (Heavy Tipper Truck)
Installation Type: 4-Camera System + MDVR Secure
Equipment Used: Hash-Cam Rugged, MDVR-Pro 4G, Heavy GPS Antenna, Extension Cable (10m)
Time Taken: 4.0 hours
Status: Completed with Warnings
Audit Status: Needs Verification
Notes: MDVR system installed securely beneath the passenger's seat. Front/Rear camera links established. Rear chassis running cable pulled through flexible heat conduit. System triggers warning: GPS Signal weak inside concrete garage; re-tested outdoors and received stable lock, but needs follow-up.

--- JOB SHEET #003 ---
Date: 2026-06-16
Technician: Alex Mercer
Vehicle ID: VT-077 (Refrigerated Box Truck)
Installation Type: 2-Camera (Cab + Internal Box Temp Cam)
Equipment Used: Hash-Cam Pro HD, Dome Camera Interior, Cab Monitor
Time Taken: 1.5 hours
Status: Failed Audit
Audit Status: Failed
Notes: Post-install inspection flagged critical issues. Cargo area dome camera was mounted upside down. Cable slack was left unsecured behind the dashboard console instead of zip-tied. Re-assigned to technician for correction.

--- JOB SHEET #004 ---
Date: 2026-06-17
Technician: David Miller
Vehicle ID: VT-012 (Transit Bus)
Installation Type: 6-Camera Fleet System + Driver Monitor
Equipment Used: Hash-Cam HD Wide-Angle (x6), MDVR-Enterprise, 7" Driver Display
Time Taken: 5.5 hours
Status: Fully Completed
Audit Status: Passed
Notes: Extensive wiring through ceiling panels. All 6 feeds verified. Driver feedback monitor displays automatic blind-spot views when blinkers are activated. High-quality zip-tying and weather seals applied.

--- JOB SHEET #005 ---
Date: 2026-06-18
Technician: Sarah Connor
Vehicle ID: VT-305 (Waste Disposal Truck)
Installation Type: 4-Camera Rugged System
Equipment Used: Hash-Cam Rugged (x4), Cab Monitor, MDVR-Lite
Time Taken: 3.0 hours
Status: Incomplete
Audit Status: Pending Completion
Notes: Heavy duty mount required custom welding on the steel container frame. Successfully mounted rear and side cameras, but ran out of 15-meter cable extension line. Job halted, scheduled return visit on 2026-06-21.

--- JOB SHEET #006 ---
Date: 2026-06-19
Technician: David Miller
Vehicle ID: VT-115 (Flatbed Trailer)
Installation Type: 2-Camera Rearview System
Equipment Used: Hash-Cam Rugged, Cab Monitor, Trailer Spiral Link Cable
Time Taken: 2.0 hours
Status: Fully Completed
Audit Status: Passed
Notes: Mounted ultra-durable camera high on the headboard of flatbed. Inter-vehicle heavy duty connector installed to allow fast trailer detachment. Audio feed confirmed clear.`;

const stripBom = (text) => text.replace(/^\uFEFF/, '');

const detectDelimiter = (line) => {
  if (line.includes('\t')) return '\t';
  if (line.includes(';')) return ';';
  return ',';
};

const parseCsvLine = (line, delimiter) => {
  const result = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === delimiter && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result.map((cell) => cell.replace(/^["']|["']$/g, ''));
};

const isMarkerLine = (line) => /^---\s*(?:JOB SHEET|SHEET)\b/i.test(line);

const looksLikeHeaderRow = (cells) => {
  if (cells.length < 2) return false;
  const headers = cells.map((cell) => cell.toLowerCase());
  return headers.some((header) =>
    header.includes('date') ||
    header.includes('tech') ||
    header.includes('vehicle') ||
    header.includes('install') ||
    header.includes('audit') ||
    header.includes('hour') ||
    header.includes('duration')
  );
};

const findHeaderRowIndex = (lines) => {
  for (let i = 0; i < lines.length; i++) {
    if (isMarkerLine(lines[i])) continue;
    const delimiter = detectDelimiter(lines[i]);
    const cells = parseCsvLine(lines[i], delimiter);
    if (looksLikeHeaderRow(cells)) return i;
  }
  return -1;
};

const findColumnIndex = (headers, patterns) => {
  for (const pattern of patterns) {
    const idx = headers.findIndex((header) => pattern.test(header));
    if (idx !== -1) return idx;
  }
  return -1;
};

const parseTabularDocument = (text) => {
  const lines = stripBom(text)
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const headerRowIndex = findHeaderRowIndex(lines);
  if (headerRowIndex === -1) return null;

  const delimiter = detectDelimiter(lines[headerRowIndex]);
  const headers = parseCsvLine(lines[headerRowIndex], delimiter).map((header) =>
    header.toLowerCase().trim()
  );

  const dateIdx = findColumnIndex(headers, [/date/]);
  const techIdx = findColumnIndex(headers, [/technician/, /\btech\b/, /installer/, /engineer/]);
  const vehicleIdx = findColumnIndex(headers, [/vehicle\s*id/, /vehicle/, /\bcar\b/, /truck/, /fleet/]);
  const typeIdx = findColumnIndex(headers, [/install/, /\btype\b/]);
  const equipIdx = findColumnIndex(headers, [/equip/, /part/, /tool/, /material/]);
  const durationIdx = findColumnIndex(headers, [/time taken/, /hours?/, /duration/]);
  const auditIdx = findColumnIndex(headers, [/audit/, /inspect/, /\bqa\b/]);
  const statusIdx = headers.findIndex(
    (header) => (header.includes('status') || header.includes('state')) && !header.includes('audit')
  );

  const getCell = (cols, idx, fallback = '') =>
    idx !== -1 && cols[idx] !== undefined && cols[idx] !== '' ? cols[idx] : fallback;

  return lines.slice(headerRowIndex + 1)
    .filter((line) => !isMarkerLine(line))
    .map((line, index) => {
      const cols = parseCsvLine(line, delimiter);
      if (cols.every((cell) => !cell)) return null;

      return {
        id: `CSV-${101 + index}`,
        date: getCell(cols, dateIdx, '2026-06-21'),
        technician: getCell(cols, techIdx, 'Unknown Tech'),
        vehicleId: getCell(cols, vehicleIdx, 'VT-UNK'),
        installType: getCell(cols, typeIdx, 'General Camera Mount'),
        equipment: getCell(cols, equipIdx, 'Standard Kit'),
        time: durationIdx !== -1 ? (parseFloat(getCell(cols, durationIdx)) || 1.5) : 1.5,
        status: getCell(cols, statusIdx, 'Completed'),
        audit: getCell(cols, auditIdx, 'Passed'),
        raw: line,
      };
    })
    .filter(Boolean);
};

const parseJobSheetDocument = (text) => {
  const templateChunks = text.split(/--- JOB SHEET #\d+ ---/gi).map((chunk) => chunk.trim()).filter(Boolean);

  return templateChunks.map((sheet, index) => {
    const data = { id: `JOB-${100 + index}`, raw: sheet };
    sheet.split('\n').forEach((line) => {
      const parts = line.split(':');
      if (parts.length >= 2) {
        const key = parts[0].trim().toLowerCase();
        const val = parts.slice(1).join(':').trim();
        if (key.includes('date')) data.date = val;
        if (key.includes('technician')) data.technician = val;
        if (key.includes('vehicle id')) data.vehicleId = val;
        if (key.includes('installation type')) data.installType = val;
        if (key.includes('equipment used')) data.equipment = val;
        if (key.includes('time taken')) data.time = parseFloat(val) || 0;
        if (key.includes('status') && !key.includes('audit')) data.status = val;
        if (key.includes('audit status') || key.includes('audit')) data.audit = val;
      }
    });
    return data;
  }).filter((job) => job.technician || job.vehicleId);
};

export default function App() {
  const [apiKey, setApiKey] = useState(() => {
    return localStorage.getItem('hash_analyze_key') || '';
  });
  const [showApiKey, setShowApiKey] = useState(false);
  const [rawText, setRawText] = useState(SAMPLE_INSTALLATION_LOGS);
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard', 'chat'
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hello! I am your **Hash-analyze AI Auditor**. Paste your job sheets, upload an Excel workbook, or ask me to perform cross-referencing audit analysis using **Gemini 2.5**.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [errorBanner, setErrorBanner] = useState('');
  const [successBanner, setSuccessBanner] = useState('');
  const [structuredJobs, setStructuredJobs] = useState([]);
  const [xlsxLoaded, setXlsxLoaded] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (window.XLSX) {
      setXlsxLoaded(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
    script.async = true;
    script.onload = () => setXlsxLoaded(true);
    script.onerror = () => showNotification('error', 'Failed to load Excel parsing module.');
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    parseDocument(rawText);
  }, [rawText]);

  useEffect(() => {
    if (activeTab === 'chat' && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, activeTab, isGenerating]);

  const saveKeyToLocal = (key) => {
    setApiKey(key);
    localStorage.setItem('hash_analyze_key', key);
    showNotification('success', 'Gemini API Key saved locally!');
  };

  const showNotification = (type, text) => {
    if (type === 'success') {
      setSuccessBanner(text);
      setTimeout(() => setSuccessBanner(''), 4000);
    } else {
      setErrorBanner(text);
      setTimeout(() => setErrorBanner(''), 5000);
    }
  };

  const parseDocument = (text) => {
    try {
      if (!text || !text.trim()) {
        setStructuredJobs([]);
        return;
      }

      const hasJobSheets = /--- JOB SHEET #\d+ ---/i.test(text);
      const tabularRows = parseTabularDocument(text);

      if (tabularRows && tabularRows.length > 0) {
        setStructuredJobs(tabularRows);
        return;
      }

      if (hasJobSheets) {
        setStructuredJobs(parseJobSheetDocument(text));
        return;
      }

      setStructuredJobs([]);
    } catch (err) {
      setStructuredJobs([]);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (fileExtension === 'xlsx' || fileExtension === 'xls') {
      if (!window.XLSX) {
        showNotification('error', 'Excel parser framework is still loading. Please try again.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          const data = new Uint8Array(evt.target.result);
          const workbook = window.XLSX.read(data, { type: 'array' });
          let formattedText = '';

          workbook.SheetNames.forEach((sheetName) => {
            const worksheet = workbook.Sheets[sheetName];
            const csvContent = window.XLSX.utils.sheet_to_csv(worksheet);
            if (csvContent.trim()) {
              formattedText += `--- SHEET: ${sheetName} ---\n${csvContent}\n\n`;
            }
          });

          if (!formattedText.trim()) {
            showNotification('error', 'Uploaded Excel file is empty.');
            return;
          }

          setRawText(formattedText.trim());
          showNotification('success', `Imported Excel Workbook: ${file.name}`);
        } catch (err) {
          showNotification('error', `Failed to read Excel format: ${err.message}`);
        }
      };
      reader.readAsArrayBuffer(file);
    } else {
      const reader = new FileReader();
      reader.onload = (evt) => {
        setRawText(evt.target.result);
        showNotification('success', `Imported Text Log: ${file.name}`);
      };
      reader.readAsText(file);
    }
  };

  const callGeminiAPI = async (prompt, systemPrompt = '') => {
    const activeKey = apiKey.trim();
    
    if (!activeKey) {
      return simulateResponse(prompt);
    }

    // Direct configuration using production-grade Gemini 2.5 Flash
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${activeKey}`;
    
    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      systemInstruction: systemPrompt ? { parts: [{ text: systemPrompt }] } : undefined
    };

    let delay = 1000;
    const maxRetries = 5;

    for (let i = 0; i < maxRetries; i++) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          const result = await response.json();
          const textResponse = result.candidates?.[0]?.content?.parts?.[0]?.text;
          if (textResponse) {
            return textResponse;
          } else {
            throw new Error("Empty response returned from Gemini 2.5 module.");
          }
        }

        if (response.status === 429 || response.status >= 500) {
          await new Promise(resolve => setTimeout(resolve, delay));
          delay *= 2;
          continue;
        }

        const errData = await response.json().catch(() => ({}));
        const errMsg = errData.error?.message || `HTTP ${response.status}`;
        throw new Error(`API Error: ${errMsg}`);
      } catch (error) {
        if (i === maxRetries - 1) {
          throw error;
        }
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2;
      }
    }
    throw new Error("Unable to connect to Gemini API after 5 retries.");
  };

  const simulateResponse = (prompt) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const lowerPrompt = prompt.toLowerCase();
        let response = `🔐 **[DEMO SIMULATION MODE - No Gemini Key Detected]**\n\n`;

        if (lowerPrompt.includes('audit') || lowerPrompt.includes('failed')) {
          response += `### 📋 Vehicle Camera Installation Quality Audit\n` +
            `- **Identified Issues**: 1 failed installation audit (Job #003 by Alex Mercer). Dome camera mounted upside down and wire clutter left behind console.\n` +
            `- **Partially Incomplete Jobs**: 1 system awaiting hardware parts (Job #005 by Sarah Connor - lacks 15m cable extension lines).\n` +
            `- **High Performers**: David Miller (Successful 6-camera transit bus setup with complex trigger integration).\n\n` +
            `*To get full production AI analytics on your specific custom Excel sheets, enter your **Gemini API Key** in the top bar.*`;
        } else if (lowerPrompt.includes('technician') || lowerPrompt.includes('efficiency')) {
          response += `### 👷 Technician Performance Summary\n` +
            `1. **David Miller**: Highly efficient. Completed major installs totaling 7.5 hours. Setup includes complex systems (6-camera on bus + flatbed trailers).\n` +
            `2. **Sarah Connor**: Reliable. Handled heavy fleet equipment (tippers, waste disposal), though stalled on Job #005 due to missing cable inventory.\n` +
            `3. **Alex Mercer**: Fast but requires quality supervision. Fast average install (2.0 hours) but recorded 1 structural failure audit (upside down dome camera).\n\n` +
            `*Enter your **Gemini API Key** in the top bar to generate custom reviews!*`;
        } else {
          response += `Based on the provided camera installation documents, we processed **${structuredJobs.length || 6} job records**:\n\n` +
            `- **Total Work Hours Logs**: ~${totalHours} cumulative hours in field.\n` +
            `- **Completed installs**: ${completedJobs} Fully Completed.\n` +
            `- **Audits**: ${passedAudits} Passed / ${failedAudits} Failed.\n\n` +
            `How can I assist you further with these fleet installations? Or type "Run full audit" to get a detailed structured breakdown.`;
        }
        resolve(response);
      }, 1000);
    });
  };

  const handleSendMessage = async (e) => {
    if (e) e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMsg = inputMessage;
    setInputMessage('');
    
    setMessages(prev => [...prev, {
      role: 'user',
      text: userMsg,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);

    setIsGenerating(true);

    const systemPrompt = `You are Hash-analyze AI, a highly specialized fleet operations auditor and data analyst.
    Your objective is to inspect, analyze and answer questions strictly based on the provided logs/documents.
    We are utilizing production-ready Gemini 2.5 Flash for high context reasoning.
    Here is the uploaded document/sheets content:
    --- START DOCUMENT ---
    ${rawText}
    --- END DOCUMENT ---`;

    try {
      const responseText = await callGeminiAPI(userMsg, systemPrompt);
      setMessages(prev => [...prev, {
        role: 'assistant',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } catch (err) {
      showNotification('error', err.message);
      setMessages(prev => [...prev, {
        role: 'assistant',
        text: `⚠️ **Error running query**: ${err.message}. Please verify your API key and connection parameters.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } finally {
      setIsGenerating(false);
    }
  };

  const runPresetAnalysis = async (presetType) => {
    setActiveTab('chat');
    let promptText = '';
    
    if (presetType === 'audit') {
      promptText = "Perform a thorough Quality Audit. List all Passed, Failed, and Warning jobs. Pinpoint the specific technical issues and highlight which technicians need retraining.";
    } else if (presetType === 'tech') {
      promptText = "Analyze technician performance and workload. Create a comparison table with: name, total hours billed, number of completed jobs, failure rate, and feedback summary.";
    } else if (presetType === 'inventory') {
      promptText = "Audit the equipment used. List all parts consumed (e.g., cables, cameras, MDVRs) and call out missing inventory, bottleneck elements or hardware errors reported in notes.";
    }

    setInputMessage('');
    setMessages(prev => [...prev, {
      role: 'user',
      text: `⚡ Run Preset: [${presetType.toUpperCase()}] ${promptText.substring(0, 50)}...`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);

    setIsGenerating(true);

    const systemPrompt = `You are Hash-analyze AI, a specialized camera installation audit program running Gemini 2.5. 
    Analyze this document context:
    --- START DOCUMENT ---
    ${rawText}
    --- END DOCUMENT ---`;

    try {
      const responseText = await callGeminiAPI(promptText, systemPrompt);
      setMessages(prev => [...prev, {
        role: 'assistant',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } catch (err) {
      showNotification('error', err.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const totalHours = structuredJobs.reduce((acc, curr) => acc + (curr.time || 0), 0);
  const completedJobs = structuredJobs.filter(j => j.status?.toLowerCase().includes('completed') || j.status?.toLowerCase().includes('done')).length;
  const passedAudits = structuredJobs.filter(j => j.audit?.toLowerCase().includes('passed') || j.audit?.toLowerCase().includes('ok') || j.audit?.toLowerCase().includes('yes')).length;
  const failedAudits = structuredJobs.filter(j => j.audit?.toLowerCase().includes('failed') || j.audit?.toLowerCase().includes('no') || j.audit?.toLowerCase().includes('fail')).length;
  
  const techStats = {};
  structuredJobs.forEach(job => {
    if (job.technician) {
      if (!techStats[job.technician]) {
        techStats[job.technician] = { hours: 0, count: 0, failed: 0 };
      }
      techStats[job.technician].hours += job.time || 0;
      techStats[job.technician].count += 1;
      if (job.audit?.toLowerCase().includes('failed') || job.audit?.toLowerCase().includes('no')) {
        techStats[job.technician].failed += 1;
      }
    }
  });

  return (
    <div className="h-screen bg-slate-950 text-slate-100 flex flex-col overflow-hidden font-sans">
      
      {/* --- TOP BAR --- */}
      <header className="flex-none border-b border-slate-800 bg-slate-900/80 backdrop-blur px-6 py-4 flex items-center justify-between z-10">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 p-2 rounded-xl font-black text-xl tracking-tight shadow-md">
            #
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              Hash-analyze
            </h1>
            <p className="text-xs text-slate-400">LLM Intelligent Telematics & Installation Auditor (Gemini 2.5)</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative flex items-center bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 focus-within:border-amber-500 transition-all">
            <span className="text-slate-500 mr-2">
              <KeyIcon />
            </span>
            <input
              type={showApiKey ? 'text' : 'password'}
              placeholder="Gemini API Key..."
              value={apiKey}
              onChange={(e) => saveKeyToLocal(e.target.value)}
              className="bg-transparent border-none text-xs focus:ring-0 outline-none w-48 text-slate-200 placeholder-slate-600"
            />
            <button
              onClick={() => setShowApiKey(!showApiKey)}
              className="text-slate-500 hover:text-slate-300 ml-1 text-xs px-1"
              title="Show/Hide API Key"
            >
              {showApiKey ? 'Hide' : 'Show'}
            </button>
          </div>

          <div className="flex items-center space-x-2 text-xs">
            <span className={`w-2.5 h-2.5 rounded-full ${apiKey ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
            <span className="text-slate-400">{apiKey ? 'Gemini 2.5 Active' : 'Simulated Demo'}</span>
          </div>
        </div>
      </header>

      {/* --- NOTIFICATIONS --- */}
      {errorBanner && (
        <div className="bg-red-900/80 border-b border-red-800 text-red-200 text-sm px-6 py-3 flex items-center justify-between animate-fadeIn">
          <div className="flex items-center space-x-2">
            <AlertIcon />
            <span>{errorBanner}</span>
          </div>
          <button onClick={() => setErrorBanner('')} className="hover:text-white">
            <CloseIcon />
          </button>
        </div>
      )}

      {successBanner && (
        <div className="bg-emerald-950/80 border-b border-emerald-800 text-emerald-200 text-sm px-6 py-3 flex items-center justify-between animate-fadeIn">
          <div className="flex items-center space-x-2">
            <CheckIcon />
            <span>{successBanner}</span>
          </div>
          <button onClick={() => setSuccessBanner('')} className="hover:text-white">
            <CloseIcon />
          </button>
        </div>
      )}

      {/* --- MAIN SPLIT CONTAINER --- */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* === LEFT WORKSPACE === */}
        <div className="w-full lg:w-5/12 bg-slate-900/50 border-r border-slate-800 flex flex-col p-6 overflow-y-auto space-y-6">
          
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-amber-400 font-semibold text-sm">
                <FileIcon />
                <span>ACTIVE SOURCE FILE</span>
              </div>
              <button
                onClick={() => {
                  setRawText(SAMPLE_INSTALLATION_LOGS);
                  showNotification('success', 'Restored default vehicle camera installation logs.');
                }}
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1 rounded transition"
              >
                Load Sample Sheets
              </button>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Paste raw CSV logs, or upload custom job sheets. You can now drag-and-drop or select standard Excel sheets (<code className="text-amber-400">.xlsx</code> / <code className="text-amber-400">.xls</code>) to inspect them dynamically.
            </p>

            <textarea
              className="w-full h-80 bg-slate-950 text-slate-300 border border-slate-800 rounded-lg p-3 text-xs font-mono focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none resize-y"
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
              placeholder="Paste raw log lines, CSV text or click upload file..."
            />

            <div className="flex justify-between items-center text-xs">
              <label className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-slate-300 px-3.5 py-2.5 rounded-lg cursor-pointer transition">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <span className="font-semibold text-slate-200">Import Excel, CSV, or Text</span>
                <input
                  type="file"
                  accept=".txt,.csv,.json,.log,.xlsx,.xls"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
              
              <div className="text-slate-500 font-mono text-[11px] flex flex-col items-end">
                <span>{rawText.length.toLocaleString()} chars</span>
                <span>{structuredJobs.length} records parsed</span>
              </div>
            </div>

            {xlsxLoaded ? (
              <div className="bg-emerald-950/20 border border-emerald-500/20 text-emerald-400/90 text-[10px] px-3 py-1.5 rounded-lg flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Excel Spreadsheet Engine Active</span>
              </div>
            ) : (
              <div className="bg-slate-950/40 border border-slate-800 text-slate-500 text-[10px] px-3 py-1.5 rounded-lg flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600 animate-pulse"></span>
                <span>Loading Excel modules...</span>
              </div>
            )}
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
            <h3 className="text-sm font-semibold text-slate-200 flex items-center space-x-2">
              <MagicIcon />
              <span>EXPRESS AUDIT ACTIONS</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Run audits or inspect technician benchmarks with Gemini 2.5 instantly.
            </p>

            <div className="grid grid-cols-1 gap-2.5 pt-1.5">
              <button
                onClick={() => runPresetAnalysis('audit')}
                className="flex items-center justify-between text-left px-4 py-3 bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 rounded-xl transition text-xs group"
              >
                <div>
                  <div className="font-semibold text-slate-200">🔍 Quality Assurance Audit</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Find inverted mounts, wiring errors, & pending issues.</div>
                </div>
                <span className="text-amber-500 group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <button
                onClick={() => runPresetAnalysis('tech')}
                className="flex items-center justify-between text-left px-4 py-3 bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 rounded-xl transition text-xs group"
              >
                <div>
                  <div className="font-semibold text-slate-200">👷 Technician Performance Index</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Compare total hours, error rates, and job counts.</div>
                </div>
                <span className="text-amber-500 group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <button
                onClick={() => runPresetAnalysis('inventory')}
                className="flex items-center justify-between text-left px-4 py-3 bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 rounded-xl transition text-xs group"
              >
                <div>
                  <div className="font-semibold text-slate-200">📦 Hardware & Cable Consumption</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">List MDVRs, specific camera parts, and stock warnings.</div>
                </div>
                <span className="text-amber-500 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

        </div>

        {/* === RIGHT WORKSPACE: Structured Outputs === */}
        <div className="w-full lg:w-7/12 flex flex-col bg-slate-950 overflow-hidden">
          
          {/* Workspace Tabs */}
          <div className="flex-none border-b border-slate-800 bg-slate-900/40 px-6 flex space-x-6">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`py-4 text-sm font-semibold flex items-center space-x-2 border-b-2 transition ${
                activeTab === 'dashboard' ? 'border-amber-500 text-amber-500' : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <ChartIcon />
              <span>Parsed Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`py-4 text-sm font-semibold flex items-center space-x-2 border-b-2 transition ${
                activeTab === 'chat' ? 'border-amber-500 text-amber-500' : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <ChatIcon />
              <span>Interactive AI Chat</span>
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="flex-1 flex flex-col overflow-hidden">
            
            {/* === TAB 1: DASHBOARD AND STATS === */}
            {activeTab === 'dashboard' && (
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                
                {/* Micro Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                    <div className="text-xs text-slate-400">Total Installations</div>
                    <div className="text-2xl font-bold mt-1 text-slate-100">{structuredJobs.length}</div>
                    <div className="text-[10px] text-slate-500 mt-1">Processed from doc context</div>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                    <div className="text-xs text-slate-400">Hours Registered</div>
                    <div className="text-2xl font-bold mt-1 text-amber-400">{totalHours}h</div>
                    <div className="text-[10px] text-slate-500 mt-1">Accumulated labor log</div>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                    <div className="text-xs text-slate-400">Passed Quality Audit</div>
                    <div className="text-2xl font-bold mt-1 text-emerald-400">{passedAudits}</div>
                    <div className="text-[10px] text-slate-500 mt-1">High-quality standards</div>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                    <div className="text-xs text-slate-400">Failed / Retake Items</div>
                    <div className="text-2xl font-bold mt-1 text-rose-500">{failedAudits}</div>
                    <div className="text-[10px] text-slate-500 mt-1">Requiring direct attention</div>
                  </div>
                </div>

                {/* Main Visualized Insights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Technician Leaderboard Chart */}
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Workload by Technician</h3>
                    <div className="space-y-3">
                      {Object.keys(techStats).length === 0 ? (
                        <p className="text-xs text-slate-500">No structured data found to graph.</p>
                      ) : (
                        Object.entries(techStats).map(([name, stats]) => {
                          const percentage = Math.min((stats.hours / 15) * 100, 100);
                          return (
                            <div key={name} className="space-y-1">
                              <div className="flex justify-between text-xs text-slate-300">
                                <span className="font-semibold">{name}</span>
                                <span>{stats.count} Jobs ({stats.hours} hrs)</span>
                              </div>
                              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden flex">
                                <div 
                                  className="bg-amber-500 rounded-full h-full"
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                              {stats.failed > 0 && (
                                <div className="text-[9px] text-rose-400 flex items-center space-x-1">
                                  <span>⚠️ Flagged {stats.failed} failed audit(s)</span>
                                </div>
                              )}
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>

                  {/* Quality Ratio SVG Graph */}
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Quality Audit Split</h3>
                      <p className="text-[11px] text-slate-400">Calculated quality audit outcomes parsed directly from active installation log structures.</p>
                    </div>

                    <div className="flex items-center space-x-6 my-4">
                      {/* Simple Pie Chart Representation using SVG */}
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 32 32">
                        {/* Circular progress representations */}
                        <circle cx="16" cy="16" r="14" fill="transparent" stroke="#1e293b" strokeWidth="4" />
                        
                        {/* Passed Segment (Emerald) */}
                        <circle cx="16" cy="16" r="14" fill="transparent" stroke="#10b981" strokeWidth="4" 
                          strokeDasharray={`${Math.round((passedAudits / (structuredJobs.length || 1)) * 88)} 88`} 
                          strokeDashoffset="0"
                        />

                        {/* Failed Segment (Rose) */}
                        <circle cx="16" cy="16" r="14" fill="transparent" stroke="#f43f5e" strokeWidth="4" 
                          strokeDasharray={`${Math.round((failedAudits / (structuredJobs.length || 1)) * 88)} 88`} 
                          strokeDashoffset={`-${Math.round((passedAudits / (structuredJobs.length || 1)) * 88)}`}
                        />
                      </svg>

                      <div className="space-y-1.5 text-xs">
                        <div className="flex items-center space-x-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                          <span className="text-slate-300">Passed: {passedAudits} ({Math.round((passedAudits / (structuredJobs.length || 1)) * 100)}%)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                          <span className="text-slate-300">Failed: {failedAudits} ({Math.round((failedAudits / (structuredJobs.length || 1)) * 100)}%)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
                          <span className="text-slate-400">Other/Warnings: {structuredJobs.length - (passedAudits + failedAudits)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Structured Job Sheet View Table */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                  <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">Active Detected Records</h3>
                    <span className="text-[10px] bg-slate-800 text-amber-400 px-2.5 py-0.5 rounded-full font-semibold">Parsed Log Elements</span>
                  </div>
                  <div className="overflow-x-auto font-sans">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-slate-950 text-slate-400 border-b border-slate-800 uppercase text-[10px]">
                          <th className="p-4">ID</th>
                          <th className="p-4">Date</th>
                          <th className="p-4">Technician</th>
                          <th className="p-4">Vehicle ID</th>
                          <th className="p-4">Type</th>
                          <th className="p-4">Duration</th>
                          <th className="p-4">Audit</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800">
                        {structuredJobs.map((job) => {
                          const isPass = job.audit?.toLowerCase().includes('pass') || job.audit?.toLowerCase().includes('ok') || job.audit?.toLowerCase().includes('yes');
                          const isFail = job.audit?.toLowerCase().includes('fail') || job.audit?.toLowerCase().includes('no');
                          
                          return (
                            <tr key={job.id} className="hover:bg-slate-800/40 transition">
                              <td className="p-4 font-mono font-semibold text-slate-300">{job.id}</td>
                              <td className="p-4 text-slate-400">{job.date || 'N/A'}</td>
                              <td className="p-4 font-medium text-slate-200">{job.technician || 'N/A'}</td>
                              <td className="p-4 text-slate-400 font-mono">{job.vehicleId || 'N/A'}</td>
                              <td className="p-4 text-slate-400 truncate max-w-[150px]">{job.installType || 'N/A'}</td>
                              <td className="p-4 text-amber-500 font-semibold">{job.time ? `${job.time} hrs` : 'N/A'}</td>
                              <td className="p-4">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                                  isPass ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                  isFail ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' :
                                  'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                }`}>
                                  {job.audit || 'Pending'}
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

            {/* === TAB 2: BOTTOM-ALIGNED CHAT CONTAINER === */}
            {activeTab === 'chat' && (
              <div className="flex-1 flex flex-col overflow-hidden p-6">
                
                {/* Scrollable messages area with spacers to anchor items to bottom */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2 flex flex-col">
                  {/* Spacer to push conversation to bottom when there are few items */}
                  <div className="flex-grow" />
                  
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                      <div className="flex items-center space-x-2 text-[10px] text-slate-500 mb-1 px-1">
                        <span className="font-semibold">{msg.role === 'user' ? 'You' : 'Hash-analyze AI'}</span>
                        <span>•</span>
                        <span>{msg.timestamp}</span>
                      </div>
                      <div className={`max-w-[85%] rounded-2xl p-4 text-xs leading-relaxed ${
                        msg.role === 'user' 
                          ? 'bg-amber-500 text-slate-950 font-medium rounded-tr-none' 
                          : 'bg-slate-900 text-slate-200 rounded-tl-none border border-slate-800'
                      }`}>
                        <div className="space-y-2 whitespace-pre-wrap">
                          {msg.text.split('\n').map((line, idx) => {
                            let processed = line;
                            const boldRegex = /\*\*(.*?)\*\*/g;
                            const parts = [];
                            let lastIndex = 0;
                            let match;

                            while ((match = boldRegex.exec(line)) !== null) {
                              if (match.index > lastIndex) {
                                parts.push(line.substring(lastIndex, match.index));
                              }
                              parts.push(<strong key={match.index} className="text-white font-extrabold">{match[1]}</strong>);
                              lastIndex = boldRegex.lastIndex;
                            }
                            if (lastIndex < line.length) {
                              parts.push(line.substring(lastIndex));
                            }

                            return (
                              <p key={idx}>
                                {parts.length > 0 ? parts : line}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isGenerating && (
                    <div className="flex flex-col items-start">
                      <div className="text-[10px] text-slate-500 mb-1 px-1">AI Assistant is reasoning...</div>
                      <div className="bg-slate-900 border border-slate-800 rounded-2xl rounded-tl-none p-4 max-w-[85%] flex items-center space-x-3">
                        <div className="flex space-x-1.5">
                          <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                        <span className="text-xs text-slate-400">Processing file insights with Gemini 2.5...</span>
                      </div>
                    </div>
                  )}
                  {/* Invisible anchor targeting bottom view on scroll events */}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area (Pinned to bottom of the chat view container) */}
                <form onSubmit={handleSendMessage} className="flex-none bg-slate-900 border border-slate-800 rounded-2xl p-2 flex items-center space-x-2">
                  <input
                    type="text"
                    className="flex-1 bg-transparent border-none text-xs text-slate-200 placeholder-slate-500 focus:ring-0 outline-none px-3 py-2"
                    placeholder="Ask Gemini 2.5 about installation errors, hardware counts, technician feedback..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-xl transition flex items-center space-x-1.5"
                    disabled={isGenerating}
                  >
                    <span>Send</span>
                    <SendIcon />
                  </button>
                </form>

              </div>
            )}

          </div>

        </div>

      </div>

      {/* --- FOOTER / METRICS --- */}
      <footer className="flex-none bg-slate-900/60 border-t border-slate-800 text-slate-500 text-[11px] px-6 py-3 text-center flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <div>
          <span>Powered by Gemini 2.5 Engine & Hash-analyze Core with SheetJS Support.</span>
        </div>
        <div className="flex space-x-4">
          <span>Target Model: <strong>gemini-2.5-flash</strong></span>
          <span>•</span>
          <span>Environment Secure</span>
        </div>
      </footer>

    </div>
  );
}
