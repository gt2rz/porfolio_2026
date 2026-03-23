// ============================================================
// UTILS — Shared helper functions
// ============================================================

/** Format a date as YYYY-MM-DD (terminal style) */
export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0].replace(/-/g, '_');
}

/** Format a date as Q1_2024 */
export function formatQuarter(date: Date): string {
  const q = Math.ceil((date.getMonth() + 1) / 3);
  return `Q${q}_${date.getFullYear()}`;
}

/** Convert a title to a URL-safe slug */
export function toSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Truncate a string to a max length with ellipsis */
export function truncate(str: string, max: number): string {
  return str.length > max ? str.slice(0, max - 3) + '...' : str;
}

/** Pad a number to n digits (e.g., 1 → "01") */
export function pad(n: number, digits = 2): string {
  return String(n).padStart(digits, '0');
}

/** Get current time with local timezone (e.g., DD:MM:YYYY:HH:MM:SS_America/Bogota) */
export function getSystemTime(): string {
  const now = new Date();
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  // Usar Intl.DateTimeFormat para respetar el timezone local del usuario
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
  
  const parts = formatter.formatToParts(now);
  const values = {
    year: '',
    month: '',
    day: '',
    hour: '',
    minute: '',
    second: '',
  };
  
  parts.forEach(({ type, value }) => {
    if (type in values) values[type as keyof typeof values] = value;
  });
  
  return `${values.year}:${values.month}:${values.day}:${values.hour}:${values.minute}:${values.second}_${tz}`;
}
