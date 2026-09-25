/**
 * ============================================================
 *  PrimeBD — React Frontend (Premium Black & Blue Theme)
 *  Language: Bengali (Bangla)
 *  API: https://www.gajarbotol.site/nirob/api.php
 * ============================================================
 */

import { useState, useEffect, useRef, useCallback } from "react";

// ============================================================
//  CONFIG
// ============================================================
const API_URL = "https://www.gajarbotol.site/nirob/prime/config.php";

// ============================================================
//  Icon system — plain line icons, no emoji, currentColor only
// ============================================================
function Icon({ name, size = 20 }) {
    const common = {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
    };
    switch (name) {
        case "home":
            return (
                <svg {...common}>
                    <path d="M4 11.5 12 4l8 7.5" />
                    <path d="M6 10v9h12v-9" />
                    <path d="M10 19v-6h4v6" />
                </svg>
            );
        case "bolt":
            return (
                <svg {...common}>
                    <path d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z" />
                </svg>
            );
        case "withdraw":
            return (
                <svg {...common}>
                    <rect x="3" y="7" width="18" height="13" rx="2" />
                    <path d="M3 11h18" />
                    <path d="M12 15v-8" />
                    <path d="m9 10 3-3 3 3" />
                </svg>
            );
        case "trophy":
            return (
                <svg {...common}>
                    <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
                    <path d="M8 5H5a3 3 0 0 0 3 4" />
                    <path d="M16 5h3a3 3 0 0 1-3 4" />
                    <path d="M12 13v3" />
                    <path d="M9 20h6" />
                    <path d="M9.5 16h5l.5 4h-6l.5-4Z" />
                </svg>
            );
        case "tv":
            return (
                <svg {...common}>
                    <rect x="3" y="5" width="18" height="12" rx="2" />
                    <path d="M8 21h8" />
                    <path d="M12 17v4" />
                </svg>
            );
        case "gift":
            return (
                <svg {...common}>
                    <rect x="4" y="9" width="16" height="11" rx="1.5" />
                    <path d="M4 13h16" />
                    <path d="M12 9v11" />
                    <path d="M12 9C9.5 9 8 7.8 8 6.3 8 5 9 4 10.2 4 11.7 4 12 6.5 12 9Z" />
                    <path d="M12 9c2.5 0 4-1.2 4-2.7C16 5 15 4 13.8 4 12.3 4 12 6.5 12 9Z" />
                </svg>
            );
        case "chart":
            return (
                <svg {...common}>
                    <path d="M4 20V10" />
                    <path d="M11 20V4" />
                    <path d="M18 20v-7" />
                    <path d="M3 20h18" />
                </svg>
            );
        case "coin":
            return (
                <svg {...common}>
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M9.7 9.6c0-1 1-1.7 2.3-1.7s2.3.7 2.3 1.5c0 2.1-4.6 1.6-4.6 3.9 0 .9 1 1.7 2.3 1.7s2.3-.7 2.3-1.6" />
                    <path d="M12 6.5v11" />
                </svg>
            );
        case "check":
            return (
                <svg {...common}>
                    <path d="m4.5 12.5 5 5 10-11" />
                </svg>
            );
        case "bell":
            return (
                <svg {...common}>
                    <path d="M6 10a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 14 6 10Z" />
                    <path d="M10 19a2 2 0 0 0 4 0" />
                </svg>
            );
        case "share":
            return (
                <svg {...common}>
                    <circle cx="6" cy="12" r="2.2" />
                    <circle cx="18" cy="6" r="2.2" />
                    <circle cx="18" cy="18" r="2.2" />
                    <path d="m7.9 10.9 8.2-3.8" />
                    <path d="m7.9 13.1 8.2 3.8" />
                </svg>
            );
        case "copy":
            return (
                <svg {...common}>
                    <rect x="9" y="9" width="11" height="11" rx="2" />
                    <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                </svg>
            );
        case "rocket":
            return (
                <svg {...common}>
                    <path d="M12 3c3 1.5 5 4.8 5 9 0 2-1 4-1 4l-4 2-4-2s-1-2-1-4c0-4.2 2-7.5 5-9Z" />
                    <circle cx="12" cy="10" r="1.6" />
                    <path d="M9 16l-2.5 4M15 16l2.5 4" />
                </svg>
            );
        case "clock":
            return (
                <svg {...common}>
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M12 7.5V12l3 2" />
                </svg>
            );
        case "lock":
            return (
                <svg {...common}>
                    <rect x="5" y="11" width="14" height="9" rx="2" />
                    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                </svg>
            );
        case "target":
            return (
                <svg {...common}>
                    <circle cx="12" cy="12" r="8.5" />
                    <circle cx="12" cy="12" r="4.5" />
                    <circle cx="12" cy="12" r="1" fill="currentColor" />
                </svg>
            );
        case "gem":
            return (
                <svg {...common}>
                    <path d="M6 4h12l3 5-9 11L3 9Z" />
                    <path d="M3 9h18" />
                    <path d="m9 4-2 5 5 11 5-11-2-5" />
                </svg>
            );
        case "doc":
            return (
                <svg {...common}>
                    <path d="M7 3h7l4 4v14H7Z" />
                    <path d="M14 3v4h4" />
                    <path d="M10 12h6" />
                    <path d="M10 16h6" />
                </svg>
            );
        case "play":
            return (
                <svg {...common} fill="currentColor" stroke="none">
                    <path d="M8 5.5v13l11-6.5Z" />
                </svg>
            );
        case "close":
            return (
                <svg {...common}>
                    <path d="M6 6l12 12M18 6 6 18" />
                </svg>
            );
        case "wallet":
            return (
                <svg {...common}>
                    <path d="M4 8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
                    <path d="M4 8V6a2 2 0 0 1 2-2h9" />
                    <circle cx="16.5" cy="13" r="1.2" fill="currentColor" />
                </svg>
            );
        default:
            return null;
    }
}

// ============================================================
//  GLOBAL CSS — Premium Black & Blue Theme (PrimeBD)
// ============================================================
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

  :root {
    --bg: #07080b;
    --surface: #101216;
    --surface2: #16181e;
    --surface3: #1e212a;
    --text: #f2f3f5;
    --text-dim: #7d8494;
    --text-mid: #b7bcc6;
    --border: #21242c;
    --border2: #2c3039;
    --primary: #2f6fed;
    --primary2: #4f8bff;
    --primary3: #8fb4ff;
    --gold: #2f6fed;
    --gold2: #1f52c2;
    --green: #34c77b;
    --warning: #d6a44a;
    --danger: #e5645a;
    --grad-a: #1f52c2;
    --grad-b: #2f6fed;
    --grad-c: #7db0ff;
    --radius-lg: 22px;
    --radius-md: 16px;
    --radius-sm: 12px;
    --glow-gold: 0 10px 44px rgba(47,111,237,0.30);
    --shadow-card: 0 8px 28px rgba(0,0,0,0.5);
  }

  * { margin:0; padding:0; box-sizing:border-box; -webkit-tap-highlight-color:transparent; }
  html { background: var(--bg); }
  body {
    background:
      radial-gradient(1000px 520px at 50% -10%, rgba(47,111,237,0.07) 0%, transparent 60%),
      var(--bg);
    color:var(--text); font-family:'Inter',sans-serif; overflow-x:hidden;
  }
  #root { max-width:480px; margin:0 auto; min-height:100vh; padding-bottom:104px; position:relative; }

  /* ===================== LOADER ===================== */
  .loader-overlay {
    position:fixed; inset:0; background:var(--bg); z-index:9999;
    display:flex; flex-direction:column;
    justify-content:center; align-items:center;
    transition:opacity 0.6s ease, transform 0.6s ease;
  }
  .loader-bg-glow {
    position:absolute; inset:0;
    background: radial-gradient(ellipse at center, rgba(47,111,237,0.10) 0%, transparent 60%);
    animation: pulseGlowGold 2.8s ease-in-out infinite alternate;
  }
  @keyframes pulseGlowGold {
    0% { opacity:0.5; transform:scale(0.85); }
    100% { opacity:1; transform:scale(1.2); }
  }
  .loader-logo-container {
    position:relative; z-index:2; width:160px; height:160px;
    display:flex; align-items:center; justify-content:center;
  }
  .loader-ring {
    position:absolute; border-radius:50%;
    border:2px solid rgba(47,111,237,0.14);
  }
  .loader-ring.r1 { width:160px; height:160px; animation:loaderRingSpin 4s linear infinite; border-top-color:var(--primary); }
  .loader-ring.r2 { width:120px; height:120px; animation:loaderRingSpin 3.2s linear infinite reverse; border-right-color:var(--primary3); }
  @keyframes loaderRingSpin {
    from { transform:rotate(0deg); }
    to   { transform:rotate(360deg); }
  }
  .loader-logo {
    width:76px; height:76px; position:relative; z-index:2;
    border-radius:22px; color:#0b0c0f;
    background:linear-gradient(145deg, var(--grad-a), var(--grad-b));
    display:flex; align-items:center; justify-content:center;
    box-shadow:0 16px 48px rgba(47,111,237,0.30);
    animation: logoFloat 2.4s ease-in-out infinite;
  }
  @keyframes logoFloat {
    0%,100% { transform:translateY(0) scale(1); }
    50% { transform:translateY(-8px) scale(1.06); }
  }
  .loader-brand-name {
    position:relative; z-index:2; margin-top:30px;
    font-size:1.6rem; font-weight:900; letter-spacing:-0.5px;
    background:linear-gradient(135deg, var(--primary), var(--primary3));
    -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
  }
  .loader-brand-sub {
    position:relative; z-index:2; margin-top:6px;
    font-size:0.8rem; font-weight:600; letter-spacing:3px;
    text-transform:uppercase; color:var(--text-dim);
  }
  .loader-dots {
    position:relative; z-index:2; margin-top:24px;
    display:flex; gap:10px;
  }
  .loader-dots span {
    width:10px; height:10px; border-radius:50%;
    background:var(--primary);
    animation:loaderDot 1.4s ease-in-out infinite;
  }
  .loader-dots span:nth-child(2) { background:var(--primary2); animation-delay:0.2s; }
  .loader-dots span:nth-child(3) { background:var(--primary3); animation-delay:0.4s; }
  @keyframes loaderDot {
    0%,100% { opacity:0.2; transform:scale(0.6); }
    50% { opacity:1; transform:scale(1.2); }
  }

  /* ===================== TOAST ===================== */
  .toast {
    position:fixed; top:-100px; left:50%; transform:translateX(-50%);
    background:var(--surface2); color:var(--text);
    box-shadow:0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px var(--border2);
    border-radius:100px; padding:13px 24px;
    font-size:0.88rem; font-weight:700;
    display:flex; align-items:center; gap:10px;
    z-index:10000; transition:top 0.4s cubic-bezier(0.175,0.885,0.32,1.275);
    max-width:88%; white-space:nowrap; pointer-events:none;
    font-family:'Inter',sans-serif;
    border-left:3px solid var(--primary);
  }
  .toast.show { top:20px; }
  .toast-icon { color:var(--primary); flex-shrink:0; display:flex; }
  .toast.error .toast-icon { color:var(--danger); }
  .toast.warning .toast-icon { color:var(--warning); }

  /* ===================== MODAL ===================== */
  .modal-overlay {
    position:fixed; inset:0; z-index:300;
    background:rgba(0,0,0,0.72);
    backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px);
    display:flex; align-items:center; justify-content:center;
    animation:fadeUp 0.25s ease both;
  }
  .modal-card {
    width:calc(100% - 44px); max-width:380px;
    background:linear-gradient(170deg, #131519 0%, #0e1013 100%);
    border:1px solid var(--border2);
    border-radius:26px; padding:30px 24px 24px;
    position:relative; overflow:hidden; text-align:center;
    box-shadow:0 30px 80px rgba(0,0,0,0.6), var(--glow-gold);
    animation:modalPop 0.5s cubic-bezier(0.34,1.56,0.64,1) both;
  }
  @keyframes modalPop {
    from { opacity:0; transform:scale(0.7) translateY(40px); }
    to   { opacity:1; transform:scale(1) translateY(0); }
  }
  .modal-card::before {
    content:''; position:absolute; top:0; left:0; right:0; height:3px;
    background:linear-gradient(90deg, var(--grad-a), var(--grad-b), var(--grad-c));
  }
  .modal-icon {
    width:68px; height:68px; margin:0 auto 16px; border-radius:50%;
    background:rgba(47,111,237,0.10); border:1px solid rgba(47,111,237,0.30);
    display:flex; align-items:center; justify-content:center;
    color:var(--primary);
    position:relative; z-index:1;
  }
  .modal-card h3 {
    font-size:1.4rem; font-weight:900; letter-spacing:-0.5px; color:var(--text);
    position:relative; z-index:1;
  }
  .modal-sub {
    font-size:0.82rem; color:var(--text-mid); margin-top:6px;
    position:relative; z-index:1;
  }
  .btn-modal-close {
    width:100%; padding:15px; border:none; border-radius:14px;
    background:linear-gradient(135deg, var(--grad-a), var(--grad-b));
    color:#ffffff; font-size:0.95rem; font-weight:800; cursor:pointer;
    position:relative; z-index:1;
    transition:0.2s; box-shadow:0 6px 24px rgba(47,111,237,0.30);
  }
  .btn-modal-close:active { transform:scale(0.97); opacity:0.9; }

  /* ===================== WITHDRAW RECEIPT (distinct look) ===================== */
  .receipt-card {
    width:calc(100% - 44px); max-width:380px;
    background:var(--surface); border:1px solid var(--border2);
    border-radius:20px; overflow:hidden; text-align:left;
    box-shadow:0 30px 80px rgba(0,0,0,0.6);
    animation:modalPop 0.45s cubic-bezier(0.34,1.56,0.64,1) both;
  }
  .receipt-head {
    padding:22px 22px 18px; display:flex; align-items:center; gap:14px;
    background:linear-gradient(135deg, rgba(47,111,237,0.14), rgba(47,111,237,0.03));
    border-bottom:1px dashed var(--border2);
  }
  .receipt-head-icon {
    width:46px; height:46px; border-radius:14px; flex-shrink:0;
    background:rgba(47,111,237,0.14); border:1px solid rgba(47,111,237,0.30);
    color:var(--primary); display:flex; align-items:center; justify-content:center;
  }
  .receipt-head h3 { font-size:1.05rem; font-weight:800; color:var(--text); }
  .receipt-head p { font-size:0.74rem; color:var(--text-dim); margin-top:3px; }
  .receipt-body { padding:6px 22px 4px; }
  .receipt-row {
    display:flex; justify-content:space-between; align-items:center;
    padding:13px 0; border-bottom:1px dashed var(--border);
  }
  .receipt-row:last-child { border-bottom:none; }
  .receipt-row span { font-size:0.78rem; color:var(--text-dim); font-weight:500; }
  .receipt-row strong {
    font-size:0.86rem; color:var(--text); font-weight:700;
    font-variant-numeric:tabular-nums; max-width:60%; text-align:right;
    word-break:break-all;
  }
  .receipt-amount-row {
    display:flex; flex-direction:column; align-items:center;
    padding:18px 0 14px; border-bottom:1px dashed var(--border);
  }
  .receipt-amount-row small { font-size:0.7rem; color:var(--text-dim); font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:4px; }
  .receipt-amount-row strong {
    font-size:2.1rem; font-weight:900; letter-spacing:-1px;
    background:linear-gradient(135deg, var(--primary), var(--primary3));
    -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
  }
  .receipt-status-chip {
    display:inline-flex; align-items:center; gap:6px;
    font-size:0.72rem; font-weight:700; padding:4px 12px; border-radius:20px;
    background:rgba(224,168,62,0.12); border:1px solid rgba(224,168,62,0.32); color:var(--warning);
  }
  .receipt-note {
    font-size:0.73rem; color:var(--text-dim); line-height:1.7;
    padding:14px 22px 4px;
  }
  .receipt-foot { padding:16px 22px 22px; }
  .btn-receipt-close {
    width:100%; padding:15px; border:1px solid var(--border2); border-radius:14px;
    background:var(--surface2); color:var(--text); font-size:0.92rem; font-weight:700; cursor:pointer;
    transition:0.2s;
  }
  .btn-receipt-close:active { transform:scale(0.98); }

  /* ===================== TOP NAV ===================== */
  .top-nav {
    display:flex; justify-content:space-between; align-items:center;
    padding:16px 18px 14px; position:sticky; top:0; z-index:50;
    background: linear-gradient(to bottom, var(--bg) 60%, transparent);
  }
  .user-pill { display:flex; align-items:center; gap:12px; }
  .user-avatar { position:relative; }
  .user-avatar img {
    width:44px; height:44px; border-radius:50%;
    border:2px solid var(--primary); object-fit:cover;
    box-shadow:0 0 0 3px rgba(47,111,237,0.18);
  }
  .avatar-status {
    position:absolute; bottom:1px; right:1px; width:12px; height:12px;
    background:var(--green); border-radius:50%; border:2px solid var(--bg);
    animation:statusPulse 2s ease-in-out infinite;
  }
  @keyframes statusPulse {
    0%,100%{box-shadow:0 0 0 0 rgba(52,199,123,0.4)}
    50%{box-shadow:0 0 0 4px rgba(52,199,123,0)}
  }
  .user-info h3 { font-size:0.95rem; font-weight:700; }
  .user-info p { font-size:0.7rem; color:var(--text-dim); margin-top:1px; }

  /* ===================== PAGES ===================== */
  .page { padding:0 16px; animation:pageSlideIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both; }
  @keyframes pageSlideIn {
    from { opacity:0; transform:translateY(24px) scale(0.96); }
    to   { opacity:1; transform:translateY(0) scale(1); }
  }

  /* ===================== SECTION HEADING ===================== */
  .sec-head {
    font-size:0.9rem; font-weight:700; margin:24px 0 14px;
    display:flex; align-items:center; gap:9px; color:var(--text);
  }
  .sec-head .ic { color:var(--primary); display:flex; }

  /* ===================== STATS GRID ===================== */
  .stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:18px; }
  .stat-card {
    background:var(--surface); border:1px solid var(--border);
    border-radius:var(--radius-md); padding:16px 14px;
    transition:transform 0.25s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s, box-shadow 0.3s;
    animation: cardJump 0.7s cubic-bezier(0.34,1.56,0.64,1) both;
    cursor:default;
  }
  .stat-card:nth-child(1){ animation-delay:0.04s; }
  .stat-card:nth-child(2){ animation-delay:0.10s; }
  .stat-card:nth-child(3){ animation-delay:0.16s; }
  .stat-card:nth-child(4){ animation-delay:0.22s; }
  @keyframes cardJump {
    0% { opacity:0; transform:translateY(30px) scale(0.92); }
    60% { transform:translateY(4px) scale(0.99); }
    100% { opacity:1; transform:translateY(0) scale(1); }
  }
  .stat-card:active { transform:scale(0.96); }
  .stat-icon-wrap {
    width:36px; height:36px; border-radius:11px;
    display:flex; align-items:center; justify-content:center;
    margin-bottom:12px; background:rgba(47,111,237,0.10); border:1px solid rgba(47,111,237,0.22);
    color:var(--primary);
  }
  .stat-card p { font-size:0.7rem; color:var(--text-dim); font-weight:500; margin-bottom:5px; }
  .stat-card h4 { font-size:1.4rem; font-weight:800; letter-spacing:-0.5px; color:var(--text); font-variant-numeric:tabular-nums; }

  /* ===================== REFERRAL CARD ===================== */
  .ref-card {
    background:var(--surface); border:1px solid var(--border);
    border-radius:var(--radius-lg); padding:20px 18px;
    margin-bottom:18px; position:relative; overflow:hidden;
  }
  .ref-card::before {
    content:''; position:absolute; top:0; left:0; right:0; height:2.5px;
    background: linear-gradient(90deg, var(--grad-a), var(--grad-b), var(--grad-c));
  }
  .ref-top { display:flex; align-items:center; gap:14px; margin-bottom:16px; }
  .ref-icon {
    width:44px; height:44px; border-radius:14px;
    background:rgba(47,111,237,0.12); border:1px solid rgba(47,111,237,0.24);
    display:flex; align-items:center; justify-content:center; flex-shrink:0; color:var(--primary);
  }
  .ref-title h4 { font-size:0.95rem; font-weight:700; }
  .ref-badge {
    display:inline-flex; align-items:center; gap:5px;
    background:rgba(47,111,237,0.10); border:1px solid rgba(47,111,237,0.28);
    color:var(--primary2); padding:3px 10px; border-radius:20px;
    font-size:0.7rem; font-weight:700; margin-top:4px;
  }
  .ref-label { font-size:0.68rem; color:var(--text-dim); font-weight:600; margin-bottom:8px; }
  .ref-input-row {
    display:flex; background:var(--surface2); border:1px solid var(--border2);
    border-radius:var(--radius-sm); padding:5px 5px 5px 14px; margin-bottom:12px; align-items:center;
  }
  .ref-inp { flex:1; background:transparent; border:none; color:var(--text-mid); font-size:0.8rem; font-weight:500; outline:none; min-width:0; }
  .btn-copy {
    background: linear-gradient(135deg, var(--grad-a), var(--grad-b));
    color:#ffffff; border:none; padding:9px 15px; border-radius:9px;
    font-size:0.8rem; font-weight:700; cursor:pointer;
    display:flex; align-items:center; gap:6px; transition:0.2s; flex-shrink:0;
  }
  .btn-copy:active { transform:scale(0.93); opacity:0.85; }
  .btn-share {
    width:100%; padding:14px; border:none; border-radius:var(--radius-sm);
    background: linear-gradient(135deg, var(--grad-a), var(--grad-b));
    color:#ffffff; font-size:0.92rem; font-weight:700; cursor:pointer;
    display:flex; align-items:center; justify-content:center; gap:8px;
    transition:0.2s;
  }
  .btn-share:active { transform:scale(0.97); opacity:0.9; }

  /* ===================== ADS ===================== */
  .ad-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
  .ad-box {
    background:var(--surface); border:1px solid var(--border);
    border-radius:var(--radius-md); padding:18px 14px; text-align:center;
    transition:transform 0.2s, border-color 0.2s;
    animation:fadeUp 0.5s ease both;
  }
  .ad-box:active { transform:scale(0.97); }
  .ad-icon {
    width:48px; height:48px; border-radius:14px;
    background:rgba(47,111,237,0.10); border:1px solid rgba(47,111,237,0.20);
    display:flex; align-items:center; justify-content:center;
    margin:0 auto 12px; color:var(--primary);
  }
  .ad-box h4 { font-size:0.88rem; font-weight:600; margin-bottom:6px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .ad-reward { font-size:0.72rem; font-weight:700; color:var(--green); margin-bottom:8px; }
  .ad-counter {
    font-size:0.7rem; background:var(--surface2); border:1px solid var(--border);
    color:var(--text-dim); padding:3px 10px; border-radius:20px;
    display:inline-block; margin-bottom:14px; font-weight:500;
  }
  .ad-btn {
    background: linear-gradient(135deg, var(--grad-a), var(--grad-b));
    color:#ffffff; border:none; padding:10px 0; width:100%;
    border-radius:10px; font-size:0.83rem; font-weight:700; cursor:pointer;
    display:flex; align-items:center; justify-content:center; gap:6px;
    transition:0.2s;
  }
  .ad-btn:active:not(:disabled) { transform:scale(0.96); opacity:0.85; }
  .ad-btn:disabled {
    background:var(--surface2); color:var(--text-dim); cursor:not-allowed;
    border:1px solid var(--border);
  }
  .ad-progress {
    width:100%; height:5px; margin-top:10px;
    background:rgba(47,111,237,0.08); border-radius:10px; overflow:hidden;
    border:1px solid var(--border);
  }
  .ad-progress-fill {
    height:100%; border-radius:10px;
    background:linear-gradient(90deg, var(--grad-a), var(--grad-c));
    transition:width 1s linear;
  }

  /* ===================== TASKS ===================== */
  .task-list { display:flex; flex-direction:column; gap:12px; }
  .task-item {
    background:var(--surface); border:1px solid var(--border);
    border-radius:var(--radius-lg); padding:16px 18px;
    display:flex; align-items:center; justify-content:space-between; gap:10px;
    transition:transform 0.2s, border-color 0.2s;
    animation:fadeUp 0.5s ease both;
    box-shadow:var(--shadow-card);
    flex-wrap:wrap;
  }
  .task-item:active { transform:scale(0.99); }
  .task-left { display:flex; align-items:center; gap:16px; min-width:0; }
  .task-thumb {
    width:52px; height:52px; border-radius:15px;
    object-fit:cover; background:var(--surface2); flex-shrink:0;
    display:flex; align-items:center; justify-content:center; color:var(--text-dim);
  }
  .task-info h4 { font-size:0.95rem; font-weight:700; color:var(--text); margin-bottom:5px; }
  .task-reward { font-size:0.82rem; font-weight:800; color:var(--green); }
  .task-actions { display:flex; gap:8px; flex-shrink:0; }
  .btn-task {
    padding:10px 15px; border-radius:11px; font-size:0.8rem;
    font-weight:700; cursor:pointer; border:none; transition:0.2s;
    white-space:nowrap; display:flex; align-items:center; gap:5px;
  }
  .btn-task-open {
    background: linear-gradient(135deg, var(--grad-a), var(--grad-b));
    color:#ffffff;
  }
  .btn-task-open:disabled { opacity:0.5; cursor:not-allowed; }
  .btn-task-wait { background:var(--surface2); color:var(--text-dim); cursor:not-allowed; border:1px solid var(--border); }
  .btn-task-claim {
    background:transparent; color:var(--primary); border:1px solid rgba(47,111,237,0.5);
    animation:claimPulse 1.4s ease-in-out infinite;
  }
  .btn-task-claim:disabled { opacity:0.5; cursor:not-allowed; animation:none; }
  @keyframes claimPulse {
    0%,100%{ box-shadow:0 0 0 0 rgba(47,111,237,0.25) }
    50%{ box-shadow:0 0 0 6px rgba(47,111,237,0) }
  }

  /* ===================== MISSIONS ===================== */
  .mission-list { display:flex; flex-direction:column; gap:12px; }
  .mission-card {
    background:var(--surface); border:1px solid var(--border);
    border-radius:var(--radius-md); padding:16px;
    animation:fadeUp 0.5s ease both; position:relative; overflow:hidden;
  }
  .mission-card.done { border-color:rgba(47,111,237,0.30); }
  .mission-top { display:flex; align-items:center; gap:12px; margin-bottom:12px; }
  .mission-icon {
    width:42px; height:42px; border-radius:13px; flex-shrink:0;
    background:rgba(47,111,237,0.10); border:1px solid rgba(47,111,237,0.22);
    display:flex; align-items:center; justify-content:center; color:var(--primary);
  }
  .mission-info h4 { font-size:0.9rem; font-weight:700; margin-bottom:3px; }
  .mission-info p { font-size:0.72rem; color:var(--text-dim); }
  .mission-progress-bar {
    width:100%; height:7px; background:rgba(47,111,237,0.06);
    border-radius:10px; overflow:hidden; margin-bottom:10px;
    border:1px solid var(--border2);
  }
  .mission-progress-fill {
    height:100%; border-radius:10px;
    background:linear-gradient(90deg, var(--grad-a), var(--grad-c));
    transition:width 0.4s ease;
  }
  .mission-bottom { display:flex; justify-content:space-between; align-items:center; }
  .mission-count { font-size:0.72rem; color:var(--text-mid); font-weight:600; }
  .btn-mission-claim {
    padding:8px 16px; border-radius:10px; font-size:0.78rem; font-weight:700;
    border:none; cursor:pointer; transition:0.2s;
    background:linear-gradient(135deg, var(--grad-a), var(--grad-b));
    color:#ffffff;
  }
  .btn-mission-claim:disabled { opacity:0.5; cursor:not-allowed; }
  .mission-claimed-badge {
    font-size:0.72rem; font-weight:700; color:var(--green);
    display:flex; align-items:center; gap:5px;
  }

  /* ===================== METHOD SELECTOR ===================== */
  .method-selector-wrap { margin-bottom:16px; }
  .method-label {
    font-size:0.68rem; color:var(--text-dim); font-weight:600; margin-bottom:10px; display:block;
  }
  .method-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
  .method-card {
    background:var(--surface); border:2px solid var(--border);
    border-radius:var(--radius-md); padding:16px 12px; text-align:center;
    cursor:pointer; transition:0.2s; position:relative;
    animation:fadeUp 0.5s ease both;
  }
  .method-card:active { transform:scale(0.97); }
  .method-card.active {
    background:rgba(47,111,237,0.06);
    border-color:var(--primary);
  }
  .method-card h5 { font-size:0.88rem; font-weight:700; color:var(--text); margin-bottom:6px; }
  .method-card p { font-size:0.7rem; color:var(--text-dim); }
  .method-check {
    position:absolute; top:8px; right:8px; width:18px; height:18px;
    background:var(--primary); border-radius:50%; color:#ffffff;
    display:flex; align-items:center; justify-content:center;
    opacity:0; transition:0.2s; transform:scale(0);
  }
  .method-card.active .method-check { opacity:1; transform:scale(1); }

  /* ===================== WITHDRAW ===================== */
  .info-banner {
    background:rgba(47,111,237,0.06); border:1px solid rgba(47,111,237,0.20);
    border-radius:var(--radius-sm); padding:14px 16px;
    display:flex; align-items:flex-start; gap:12px; margin-bottom:16px; color:var(--primary);
  }
  .info-banner p { font-size:0.8rem; color:var(--text-mid); line-height:1.65; }
  .info-banner p strong { color:var(--text); }
  .input-wrap { position:relative; margin-bottom:12px; }
  .input-icon { position:absolute; top:50%; transform:translateY(-50%); left:15px; color:var(--text-dim); display:flex; }
  .form-inp {
    width:100%; padding:15px 15px 15px 44px;
    background:var(--surface); border:1px solid var(--border2);
    border-radius:var(--radius-sm); color:var(--text); font-size:0.93rem;
    font-weight:500; outline:none; transition:0.2s;
  }
  .form-inp:focus { border-color:var(--primary); box-shadow:0 0 0 3px rgba(47,111,237,0.14); }
  .form-inp::placeholder { color:var(--text-dim); opacity:0.8; }
  .btn-submit {
    width:100%; padding:16px; border:none; border-radius:var(--radius-sm);
    background: linear-gradient(135deg, var(--grad-a), var(--grad-b));
    color:#ffffff; font-size:0.97rem; font-weight:700; cursor:pointer;
    margin-top:6px; display:flex; align-items:center; justify-content:center; gap:8px;
    transition:0.2s;
  }
  .btn-submit:active:not(:disabled) { transform:scale(0.98); opacity:0.9; }
  .btn-submit:disabled { background:var(--surface2); cursor:not-allowed; color:var(--text-dim); }

  /* ===================== HISTORY ===================== */
  .hist-wrap {
    background:var(--surface); border:1px solid var(--border);
    border-radius:var(--radius-md); overflow:hidden;
  }
  .hist-item {
    display:flex; justify-content:space-between; align-items:center;
    padding:14px 16px; border-bottom:1px solid var(--border);
    animation:fadeUp 0.4s ease both;
  }
  .hist-item:last-child { border-bottom:none; }
  .hist-left { display:flex; align-items:center; gap:13px; }
  .hist-icon {
    width:40px; height:40px; border-radius:12px;
    background:var(--surface2); display:flex; align-items:center; justify-content:center;
  }
  .hist-info h4 { font-size:0.88rem; font-weight:600; }
  .hist-info small { font-size:0.7rem; color:var(--text-dim); }
  .hist-right { text-align:right; }
  .hist-amt { font-size:0.92rem; font-weight:700; display:block; margin-bottom:4px; }
  .hist-badge { font-size:0.62rem; padding:2px 8px; border-radius:6px; font-weight:700; }
  .status-pending  { background:rgba(224,168,62,0.12); color:var(--warning); }
  .status-completed{ background:rgba(52,199,123,0.12); color:var(--green); }
  .status-rejected { background:rgba(229,100,90,0.12); color:var(--danger); }

  /* ===================== BOTTOM NAV ===================== */
  .bottom-nav {
    position:fixed; bottom:16px; left:50%; transform:translateX(-50%);
    width:calc(100% - 24px); max-width:460px;
    background:rgba(16,18,22,0.92); border:1px solid var(--border2);
    padding:6px 4px; border-radius:100px; display:flex; justify-content:space-between;
    z-index:100; box-shadow:0 12px 48px rgba(0,0,0,0.5);
    backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px);
  }
  .nav-item {
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    flex:1; height:56px; cursor:pointer; transition:0.25s; gap:4px;
    border-radius:18px; position:relative; color:var(--text-mid);
  }
  .nav-item .nav-img { display:flex; transition:0.25s; opacity:0.9; }
  .nav-item span { font-size:0.56rem; font-weight:600; color:var(--text-mid); opacity:0.85; transition:0.2s; }
  .nav-item.active { background:rgba(47,111,237,0.14); color:var(--primary); }
  .nav-item.active .nav-img { opacity:1; }
  .nav-item.active span { opacity:1; color:var(--primary); font-weight:700; }
  .nav-item:active { transform:scale(0.92); }

  /* ===================== EMPTY STATE ===================== */
  .empty-state { text-align:center; padding:32px 10px; color:var(--text-dim); font-size:0.86rem; }
  .empty-state .ic { color:var(--text-dim); opacity:0.4; display:flex; justify-content:center; margin-bottom:12px; }

  /* ===================== SCROLLBAR ===================== */
  ::-webkit-scrollbar { width:3px; }
  ::-webkit-scrollbar-track { background:transparent; }
  ::-webkit-scrollbar-thumb { background:var(--border2); border-radius:4px; }

  @keyframes fadeUp {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
  }

  /* ===================== HEADER BALANCE ===================== */
  .header-balance {
    margin-left:auto;
    display:flex; align-items:center; gap:7px;
    background:rgba(47,111,237,0.10);
    border:1px solid rgba(47,111,237,0.24);
    padding:8px 13px; border-radius:100px; color:var(--primary);
  }
  .header-balance strong {
    font-size:0.83rem; font-weight:800; color:var(--text);
    font-variant-numeric:tabular-nums; white-space:nowrap;
  }

  /* ===================== REFER VIDEO ===================== */
  .video-block {
    margin-top:18px; padding-top:16px;
    border-top:1px dashed var(--border2);
    animation:fadeUp 0.5s ease both;
  }
  .video-head {
    display:flex; align-items:center; gap:8px;
    font-size:0.82rem; font-weight:700; color:var(--text);
    margin-bottom:12px;
  }
  .video-head .ic { color:var(--primary); display:flex; }
  .video-frame {
    width:100%; aspect-ratio:16/9; border-radius:var(--radius-sm);
    overflow:hidden; background:var(--surface2);
    border:1px solid var(--border);
  }
  .video-frame iframe { width:100%; height:100%; border:none; display:block; }

  /* ===================== TUTORIAL MODAL ===================== */
  .tutorial-card {
    width:calc(100% - 32px); max-width:440px;
    background:var(--surface); border:1px solid var(--border2);
    border-radius:22px; overflow:hidden;
    animation:modalPop 0.4s cubic-bezier(0.34,1.56,0.64,1) both;
  }
  .tutorial-head {
    display:flex; align-items:center; justify-content:space-between;
    padding:16px 18px; border-bottom:1px solid var(--border);
  }
  .tutorial-head h4 { font-size:0.95rem; font-weight:700; color:var(--text); }
  .tutorial-close {
    width:32px; height:32px; border-radius:50%; border:1px solid var(--border2);
    background:var(--surface2); color:var(--text-dim); cursor:pointer;
    display:flex; align-items:center; justify-content:center;
  }
  .tutorial-video-frame {
    width:100%; aspect-ratio:16/9; background:#000;
  }
  .tutorial-video-frame iframe { width:100%; height:100%; border:none; display:block; }

  /* ===================== SPIN WHEEL ===================== */
  .spin-card {
    background:var(--surface);
    border:1px solid var(--border2);
    border-radius:var(--radius-lg); padding:22px 18px 24px;
    margin-bottom:18px; position:relative; overflow:hidden;
    box-shadow:var(--shadow-card);
    animation:fadeUp 0.6s ease both;
  }
  .spin-card::before {
    content:''; position:absolute; top:0; left:0; right:0; height:3px;
    background:linear-gradient(90deg, var(--grad-a), var(--grad-b), var(--grad-c));
  }
  .spin-head {
    display:flex; align-items:center; gap:12px; margin-bottom:18px;
  }
  .spin-head-icon {
    width:44px; height:44px; border-radius:14px;
    background:rgba(47,111,237,0.10);
    border:1px solid rgba(47,111,237,0.22);
    display:flex; align-items:center; justify-content:center; flex-shrink:0; color:var(--primary);
  }
  .spin-head h4 { font-size:1rem; font-weight:800; color:var(--text); }
  .spin-head p { font-size:0.72rem; color:var(--text-dim); margin-top:3px; }

  .spin-wheel-wrap {
    position:relative; width:250px; height:250px; margin:0 auto 16px;
  }
  .spin-pointer {
    position:absolute; top:-8px; left:50%; transform:translateX(-50%);
    width:0; height:0; z-index:5;
    border-left:11px solid transparent; border-right:11px solid transparent;
    border-top:22px solid var(--primary);
    filter:drop-shadow(0 2px 4px rgba(0,0,0,0.4));
  }
  .spin-wheel {
    width:100%; height:100%; display:block;
    border-radius:50%;
    filter:drop-shadow(0 10px 30px rgba(0,0,0,0.5)) drop-shadow(0 0 24px rgba(47,111,237,0.25));
  }

  .spin-info-row {
    display:flex; align-items:center; justify-content:space-between;
    margin-bottom:14px;
  }
  .spin-free-badge {
    display:inline-flex; align-items:center; gap:6px;
    padding:6px 12px; border-radius:20px;
    font-size:0.76rem; font-weight:700;
  }
  .spin-free-badge.has {
    background:rgba(52,199,123,0.10); border:1px solid rgba(52,199,123,0.25);
    color:var(--green);
  }
  .spin-free-badge.none {
    background:rgba(224,168,62,0.10); border:1px solid rgba(224,168,62,0.28);
    color:var(--warning);
  }
  .spin-used { font-size:0.72rem; color:var(--text-dim); font-weight:600; }

  .spin-btn {
    width:100%; padding:15px; border:none; border-radius:var(--radius-sm);
    background:linear-gradient(135deg, var(--grad-a), var(--grad-b));
    color:#ffffff; font-size:1rem; font-weight:800; cursor:pointer;
    display:flex; align-items:center; justify-content:center; gap:8px;
    transition:0.2s;
  }
  .spin-btn:active:not(:disabled) { transform:scale(0.97); opacity:0.92; }
  .spin-btn:disabled {
    background:var(--surface2); color:var(--text-dim); cursor:not-allowed;
    opacity:0.8;
  }
  .spin-note {
    margin-top:12px; text-align:center; font-size:0.73rem;
    color:var(--text-dim); font-weight:500;
  }
  .spin-result-amount {
    margin:16px auto 6px; font-size:2.2rem; font-weight:900;
    background:linear-gradient(135deg, var(--grad-a), var(--grad-b), var(--grad-c));
    -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
    font-variant-numeric:tabular-nums;
  }

  /* ===================== GLOSSY CTA SHEEN ===================== */
  /* A soft highlight streak + vivid glow on every gradient action button, for a bright, shiny, premium finish rather than a flat fill. */
  .btn-share, .btn-copy, .ad-btn, .btn-submit, .btn-mission-claim,
  .spin-btn, .btn-task-open, .btn-modal-close {
    position:relative; overflow:hidden;
    box-shadow: 0 6px 22px rgba(47,111,237,0.38), inset 0 1px 0 rgba(255,255,255,0.35);
  }
  .btn-share::before, .btn-copy::before, .ad-btn::before, .btn-submit::before,
  .btn-mission-claim::before, .spin-btn::before, .btn-task-open::before, .btn-modal-close::before {
    content:''; position:absolute; inset:0; pointer-events:none;
    background:linear-gradient(180deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0) 45%);
  }
  .btn-share:active, .btn-copy:active, .ad-btn:active:not(:disabled), .btn-submit:active:not(:disabled),
  .btn-mission-claim:active:not(:disabled), .spin-btn:active:not(:disabled), .btn-task-open:active:not(:disabled),
  .btn-modal-close:active {
    box-shadow: 0 3px 14px rgba(47,111,237,0.30), inset 0 1px 0 rgba(255,255,255,0.25);
  }
  .ad-btn:disabled, .btn-submit:disabled, .btn-mission-claim:disabled, .spin-btn:disabled, .btn-task-open:disabled {
    box-shadow:none;
  }
  .ad-btn:disabled::before, .btn-submit:disabled::before, .btn-mission-claim:disabled::before,
  .spin-btn:disabled::before, .btn-task-open:disabled::before {
    display:none;
  }
`;

// ============================================================
//  Telegram WebApp
// ============================================================
const tg = window.Telegram?.WebApp || {
    ready: () => {},
    expand: () => {},
    setHeaderColor: () => {},
    setBackgroundColor: () => {},
    initData: '',
    initDataUnsafe: { user: { id: 'Dev', first_name: 'User', photo_url: '' }, start_param: null },
    HapticFeedback: { impactOccurred: () => {}, notificationOccurred: () => {} },
    openLink: (u) => window.open(u, '_blank'),
    openTelegramLink: (u) => window.open(u, '_blank'),
};

tg.ready();
tg.expand();
tg.setHeaderColor?.('#07080b');
tg.setBackgroundColor?.('#07080b');

const INIT_DATA = tg.initData || '';

// ============================================================
//  API helper
// ============================================================
async function apiCall(action, method = 'GET', body = null) {
    try {
        // The _ts param exists purely to make every request URL unique,
        // so network-level caches (carrier data-saver proxies, CDNs)
        // that key on the exact URL can never serve a stale response —
        // this is what causes admin changes to take days to reach some
        // users if left out.
        let url = `${API_URL}?action=${action}&_ts=${Date.now()}`;
        if (method === 'GET') {
            if (INIT_DATA && action !== 'getConfig') url += `&initData=${encodeURIComponent(INIT_DATA)}`;
            if (body) Object.keys(body).forEach(k => (url += `&${k}=${encodeURIComponent(body[k])}`));
        }
        const opts = { method, cache: 'no-store' };
        if (method !== 'GET') {
            opts.headers = { 'Content-Type': 'application/json' };
            opts.body = JSON.stringify({ initData: INIT_DATA, ...(body || {}) });
        }
        const res = await fetch(url, opts);
        const data = await res.json();
        if (res.status === 401) {
            showToastGlobal('error', 'সেশন শেষ হয়েছে। অ্যাপ পুনরায় চালু করুন।');
            return null;
        }
        return data;
    } catch {
        return null;
    }
}

// ============================================================
//  Loader
// ============================================================
function Loader({ hiding }) {
    return (
        <div className="loader-overlay" style={hiding ? { opacity: 0, transform: 'scale(1.05)' } : {}}>
            <div className="loader-bg-glow" />
            <div className="loader-logo-container">
                <div className="loader-ring r1" />
                <div className="loader-ring r2" />
                <div className="loader-logo">
                    <Icon name="coin" size={40} />
                </div>
            </div>
            <div className="loader-brand-name">PrimeBD</div>
            <div className="loader-brand-sub">প্রাইম বিডি</div>
            <div className="loader-dots">
                <span /><span /><span />
            </div>
        </div>
    );
}

// ============================================================
//  Toast
// ============================================================
const TOAST_ICON = {
    success: 'check',
    error:   'bell',
    warning: 'bolt',
};

function Toast({ type, msg, show }) {
    return (
        <div className={`toast ${type} ${show ? 'show' : ''}`}>
            <span className="toast-icon"><Icon name={TOAST_ICON[type] || 'bell'} size={16} /></span>
            <span>{msg}</span>
        </div>
    );
}

// ============================================================
//  Video embed helper
// ============================================================
function getVideoEmbedUrl(type, url) {
    if (!url || !type) return null;
    const t = String(type).toLowerCase();

    if (t === 'youtube') {
        const m = String(url).match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/);
        if (m) return `https://www.youtube.com/embed/${m[1]}?rel=0`;
        return null;
    }
    if (t === 'telegram') {
        const m = String(url).match(/t\.me\/([a-zA-Z0-9_]+)\/(\d+)/);
        if (m) return `https://t.me/${m[1]}/${m[2]}?embed=1&mode=tme`;
        return null;
    }
    return null;
}

// ============================================================
//  Tutorial modal
// ============================================================
function TutorialModal({ cfg, onClose }) {
    const t = cfg.tutorialVideo || {};
    const embedUrl = getVideoEmbedUrl(t.type, t.url);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="tutorial-card" onClick={e => e.stopPropagation()}>
                <div className="tutorial-head">
                    <h4>{t.title || 'কীভাবে ব্যবহার করবেন'}</h4>
                    <button className="tutorial-close" onClick={onClose}>
                        <Icon name="close" size={16} />
                    </button>
                </div>
                <div className="tutorial-video-frame">
                    {embedUrl ? (
                        <iframe
                            src={embedUrl}
                            title={t.title || 'টিউটরিয়াল'}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    ) : (
                        <div style={{ height:'100%', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--text-dim)', fontSize:'0.82rem', padding:'0 20px', textAlign:'center' }}>
                            টিউটরিয়াল ভিডিও এখনো কনফিগার করা হয়নি।
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// ============================================================
//  Home Page
// ============================================================
function HomePage({ appState, onCopy, onShare, onSpinDone }) {
    const u   = appState.user;
    const cfg = appState.config;
    const sym = cfg.currencySymbol || 'টাকা';
    const botUsername = cfg.botUsername || 'YourBotUsername';
    const userId = u.id || '';
    const refLink = `https://t.me/${botUsername}/app?startapp=${userId}`;
    const refBonus = cfg.referralBonus || 0;
    const totalAdViews = Object.values(u.dailyAds || {}).reduce((s, c) => s + c, 0);

    const videoCfg = cfg.referVideo || {};
    const videoEmbedUrl = getVideoEmbedUrl(videoCfg.type, videoCfg.url);
    const spinCfg = cfg.spinConfig || {};

    return (
        <div className="page">
            <div className="stats-grid" style={{ marginTop: 4 }}>
                <div className="stat-card">
                    <div className="stat-icon-wrap"><Icon name="tv" size={19} /></div>
                    <p>বিজ্ঞাপন দেখা</p>
                    <h4>{totalAdViews}</h4>
                </div>
                <div className="stat-card">
                    <div className="stat-icon-wrap"><Icon name="share" size={19} /></div>
                    <p>মোট রেফারেল</p>
                    <h4>{u.referrals || 0}</h4>
                </div>
                <div className="stat-card">
                    <div className="stat-icon-wrap"><Icon name="check" size={19} /></div>
                    <p>টাস্ক সম্পন্ন</p>
                    <h4>{u.completedTaskCount || 0}</h4>
                </div>
                <div className="stat-card">
                    <div className="stat-icon-wrap"><Icon name="coin" size={19} /></div>
                    <p>মোট আয়</p>
                    <h4>{(u.totalEarned || 0).toFixed(2)}</h4>
                </div>
            </div>

            <div className="ref-card">
                <div className="ref-top">
                    <div className="ref-icon"><Icon name="rocket" size={22} /></div>
                    <div className="ref-title">
                        <h4>বন্ধুদের আমন্ত্রণ জানান</h4>
                        <div className="ref-badge">
                            <Icon name="gift" size={12} />
                            প্রতি রেফারেলে {refBonus} {sym} উপার্জন!
                        </div>
                    </div>
                </div>
                <div className="ref-label">আপনার রেফারেল লিংক</div>
                <div className="ref-input-row">
                    <input className="ref-inp" readOnly value={refLink} onChange={() => {}} />
                    <button className="btn-copy" onClick={() => onCopy(refLink)}>
                        <Icon name="copy" size={14} /> কপি
                    </button>
                </div>
                <button className="btn-share" onClick={() => onShare(refLink)}>
                    <Icon name="rocket" size={18} /> টেলিগ্রামে শেয়ার করুন
                </button>

                {videoCfg.enabled && videoEmbedUrl && (
                    <div className="video-block">
                        <div className="video-head">
                            <span className="ic"><Icon name="tv" size={18} /></span>
                            <span>{videoCfg.title || 'ভিডিও দেখুন'}</span>
                        </div>
                        <div className="video-frame">
                            <iframe
                                src={videoEmbedUrl}
                                title={videoCfg.title || 'ভিডিও'}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </div>
                )}
            </div>

            {spinCfg.enabled !== false && (
                <SpinWheel appState={appState} onSpinDone={onSpinDone} />
            )}
        </div>
    );
}

// ============================================================
//  Earn Page
// ============================================================
function EarnPage({ appState, onAdDone, onTaskBegin }) {
    const cfg   = appState.config;
    const u     = appState.user;
    const sym   = cfg.currencySymbol || 'টাকা';
    const now   = Date.now();
    const slots = cfg.adSlots || [];
    const limit = cfg.dailyAdLimit || 10;
    const today = new Date().toISOString().slice(0, 10);
    const tasks = cfg.webTasks || {};
    const pendingTasks = [], completedTasks = [];

    Object.keys(tasks).forEach(k => {
        const t = tasks[k];
        const h = (u.taskHistory && u.taskHistory[k]) || {};
        if (t.type === 'onetime' && h.ts) return;
        let isDone = false;
        if (t.type === 'daily' && h.ts && (now - h.ts) < 86400000) isDone = true;
        if (isDone) completedTasks.push({ k, t, h });
        else pendingTasks.push({ k, t, h });
    });

    return (
        <div className="page">
            <div className="sec-head">
                <span className="ic"><Icon name="tv" size={18} /></span> বিজ্ঞাপন দেখুন ও আয় করুন
            </div>
            {slots.length === 0 ? (
                <div className="empty-state">
                    <span className="ic"><Icon name="tv" size={32} /></span>
                    বর্তমানে কোনো বিজ্ঞাপন উপলব্ধ নেই।
                </div>
            ) : (
                <div className="ad-grid">
                    {slots.map((s, i) => (
                        <AdBox
                            key={s.id} slot={s} index={i} sym={sym}
                            done={u.lastActive === today ? (u.dailyAds?.[s.id] || 0) : 0}
                            limit={limit} onAdDone={onAdDone}
                        />
                    ))}
                </div>
            )}
            <div className="sec-head" style={{ marginTop: 28 }}>
                <span className="ic"><Icon name="check" size={18} /></span> বিশেষ টাস্ক
            </div>
            {pendingTasks.length === 0 && completedTasks.length === 0 ? (
                <div className="empty-state">
                    <span className="ic"><Icon name="chart" size={32} /></span>
                    কোনো টাস্ক উপলব্ধ নেই।
                </div>
            ) : (
                <div className="task-list">
                    {[...pendingTasks, ...completedTasks].map(({ k, t, h }) => (
                        <TaskItem key={k} id={k} task={t} history={h} sym={sym} now={now} onBegin={onTaskBegin} />
                    ))}
                </div>
            )}
            <div style={{ height: 10 }} />
        </div>
    );
}

const AD_STATE_KEY = '__primebd_adstates';

function readAdStates() {
    try { return JSON.parse(localStorage.getItem(AD_STATE_KEY)) || {}; } catch { return {}; }
}
function writeAdStates(states) {
    try { localStorage.setItem(AD_STATE_KEY, JSON.stringify(states)); } catch {}
}
function setAdState(slotId, data) {
    const st = readAdStates();
    st[slotId] = data;
    writeAdStates(st);
}
function clearAdState(slotId) {
    const st = readAdStates();
    delete st[slotId];
    writeAdStates(st);
}

function AdBox({ slot, index, done, limit, onAdDone, sym }) {
    const WATCH_SECONDS    = slot.watchSeconds   || (index === 0 ? 17 : index === 1 ? 30 : 17);
    const COOLDOWN_SECONDS = slot.cooldownSeconds || (index === 0 ? 7  : index === 1 ? 10 : 7);

    const [phase, setPhase] = useState('idle');
    const [countdown, setCountdown] = useState(0);
    const timerRef = useRef(null);
    const lockRef = useRef(false);
    const phaseRef = useRef('idle');
    const adOpenRef = useRef(false);
    const adFailedRef = useRef(false);

    function updatePhase(p) {
        phaseRef.current = p;
        setPhase(p);
    }

    function clearTimer() {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    }

    useEffect(() => {
        const st = readAdStates()[slot.id];
        if (st && st.cooldownEnd) {
            if (st.cooldownEnd > Date.now()) {
                updatePhase('cooldown');
                startCountdown(st.cooldownEnd - Date.now(), () => {
                    clearAdState(slot.id);
                    resetToIdle();
                });
            } else {
                clearAdState(slot.id);
            }
        }
        return () => clearTimer();
    }, [slot.id]);

    function startCountdown(totalMs, onDone) {
        const endAt = Date.now() + totalMs;
        clearTimer();
        const tick = () => {
            const remaining = Math.max(0, Math.round((endAt - Date.now()) / 1000));
            setCountdown(remaining);
            if (remaining <= 0) {
                clearTimer();
                onDone();
            } else {
                timerRef.current = setTimeout(tick, 250);
            }
        };
        tick();
    }

    function resetToIdle() {
        clearTimer();
        clearAdState(slot.id);
        updatePhase('idle');
        setCountdown(0);
        lockRef.current = false;
        adOpenRef.current = false;
        adFailedRef.current = false;
    }

    function waitFor(fn, timeoutMs) {
        return new Promise(resolve => {
            const start = Date.now();
            const check = () => {
                if (fn()) return resolve(true);
                if (Date.now() - start >= timeoutMs) return resolve(false);
                setTimeout(check, 200);
            };
            check();
        });
    }

    async function ensureAdLoaded() {
        if (slot.network === 'monetag') {
            await waitFor(() => window[`show_${slot.id}`], 10000);
            return !!window[`show_${slot.id}`];
        }
        if (slot.network === 'adsgram') {
            await waitFor(() => window.Adsgram, 10000);
            return !!window.Adsgram;
        }
        return false;
    }

    function openAd() {
        return new Promise(resolve => {
            if (slot.network === 'monetag' && window[`show_${slot.id}`]) {
                adOpenRef.current = true;
                adFailedRef.current = false;
                try { window[`show_${slot.id}`](); } catch {}
                resolve(true);
                return;
            }
            if (slot.network === 'adsgram' && window.Adsgram) {
                if (!window.__adsgramControllers) window.__adsgramControllers = {};
                if (!window.__adsgramControllers[slot.id]) {
                    window.__adsgramControllers[slot.id] = window.Adsgram.init({ blockId: slot.id });
                }
                adOpenRef.current = true;
                adFailedRef.current = false;
                window.__adsgramControllers[slot.id].show()
                    .then(() => { adOpenRef.current = false; })
                    .catch(() => {
                        adOpenRef.current = false;
                        adFailedRef.current = true;
                        if (phaseRef.current === 'watching') {
                            showToastGlobal('error', 'বিজ্ঞাপন সম্পূর্ণ হয়নি। আবার চেষ্টা করুন।');
                            resetToIdle();
                        }
                    });
                resolve(true);
                return;
            }
            resolve(false);
        });
    }

    async function triggerAd() {
        if (lockRef.current || done >= limit) return;
        lockRef.current = true;
        try { tg.HapticFeedback.impactOccurred('light'); } catch {}

        updatePhase('loading');
        setCountdown(0);

        const loaded = await ensureAdLoaded();
        if (!loaded) {
            showToastGlobal('error', 'বিজ্ঞাপন লোড হচ্ছে না। আবার চেষ্টা করুন।');
            resetToIdle();
            return;
        }

        const opened = await openAd();
        if (!opened) {
            showToastGlobal('error', 'বিজ্ঞাপন দেখানো যাচ্ছে না। আবার চেষ্টা করুন।');
            resetToIdle();
            return;
        }

        updatePhase('watching');
        startCountdown(WATCH_SECONDS * 1000, () => {
            waitFor(() => !adOpenRef.current || adFailedRef.current, 30000).then(() => {
                if (adFailedRef.current) {
                    showToastGlobal('error', 'বিজ্ঞাপন সম্পূর্ণ হয়নি। আবার চেষ্টা করুন।');
                    resetToIdle();
                    return;
                }
                completeWatch();
            });
        });
    }

    async function completeWatch() {
        try {
            await onAdDone(slot.id);
            try { tg.HapticFeedback.notificationOccurred('success'); } catch {}
        } catch { /* ignore */ }

        updatePhase('cooldown');
        setAdState(slot.id, { cooldownEnd: Date.now() + COOLDOWN_SECONDS * 1000 });
        startCountdown(COOLDOWN_SECONDS * 1000, () => {
            clearAdState(slot.id);
            resetToIdle();
        });
    }

    const total = phase === 'watching' ? WATCH_SECONDS : phase === 'cooldown' ? COOLDOWN_SECONDS : 0;
    const progress = total > 0 ? Math.min(100, Math.round(((total - countdown) / total) * 100)) : 0;

    return (
        <div className="ad-box" style={{ animationDelay: `${index * 0.08}s` }}>
            <div className="ad-icon"><Icon name="tv" size={24} /></div>
            <h4>{slot.title || `বিজ্ঞাপন ${index + 1}`}</h4>
            {slot.reward > 0 && <div className="ad-reward">+{slot.reward} {sym || 'টাকা'}</div>}
            <div className="ad-counter">{done}/{limit}</div>
            <button className="ad-btn" onClick={triggerAd} disabled={phase !== 'idle' || done >= limit}>
                {phase === 'loading' ? (
                    <><Icon name="rocket" size={14} /> লোড হচ্ছে...</>
                ) : phase === 'watching' ? (
                    <><Icon name="clock" size={14} /> বোনাস পেতে {countdown}সে</>
                ) : phase === 'cooldown' ? (
                    <><Icon name="lock" size={14} /> {countdown}সে পর আবার দেখুন</>
                ) : done >= limit ? (
                    <><Icon name="lock" size={14} /> সম্পন্ন</>
                ) : (
                    <><Icon name="bolt" size={14} /> দেখুন</>
                )}
            </button>
            {(phase === 'watching' || phase === 'cooldown') && (
                <div className="ad-progress">
                    <div className="ad-progress-fill" style={{ width: `${progress}%` }} />
                </div>
            )}
        </div>
    );
}

function TaskItem({ id, task, history, sym, now, onBegin }) {
    // state machine: idle -> opened (waiting) -> claimable -> claiming
    // Claim can NEVER be reached without first passing through "opened".
    const [state, setState] = useState('idle');
    const [countdown, setCountdown] = useState(5);
    const timerRef = useRef(null);
    const lockRef = useRef(false);
    const hasOpenedRef = useRef(false);

    const isDailyDone = task.type === 'daily' && history.ts && (now - history.ts) < 86400000;
    const left = isDailyDone ? (86400000 - (now - history.ts)) : 0;
    const hrs  = Math.floor(left / 3600000);
    const mins = Math.floor((left % 3600000) / 60000);

    function handleOpen() {
        if (lockRef.current) return;
        lockRef.current = true;
        hasOpenedRef.current = true;
        tg.openLink(task.url);
        tg.HapticFeedback.impactOccurred('medium');
        setState('waiting');
        let sec = 5;
        setCountdown(sec);
        timerRef.current = setInterval(() => {
            sec--;
            setCountdown(sec);
            if (sec <= 0) {
                clearInterval(timerRef.current);
                setState('claim');
                lockRef.current = false;
            }
        }, 1000);
    }

    async function handleClaim() {
        // Guard: claim is only reachable once "open" has actually happened.
        if (lockRef.current || !hasOpenedRef.current || state !== 'claim') return;
        lockRef.current = true;
        setState('claiming');
        const ok = await onBegin(id, task);
        lockRef.current = false;
        if (!ok) setState('claim');
    }

    useEffect(() => () => clearInterval(timerRef.current), []);

    const thumbSrc = task.imageUrl || task.iconUrl || null;

    return (
        <div className="task-item" style={{ opacity: isDailyDone ? 0.5 : 1 }}>
            <div className="task-left">
                {thumbSrc ? (
                    <img src={thumbSrc} className="task-thumb" alt={task.name} />
                ) : (
                    <div className="task-thumb">
                        <Icon name="doc" size={22} />
                    </div>
                )}
                <div className="task-info">
                    <h4>{task.name}</h4>
                    <div className="task-reward">+{task.reward || 0} {sym}</div>
                </div>
            </div>
            {isDailyDone ? (
                <button className="btn-task btn-task-wait" disabled>
                    <Icon name="clock" size={12} /> {hrs}ঘ {mins}মি
                </button>
            ) : state === 'claiming' ? (
                <button className="btn-task btn-task-wait" disabled>প্রসেসিং...</button>
            ) : (
                <div className="task-actions">
                    <button
                        className="btn-task btn-task-open"
                        onClick={handleOpen}
                        disabled={state !== 'idle'}
                    >
                        {state === 'waiting' ? `${countdown}সে` : 'ওপেন'}
                    </button>
                    <button
                        className="btn-task btn-task-claim"
                        onClick={handleClaim}
                        disabled={state !== 'claim'}
                    >
                        ক্লেম
                    </button>
                </div>
            )}
        </div>
    );
}

function MissionPage({ appState, onClaimMission }) {
    const cfg = appState.config;
    const u   = appState.user;
    const sym = cfg.currencySymbol || 'টাকা';
    const missions = cfg.missions || {};
    const claimed = u.claimedMissions || {};
    const refs = u.referrals || 0;
    const ids = Object.keys(missions);

    return (
        <div className="page">
            <div className="sec-head">
                <span className="ic"><Icon name="trophy" size={18} /></span> মিশন ও বোনাস
            </div>
            {ids.length === 0 ? (
                <div className="empty-state">
                    <span className="ic"><Icon name="target" size={32} /></span>
                    বর্তমানে কোনো মিশন উপলব্ধ নেই।
                </div>
            ) : (
                <div className="mission-list">
                    {ids.map(id => {
                        const m = missions[id];
                        const required = m.requiredReferrals || 0;
                        const isClaimed = !!claimed[id];
                        const isEligible = refs >= required && !isClaimed;
                        const pct = required > 0 ? Math.min(100, Math.round((refs / required) * 100)) : 100;
                        return (
                            <div className={`mission-card ${isClaimed ? 'done' : ''}`} key={id}>
                                <div className="mission-top">
                                    <div className="mission-icon">
                                        <Icon name="target" size={20} />
                                    </div>
                                    <div className="mission-info">
                                        <h4>{m.title || 'মিশন'}</h4>
                                        <p>{required} জন রেফার করলে +{m.bonus || 0} {sym} বোনাস</p>
                                    </div>
                                </div>
                                <div className="mission-progress-bar">
                                    <div className="mission-progress-fill" style={{ width: `${pct}%` }} />
                                </div>
                                <div className="mission-bottom">
                                    <span className="mission-count">{Math.min(refs, required)}/{required} রেফারেল</span>
                                    {isClaimed ? (
                                        <span className="mission-claimed-badge">
                                            <Icon name="check" size={14} /> সংগ্রহ করা হয়েছে
                                        </span>
                                    ) : (
                                        <button
                                            className="btn-mission-claim"
                                            disabled={!isEligible}
                                            onClick={() => onClaimMission(id)}
                                        >
                                            বোনাস নিন
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
            <div style={{ height: 10 }} />
        </div>
    );
}

function SpinWheel({ appState, onSpinDone }) {
    const cfg     = appState.config;
    const spinCfg = cfg.spinConfig || {};
    const sym     = cfg.currencySymbol || 'টাকা';

    const rewards   = (Array.isArray(spinCfg.rewards) && spinCfg.rewards.length >= 2)
        ? spinCfg.rewards.map(Number) : [1, 2, 5, 10, 20, 50, 100, 500];
    const freeCount   = parseInt(spinCfg.freeCount || 5, 10);
    const freeSpinsUsed = appState.user.freeSpinsUsed || 0;
    const freeLeft    = Math.max(0, freeCount - freeSpinsUsed);
    const adNetwork   = spinCfg.adNetwork || 'adsgram';
    const adId        = spinCfg.adId || '';
    const watchSeconds  = parseInt(spinCfg.watchSeconds || 8, 10);
    const spinDuration  = Math.max(1500, parseInt(spinCfg.spinDurationMs || 4200, 10));

    const n          = rewards.length;
    const segAngle   = 360 / n;
    const palette    = ['#3960b8', '#4f7fe0', '#6f9af0', '#a8c4f5', '#2c4a94', '#4671cc', '#7ba3f2', '#c3d7fa'];

    const [rotation, setRotation] = useState(0);
    const [phase, setPhase] = useState('idle');
    const [result, setResult] = useState(null);
    const lockRef     = useRef(false);
    const adOpenRef   = useRef(false);
    const adFailedRef = useRef(false);

    const wedges = rewards.map((v, i) => {
        const start = i * segAngle;
        const end   = start + segAngle;
        const rad   = Math.PI / 180;
        const x1 = 50 + 50 * Math.cos(start * rad);
        const y1 = 50 + 50 * Math.sin(start * rad);
        const x2 = 50 + 50 * Math.cos(end * rad);
        const y2 = 50 + 50 * Math.sin(end * rad);
        const large = segAngle > 180 ? 1 : 0;
        return {
            value: v,
            color: palette[i % palette.length],
            path: `M50 50 L${x1.toFixed(2)} ${y1.toFixed(2)} A50 50 0 ${large} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`,
            labelAngle: start + segAngle / 2,
        };
    });

    function waitFor(fn, timeoutMs) {
        return new Promise(resolve => {
            const start = Date.now();
            const check = () => {
                if (fn()) return resolve(true);
                if (Date.now() - start >= timeoutMs) return resolve(false);
                setTimeout(check, 200);
            };
            check();
        });
    }

    async function ensureAdLoaded() {
        if (adNetwork === 'monetag') {
            if (!document.querySelector(`script[data-zone="${adId}"]`)) {
                const sc = document.createElement('script');
                sc.src = '//libtl.com/sdk.js';
                sc.dataset.zone = adId;
                sc.dataset.sdk  = `show_${adId}`;
                document.body.appendChild(sc);
            }
            await waitFor(() => window[`show_${adId}`], 10000);
            return !!window[`show_${adId}`];
        }
        if (adNetwork === 'adsgram') {
            if (!window.__adsgramSdkLoaded) {
                window.__adsgramSdkLoaded = true;
                const sc = document.createElement('script');
                sc.src = 'https://sad.adsgram.ai/js/sad.min.js';
                document.body.appendChild(sc);
            }
            await waitFor(() => window.Adsgram, 10000);
            return !!window.Adsgram;
        }
        return false;
    }

    async function openAd() {
        if (adNetwork === 'monetag' && window[`show_${adId}`]) {
            adOpenRef.current = true;
            adFailedRef.current = false;
            try { window[`show_${adId}`](); } catch {}
            return 'opened';
        }
        if (adNetwork === 'adsgram' && window.Adsgram) {
            if (!window.__spinAdsgramController) {
                window.__spinAdsgramController = window.Adsgram.init({ blockId: adId });
            }
            adOpenRef.current = true;
            adFailedRef.current = false;
            try {
                await window.__spinAdsgramController.show();
                adOpenRef.current = false;
                return 'done';
            } catch {
                adOpenRef.current = false;
                adFailedRef.current = true;
                return 'failed';
            }
        }
        return 'missing';
    }

    function computeTargetRotation(current, segIndex) {
        const targetMod = ((360 - (segIndex * segAngle + segAngle / 2)) % 360 + 360) % 360;
        const mod = ((targetMod - (current % 360)) % 360 + 360) % 360;
        return current + 360 * 5 + mod;
    }

    async function doSpin() {
        try { tg.HapticFeedback.impactOccurred('medium'); } catch {}

        const res = await onSpinDone();
        let segIndex, reward, newBalance;
        if (res && !res.error) {
            segIndex  = Math.max(0, Math.min(n - 1, Math.round(Number(res.segmentIndex) || 0)));
            reward    = Number(res.reward) || rewards[segIndex] || 0;
            newBalance = (typeof res.newBalance === 'number') ? res.newBalance : (appState.user.balance || 0) + reward;
        } else {
            segIndex  = Math.floor(Math.random() * n);
            reward    = rewards[segIndex];
            newBalance = (appState.user.balance || 0) + reward;
        }

        setPhase('spinning');
        setResult(null);
        setRotation(computeTargetRotation(rotation, segIndex));

        setTimeout(() => {
            setResult({ reward, newBalance });
            setPhase('idle');
            lockRef.current = false;
            try { tg.HapticFeedback.notificationOccurred('success'); } catch {}
        }, spinDuration);
    }

    async function handleSpin() {
        if (lockRef.current || phase !== 'idle') return;
        lockRef.current = true;

        if (freeLeft > 0) {
            await doSpin();
            return;
        }

        if (!adId) {
            showToastGlobal('warning', 'স্পিন আনলক করতে বিজ্ঞাপন কনফিগার করা নেই।');
            lockRef.current = false;
            return;
        }

        setPhase('loading');
        const loaded = await ensureAdLoaded();
        if (!loaded) {
            showToastGlobal('error', 'বিজ্ঞাপন লোড হচ্ছে না। আবার চেষ্টা করুন।');
            lockRef.current = false;
            setPhase('idle');
            return;
        }

        const opened = await openAd();
        if (opened === 'failed') {
            showToastGlobal('error', 'বিজ্ঞাপন সম্পূর্ণ হয়নি। আবার চেষ্টা করুন।');
            lockRef.current = false;
            setPhase('idle');
            return;
        }
        if (opened === 'missing') {
            showToastGlobal('error', 'বিজ্ঞাপন দেখানো যাচ্ছে না। আবার চেষ্টা করুন।');
            lockRef.current = false;
            setPhase('idle');
            return;
        }

        setPhase('watching');
        if (adNetwork === 'monetag') {
            await new Promise(r => setTimeout(r, watchSeconds * 1000));
        }

        await doSpin();
    }

    return (
        <div className="spin-card">
            <div className="spin-head">
                <div className="spin-head-icon">
                    <Icon name="gem" size={22} />
                </div>
                <div>
                    <h4>{spinCfg.title || 'ভাগ্যের চাকা'}</h4>
                    <p>প্রতিদিন স্পিন করুন, বোনাস জিতুন!</p>
                </div>
            </div>

            <div className="spin-wheel-wrap">
                <div className="spin-pointer" />
                <svg
                    className="spin-wheel"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        transform: `rotate(${rotation}deg)`,
                        transition: phase === 'spinning'
                            ? `transform ${spinDuration}ms cubic-bezier(0.16, 1, 0.3, 1)`
                            : 'none',
                    }}
                >
                    <circle cx="50" cy="50" r="50" fill="#101216" />
                    {wedges.map((w, i) => (
                        <path key={i} d={w.path} fill={w.color} stroke="#101216" strokeWidth="1.2" />
                    ))}
                    {wedges.map((w, i) => {
                        const rad = w.labelAngle * Math.PI / 180;
                        const tx = 50 + 33 * Math.cos(rad);
                        const ty = 50 + 33 * Math.sin(rad);
                        return (
                            <text
                                key={`t${i}`}
                                x={tx}
                                y={ty}
                                transform={`rotate(${w.labelAngle + 90} ${tx} ${ty})`}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="#ffffff"
                                fontWeight="800"
                                fontSize="7.5"
                            >
                                {w.value}
                            </text>
                        );
                    })}
                    <circle cx="50" cy="50" r="9" fill="#101216" stroke="#2c3039" strokeWidth="1" />
                </svg>
            </div>

            <div className="spin-info-row">
                <div className={`spin-free-badge ${freeLeft > 0 ? 'has' : 'none'}`}>
                    <Icon name="gift" size={14} />
                    {freeLeft > 0 ? `${freeLeft} টা ফ্রি স্পিন` : 'ফ্রি স্পিন শেষ'}
                </div>
                <div className="spin-used">ব্যবহৃত: {freeSpinsUsed}/{freeCount}</div>
            </div>

            <button className="spin-btn" onClick={handleSpin} disabled={phase !== 'idle'}>
                {phase === 'loading' ? (
                    <><Icon name="rocket" size={18} /> বিজ্ঞাপন লোড হচ্ছে...</>
                ) : phase === 'watching' ? (
                    <><Icon name="clock" size={18} /> বিজ্ঞাপন চলছে...</>
                ) : phase === 'spinning' ? (
                    <><Icon name="clock" size={18} /> স্পিন হচ্ছে...</>
                ) : (
                    <><Icon name="gem" size={18} /> স্পিন করুন</>
                )}
            </button>
            <div className="spin-note">
                {freeLeft > 0
                    ? <>প্রথম {freeCount} টি স্পিন ফ্রি — স্পিন করলেই পুরস্কার ব্যালেন্সে যোগ হবে</>
                    : <>বিজ্ঞাপন দেখে স্পিন আনলক করুন</>}
            </div>

            {result && (
                <div className="modal-overlay" onClick={() => setResult(null)}>
                    <div className="modal-card">
                        <div className="modal-icon">
                            <Icon name="gift" size={30} />
                        </div>
                        <h3>অভিনন্দন!</h3>
                        <p className="modal-sub">আপনি জিতেছেন</p>
                        <div className="spin-result-amount">+{result.reward} {sym}</div>
                        <p className="modal-sub" style={{ marginBottom: 18 }}>পুরস্কার আপনার ব্যালেন্সে যোগ করা হয়েছে। আবারও স্পিন করুন!</p>
                        <button className="btn-modal-close" onClick={() => setResult(null)}>ঠিক আছে</button>
                    </div>
                </div>
            )}
        </div>
    );
}

function WithdrawPage({ appState, onWithdraw }) {
    const cfg    = appState.config;
    const u      = appState.user;
    const sym    = cfg.currencySymbol || 'টাকা';
    const methods = cfg.withdrawMethods || [];
    const minRef  = cfg.minWithdrawReferrals || 0;

    const [method,     setMethod]     = useState(methods.length > 0 ? methods[0].name : '');
    const [account,    setAccount]    = useState('');
    const [amount,     setAmount]     = useState('');
    const [processing, setProcessing] = useState(false);
    const lockRef = useRef(false);

    const selectedMethod = methods.find(m => m.name === method) || methods[0];
    const sysMin = parseFloat(selectedMethod?.min || 10);

    const statusMap = { pending:'অপেক্ষমান', completed:'সম্পন্ন', rejected:'বাতিল' };
    const histIconName = { completed: 'check', rejected: 'close', pending: 'clock' };
    const histColors = {
        completed: 'var(--green)',
        rejected:  'var(--danger)',
        pending:   'var(--warning)',
    };

    async function handleSubmit() {
        if (processing || lockRef.current) return;
        if (!lockRef.current) {
            lockRef.current = true;
            if (u.referrals < minRef) {
                showToastGlobal('warning', `উত্তোলনের জন্য ন্যূনতম ${minRef} রেফারেল প্রয়োজন।`);
                tg.HapticFeedback.notificationOccurred('warning');
                lockRef.current = false;
                return;
            }
            const reqAmt = parseFloat(amount);
            if (!account || account.trim().length < 3) {
                showToastGlobal('error', 'একটি বৈধ অ্যাকাউন্ট নম্বর দিন.');
                lockRef.current = false;
                return;
            }
            if (!reqAmt || isNaN(reqAmt) || reqAmt < sysMin) {
                showToastGlobal('error', `ন্যূনতম উত্তোলন ${sysMin} ${sym}।`);
                tg.HapticFeedback.notificationOccurred('error');
                lockRef.current = false;
                return;
            }
            if (reqAmt > u.balance) {
                showToastGlobal('error', 'পর্যাপ্ত ব্যালেন্স নেই।');
                tg.HapticFeedback.notificationOccurred('error');
                lockRef.current = false;
                return;
            }
            setProcessing(true);
            const ok = await onWithdraw({ userId: u.id, userName: u.firstName, amount: reqAmt, method: method || selectedMethod?.name, account: account.trim() });
            setProcessing(false);
            lockRef.current = false;
            if (ok) { setAmount(''); setAccount(''); }
        }
    }

    return (
        <div className="page">
            <div className="sec-head">
                <span className="ic"><Icon name="withdraw" size={18} /></span> উত্তোলন
            </div>
            <div className="info-banner">
                <Icon name="bolt" size={18} />
                <div>
                    <p>
                        <strong>ন্যূনতম:</strong> {sysMin} {sym} &nbsp;|&nbsp;
                        <strong>ন্যূনতম রেফারেল:</strong> {minRef}
                    </p>
                </div>
            </div>

            {methods.length > 0 && (
                <div className="method-selector-wrap">
                    <span className="method-label">পেমেন্ট পদ্ধতি নির্বাচন করুন</span>
                    <div className="method-grid">
                        {methods.map(m => (
                            <div
                                key={m.name}
                                className={`method-card ${method === m.name ? 'active' : ''}`}
                                onClick={() => setMethod(m.name)}
                            >
                                <h5>{m.name}</h5>
                                <p>ন্যূনতম {m.min}</p>
                                <div className="method-check"><Icon name="check" size={11} /></div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="input-wrap">
                <span className="input-icon"><Icon name="share" size={16} /></span>
                <input className="form-inp" placeholder="অ্যাকাউন্ট নম্বর / ট্যাগ" value={account} onChange={e => setAccount(e.target.value)} />
            </div>
            <div className="input-wrap">
                <span className="input-icon"><Icon name="coin" size={16} /></span>
                <input className="form-inp" type="number" placeholder="উত্তোলনের পরিমাণ" value={amount} onChange={e => setAmount(e.target.value)} />
            </div>
            <button className="btn-submit" onClick={handleSubmit} disabled={processing || lockRef.current}>
                {processing
                    ? <><Icon name="clock" size={18} /> প্রক্রিয়াকরণ...</>
                    : <><Icon name="withdraw" size={18} /> উত্তোলন অনুরোধ</>
                }
            </button>

            <div className="sec-head" style={{ marginTop: 34 }}>
                <span className="ic"><Icon name="chart" size={18} /></span> সাম্প্রতিক লেনদেন
            </div>
            <div className="hist-wrap">
                {(!Array.isArray(appState.history) || appState.history.length === 0) ? (
                    <div className="empty-state">
                        <span className="ic"><Icon name="chart" size={32} /></span>
                        এখনো কোনো লেনদেন নেই।
                    </div>
                ) : appState.history.map((d, idx) => {
                    const sl = d.status?.toLowerCase() || 'pending';
                    const dt = new Date(d.timestamp);
                    return (
                        <div className="hist-item" key={idx}>
                            <div className="hist-left">
                                <div className="hist-icon" style={{ color: histColors[sl] || 'var(--text-dim)' }}>
                                    <Icon name={histIconName[sl] || 'coin'} size={17} />
                                </div>
                                <div className="hist-info">
                                    <h4>{d.method || 'অজানা পদ্ধতি'}</h4>
                                    <small>
                                        {dt.toLocaleDateString('bn-BD')} &middot; {dt.toLocaleTimeString('bn-BD', { hour:'2-digit', minute:'2-digit' })}
                                    </small>
                                </div>
                            </div>
                            <div className="hist-right">
                                <span className="hist-amt">{d.amount || 0} {sym}</span>
                                <span className={`hist-badge status-${sl}`}>{statusMap[sl] || sl}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div style={{ height: 18 }} />
        </div>
    );
}

let showToastGlobal = () => {};

export default function App() {
    const tgUser = tg.initDataUnsafe?.user || { id: 'Dev', first_name: 'User', photo_url: '' };

    const [loaderHide, setLoaderHide] = useState(false);
    const [appReady,   setAppReady]   = useState(false);
    const [activePage, setActivePage] = useState('home');
    const [toast,      setToast]      = useState({ show: false, type: 'success', msg: '' });
    const [withdrawModal, setWithdrawModal] = useState(null);
    const [showTutorial, setShowTutorial] = useState(false);
    const [appState,   setAppState]   = useState({
        user: {
            id: tgUser.id,
            firstName: tgUser.first_name,
            photoUrl: tgUser.photo_url || '',
            balance: 0, totalEarned: 0, referrals: 0,
            dailyAds: {}, taskHistory: {}, claimedMissions: {}, completedTaskCount: 0,
            freeSpinsUsed: 0,
            lastActive: '',
        },
        config: {},
        history: [],
    });

    const toastTimer = useRef(null);
    const withdrawLock = useRef(false);

    const showToast = useCallback((type, msg) => {
        setToast({ show: true, type, msg });
        try { tg.HapticFeedback.impactOccurred('light'); } catch {}
        clearTimeout(toastTimer.current);
        toastTimer.current = setTimeout(() => setToast(p => ({ ...p, show: false })), 3200);
    }, []);

    useEffect(() => { showToastGlobal = showToast; }, [showToast]);

    function saveLocal(state) {
        try { localStorage.setItem(`app_${state.user.id}`, JSON.stringify(state)); } catch {}
    }

    useEffect(() => {
        const cached = localStorage.getItem(`app_${tgUser.id}`);
        if (cached) {
            try { setAppState(JSON.parse(cached)); } catch {}
        }

        (async () => {
            try {
                const config = await apiCall('getConfig');

                const user = await apiCall('login', 'POST', {
                    id:        tgUser.id,
                    firstName: tgUser.first_name,
                    photoUrl:  tgUser.photo_url || '',
                    refId:     tg.initDataUnsafe?.start_param || '',
                });

                const hist = await apiCall('getHistory', 'POST', { id: tgUser.id });

                setAppState(prev => {
                    const next = {
                        user: {
                            ...prev.user,
                            ...(user || {}),
                            dailyAds:        user?.dailyAds        || prev.user.dailyAds        || {},
                            taskHistory:     user?.taskHistory     || prev.user.taskHistory     || {},
                            claimedMissions: user?.claimedMissions || prev.user.claimedMissions || {},
                            freeSpinsUsed:   user?.freeSpinsUsed   ?? prev.user.freeSpinsUsed   ?? 0,
                        },
                        config:  config || prev.config,
                        history: hist   || prev.history,
                    };
                    saveLocal(next);
                    return next;
                });

                if (config?.adSlots) loadAdScripts(config.adSlots);

                setTimeout(() => {
                    setLoaderHide(true);
                    setTimeout(() => setAppReady(true), 500);
                }, 400);

            } catch {
                setTimeout(() => {
                    setLoaderHide(true);
                    setTimeout(() => {
                        setAppReady(true);
                        showToast('error', 'সংযোগ ব্যর্থ হয়েছে। অফলাইনে চলছে।');
                    }, 500);
                }, 400);
            }
        })();

        return () => {};
    }, []); // eslint-disable-line

    useEffect(() => {
        if (!appReady) return;

        const refreshConfig = async () => {
            const freshConfig = await apiCall('getConfig');
            if (!freshConfig) return;
            setAppState(prev => {
                const next = { ...prev, config: freshConfig };
                saveLocal(next);
                return next;
            });
            if (freshConfig.adSlots) loadAdScripts(freshConfig.adSlots);
        };

        const pollId = setInterval(refreshConfig, 15000);

        const handleVisible = () => {
            if (document.visibilityState === 'visible') refreshConfig();
        };
        document.addEventListener('visibilitychange', handleVisible);
        window.addEventListener('focus', refreshConfig);

        return () => {
            clearInterval(pollId);
            document.removeEventListener('visibilitychange', handleVisible);
            window.removeEventListener('focus', refreshConfig);
        };
    }, [appReady]);

    function loadAdScripts(adSlots) {
        adSlots.forEach(s => {
            if (s.network === 'monetag' && !document.querySelector(`script[data-zone="${s.id}"]`)) {
                const sc = document.createElement('script');
                sc.src = '//libtl.com/sdk.js';
                sc.dataset.zone = s.id;
                sc.dataset.sdk  = `show_${s.id}`;
                document.body.appendChild(sc);
            }
            if (s.network === 'adsgram' && !window.__adsgramSdkLoaded) {
                window.__adsgramSdkLoaded = true;
                const sc = document.createElement('script');
                sc.src = 'https://sad.adsgram.ai/js/sad.min.js';
                document.body.appendChild(sc);
            }
        });
    }

    const adLock = useRef(false);
    async function handleAdDone(slotId) {
        if (adLock.current) return;
        adLock.current = true;
        const today = new Date().toISOString().slice(0, 10);
        const res = await apiCall('claimAdReward', 'POST', { slotId });
        adLock.current = false;
        if (!res || res.error) {
            showToast('error', res?.error || 'পুরস্কার দাবি ব্যর্থ হয়েছে।');
            return;
        }
        const rwrd = Number(res.reward) || 0;
        setAppState(prev => {
            const dailyAds = { ...(prev.user.dailyAds || {}) };
            if (prev.user.lastActive !== today) Object.keys(dailyAds).forEach(k => delete dailyAds[k]);
            dailyAds[slotId] = (dailyAds[slotId] || 0) + 1;
            const next = {
                ...prev,
                user: {
                    ...prev.user,
                    balance: (typeof res.newBalance === 'number') ? res.newBalance : (prev.user.balance || 0) + rwrd,
                    totalEarned: (prev.user.totalEarned || 0) + rwrd,
                    dailyAds,
                    lastActive: today,
                },
            };
            saveLocal(next);
            return next;
        });
        showToast('success', `অভিনন্দন! +${rwrd} ${appState.config.currencySymbol || 'টাকা'} যোগ হয়েছে`);
    }

    const taskLock = useRef(false);
    async function handleTaskBegin(id) {
        if (taskLock.current) return false;
        taskLock.current = true;
        const res = await apiCall('claimTaskReward', 'POST', { taskId: id });
        taskLock.current = false;
        if (!res || res.error) {
            showToast('error', res?.error || 'পুরস্কার দাবি ব্যর্থ হয়েছে।');
            return false;
        }
        const rwrd = Number(res.reward) || 0;
        setAppState(prev => {
            const next = {
                ...prev,
                user: {
                    ...prev.user,
                    balance: (typeof res.newBalance === 'number') ? res.newBalance : (prev.user.balance || 0) + rwrd,
                    totalEarned: (prev.user.totalEarned || 0) + rwrd,
                    taskHistory: { ...(prev.user.taskHistory || {}), [id]: { ts: Date.now() } },
                    completedTaskCount: (prev.user.completedTaskCount || 0) + 1,
                },
            };
            saveLocal(next);
            return next;
        });
        showToast('success', `টাস্ক সম্পন্ন! +${rwrd} ${appState.config.currencySymbol || 'টাকা'} যোগ হয়েছে`);
        tg.HapticFeedback.notificationOccurred('success');
        return true;
    }

    const missionLock = useRef(false);
    async function handleClaimMission(missionId) {
        if (missionLock.current) return;
        missionLock.current = true;
        const res = await apiCall('claimMission', 'POST', { missionId });
        missionLock.current = false;
        if (!res || res.error) {
            showToast('error', res?.error || 'মিশন দাবি ব্যর্থ হয়েছে।');
            return;
        }
        const bonus = Number(res.bonus) || 0;
        setAppState(prev => {
            const next = {
                ...prev,
                user: {
                    ...prev.user,
                    balance: (typeof res.newBalance === 'number') ? res.newBalance : (prev.user.balance || 0) + bonus,
                    totalEarned: (prev.user.totalEarned || 0) + bonus,
                    claimedMissions: { ...(prev.user.claimedMissions || {}), [missionId]: Date.now() },
                },
            };
            saveLocal(next);
            return next;
        });
        showToast('success', `মিশন সম্পন্ন! +${bonus} ${appState.config.currencySymbol || 'টাকা'} বোনাস`);
        tg.HapticFeedback.notificationOccurred('success');
    }

    const spinLock = useRef(false);
    async function handleSpinReward() {
        if (spinLock.current) return null;
        spinLock.current = true;
        try {
            const res = await apiCall('claimSpinReward', 'POST', {});
            if (res && !res.error) {
                const reward = Number(res.reward) || 0;
                setAppState(prev => {
                    const next = {
                        ...prev,
                        user: {
                            ...prev.user,
                            balance: res.newBalance ?? prev.user.balance,
                            totalEarned: (prev.user.totalEarned || 0) + reward,
                            freeSpinsUsed: res.freeSpinsUsed ?? (prev.user.freeSpinsUsed || 0),
                        },
                    };
                    saveLocal(next);
                    return next;
                });
                return res;
            }
            if (res && res.error) {
                showToast('error', res.error);
                return { error: res.error };
            }
            const cfg    = appState.config.spinConfig || {};
            const rewards = (Array.isArray(cfg.rewards) && cfg.rewards.length >= 2) ? cfg.rewards.map(Number) : [1, 2, 5, 10, 20, 50, 100, 500];
            const segIndex = Math.floor(Math.random() * rewards.length);
            const reward   = rewards[segIndex];
            setAppState(prev => {
                const next = {
                    ...prev,
                    user: {
                        ...prev.user,
                        balance: (prev.user.balance || 0) + reward,
                        totalEarned: (prev.user.totalEarned || 0) + reward,
                        freeSpinsUsed: (prev.user.freeSpinsUsed || 0) + 1,
                    },
                };
                saveLocal(next);
                return next;
            });
            return { reward, segmentIndex: segIndex, demo: true };
        } finally {
            spinLock.current = false;
        }
    }

    async function handleWithdraw(payload) {
        if (withdrawLock.current) return false;
        withdrawLock.current = true;
        const rData = await apiCall('withdraw', 'POST', payload);
        withdrawLock.current = false;
        if (rData?.success) {
            const newBal = (typeof rData.newBalance === 'number') ? rData.newBalance : Math.max(0, (appState.user.balance || 0) - payload.amount);
            setAppState(prev => {
                const next = { ...prev, user: { ...prev.user, balance: newBal } };
                saveLocal(next);
                return next;
            });
            const updtHist = await apiCall('getHistory', 'POST', { id: appState.user.id });
            if (updtHist) {
                setAppState(prev => { const n = { ...prev, history: updtHist }; saveLocal(n); return n; });
            }
            setWithdrawModal({
                amount: payload.amount,
                method: payload.method,
                account: payload.account,
                balance: newBal,
            });
            showToast('success', 'উত্তোলন অনুরোধ জমা দেওয়া হয়েছে!');
            tg.HapticFeedback.notificationOccurred('success');
            return true;
        } else {
            showToast('error', rData?.message || 'সার্ভার ত্রুটি। আবার চেষ্টা করুন।');
            return false;
        }
    }

    function handleCopy(link) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(link).then(() => showToast('success', 'লিংক কপি করা হয়েছে!'));
        } else {
            const tmp = document.createElement('input');
            tmp.value = link;
            document.body.appendChild(tmp);
            tmp.select();
            document.execCommand('copy');
            document.body.removeChild(tmp);
            showToast('success', 'লিংক কপি করা হয়েছে!');
        }
        tg.HapticFeedback.notificationOccurred('success');
    }

    function handleShare(link) {
        tg.openTelegramLink(`https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent('PrimeBD-তে যোগ দিন এবং এখনই আয় শুরু করুন!')}`);
    }

    function handleNav(page) {
        if (page === 'tutorial') {
            setShowTutorial(true);
            try { tg.HapticFeedback.impactOccurred('light'); } catch {}
            return;
        }
        if (page === activePage) return;
        setActivePage(page);
        try { tg.HapticFeedback.impactOccurred('light'); } catch {}

        if (page === 'withdraw') {
            apiCall('getHistory', 'POST', { id: appState.user.id }).then(data => {
                if (data) {
                    setAppState(prev => { const n = { ...prev, history: data }; saveLocal(n); return n; });
                }
            });
        }
    }

    const u   = appState.user;
    const cfg = appState.config;
    const sym = cfg.currencySymbol || 'টাকা';

    return (
        <>
            <style>{css}</style>

            {!appReady && <Loader hiding={loaderHide} />}
            <Toast type={toast.type} msg={toast.msg} show={toast.show} />

            {showTutorial && <TutorialModal cfg={cfg} onClose={() => setShowTutorial(false)} />}

            {withdrawModal && (
                <div className="modal-overlay" onClick={() => setWithdrawModal(null)}>
                    <div className="receipt-card" onClick={e => e.stopPropagation()}>
                        <div className="receipt-head">
                            <div className="receipt-head-icon">
                                <Icon name="withdraw" size={22} />
                            </div>
                            <div>
                                <h3>উত্তোলনের অনুরোধ জমা হয়েছে</h3>
                                <p>রেফারেন্স হিসেবে এই তথ্যগুলো সংরক্ষণ করুন</p>
                            </div>
                        </div>
                        <div className="receipt-amount-row">
                            <small>উত্তোলনের পরিমাণ</small>
                            <strong>{withdrawModal.amount} {sym}</strong>
                            <div style={{ marginTop: 10 }}>
                                <span className="receipt-status-chip">
                                    <Icon name="clock" size={12} /> অপেক্ষমাণ
                                </span>
                            </div>
                        </div>
                        <div className="receipt-body">
                            <div className="receipt-row">
                                <span>পেমেন্ট পদ্ধতি</span>
                                <strong>{withdrawModal.method}</strong>
                            </div>
                            <div className="receipt-row">
                                <span>অ্যাকাউন্ট</span>
                                <strong>{withdrawModal.account}</strong>
                            </div>
                            <div className="receipt-row">
                                <span>নতুন ব্যালেন্স</span>
                                <strong>{withdrawModal.balance.toFixed(2)} {sym}</strong>
                            </div>
                        </div>
                        <p className="receipt-note">
                            আমাদের টিম সাধারণত ২৪ ঘণ্টার মধ্যে অনুরোধটি প্রসেস করে। প্রসেস সম্পন্ন হলে স্ট্যাটাস আপডেট হবে।
                        </p>
                        <div className="receipt-foot">
                            <button className="btn-receipt-close" onClick={() => setWithdrawModal(null)}>বন্ধ করুন</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Top Nav */}
            <div className="top-nav">
                <div className="user-pill">
                    <div className="user-avatar">
                        <img src={u.photoUrl || 'https://ui-avatars.com/api/?name=User&background=101216&color=d4af37&size=44'} alt="Avatar" />
                        <div className="avatar-status" />
                    </div>
                    <div className="user-info">
                        <h3>{u.firstName || 'ব্যবহারকারী'}</h3>
                        <p>আইডি: {u.id}</p>
                    </div>
                </div>
                <div className="header-balance">
                    <Icon name="coin" size={16} />
                    <strong>{(u.balance || 0).toFixed(2)} {sym}</strong>
                </div>
            </div>

            {/* Pages — only the active page is rendered */}
            {activePage === 'home'     && <HomePage appState={appState} onCopy={handleCopy} onShare={handleShare} onSpinDone={handleSpinReward} />}
            {activePage === 'earn'     && <EarnPage appState={appState} onAdDone={handleAdDone} onTaskBegin={handleTaskBegin} />}
            {activePage === 'mission'  && <MissionPage appState={appState} onClaimMission={handleClaimMission} />}
            {activePage === 'withdraw' && <WithdrawPage appState={appState} onWithdraw={handleWithdraw} />}

            {/* Bottom Nav */}
            <div className="bottom-nav">
                {[
                    { key: 'home', icon: 'home', label: 'হোম' },
                    { key: 'earn', icon: 'bolt', label: 'আয়' },
                    { key: 'mission', icon: 'trophy', label: 'মিশন' },
                    { key: 'withdraw', icon: 'withdraw', label: 'উত্তোলন' },
                    { key: 'tutorial', icon: 'play', label: 'টিউটরিয়াল' },
                ].map(({ key, icon, label }) => (
                    <div
                        key={key}
                        className={`nav-item ${activePage === key ? 'active' : ''}`}
                        onClick={() => handleNav(key)}
                    >
                        <span className="nav-img"><Icon name={icon} size={22} /></span>
                        <span>{label}</span>
                    </div>
                ))}
            </div>
        </>
    );
}
