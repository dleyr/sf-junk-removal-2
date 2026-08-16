/**
 * ICONS
 * Original, hand-built line icons used across the site (service
 * cards, process steps, etc). All use currentColor so they pick
 * up theme color automatically. Referenced by key from content.js.
 */

const ICONS = {
  boxes: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="20" width="16" height="16" rx="1.5"/>
    <rect x="26" y="24" width="12" height="12" rx="1.5"/>
    <rect x="16" y="8" width="14" height="12" rx="1.5"/>
    <path d="M6 26h16M16 12.5h14"/>
  </svg>`,

  sofa: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 24v-4a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v4"/>
    <path d="M6 24h36v8a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-8Z"/>
    <path d="M6 24a3 3 0 0 0-3 3v4a2 2 0 0 0 2 2h1"/>
    <path d="M42 24a3 3 0 0 1 3 3v4a2 2 0 0 1-2 2h-1"/>
    <path d="M11 35v3M37 35v3"/>
  </svg>`,

  appliance: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">
    <rect x="12" y="5" width="24" height="38" rx="2.5"/>
    <path d="M12 20h24"/>
    <path d="M18 12h1M18 27h1"/>
  </svg>`,

  garage: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 20 24 7l18 13"/>
    <path d="M9 19v20h30V19"/>
    <path d="M9 25h30M9 31h30M9 37h30"/>
  </svg>`,

  yard: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">
    <path d="M24 43V24"/>
    <path d="M24 24c0-8-6-13-14-13 0 8 6 13 14 13Z"/>
    <path d="M24 28c0-7 6-12 13-12 0 7-6 12-13 12Z"/>
  </svg>`,

  construction: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 41 27 21"/>
    <path d="M23 17l8 8"/>
    <path d="M30 10a5 5 0 0 1 7 7l-3 3-7-7 3-3Z"/>
    <path d="M6 42l4-1 1-4"/>
  </svg>`,

  truck: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">
    <rect x="4" y="14" width="22" height="18" rx="1.5"/>
    <path d="M26 20h9l7 6v6h-4"/>
    <circle cx="14" cy="35" r="3.4"/>
    <circle cx="34" cy="35" r="3.4"/>
    <path d="M26 32h5"/>
  </svg>`,

  quote: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 8h28"/>
    <path d="M12 8v18a4 4 0 0 0 4 4h6"/>
    <path d="M8 40l10-10"/>
  </svg>`,

  handshake: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 22l8-8 8 4 8-4"/>
    <path d="M20 18l8 8-3 3a3 3 0 0 1-4-4"/>
    <path d="M28 26l3 3a3 3 0 0 1-4 4l-7-7"/>
    <path d="M4 22v10l6 4M44 22l-8-8-3 2M44 22v10l-6 4"/>
  </svg>`,

  sparkle: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">
    <path d="M24 6v10M24 32v10M6 24h10M32 24h10"/>
    <path d="M13 13l6 6M35 35l-6-6M35 13l-6 6M13 35l6-6"/>
  </svg>`,

  leaf: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 38C6 22 18 8 40 8c2 20-12 32-30 30Z"/>
    <path d="M12 36 32 16"/>
  </svg>`,

  pin: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">
    <path d="M24 43S9 28 9 18a15 15 0 0 1 30 0c0 10-15 25-15 25Z"/>
    <circle cx="24" cy="18" r="5"/>
  </svg>`,

  phone: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">
    <path d="M11 6h7l3 8-4 3a20 20 0 0 0 9 9l3-4 8 3v7a3 3 0 0 1-3 3C18 35 8 25 8 9a3 3 0 0 1 3-3Z"/>
  </svg>`,

  mail: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">
    <rect x="5" y="10" width="38" height="28" rx="3"/>
    <path d="M6 13l18 14L42 13"/>
  </svg>`,

  clock: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="24" cy="24" r="18"/>
    <path d="M24 14v10l7 5"/>
  </svg>`,

  star: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.6 5.9 21l1.5-6.8L2.2 9.5l6.9-.7L12 2.5Z"/>
  </svg>`,

  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 9l6 6 6-6"/>
  </svg>`,

  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 7h16M4 12h16M4 17h16"/>
  </svg>`,

  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 6l12 12M18 6L6 18"/>
  </svg>`
};
