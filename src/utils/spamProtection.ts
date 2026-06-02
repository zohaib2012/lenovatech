const SPAM_PATTERNS = [
  /https?:\/\/[^\s]+/gi,
  /www\.[^\s]+/gi,
  /\[url[^\]]*\]/gi,
  /<a\s+href/gi,
  /buy\s+now/gi,
  /click\s+here/gi,
  /free\s+money/gi,
  /casino/gi,
  /cryptocurrency/gi,
  /earn\s+\$/gi,
  /make\s+money\s+fast/gi,
];

const STORAGE_KEY = 'lenovatech_form_timestamps';
const MIN_INTERVAL_MS = 3000;

export function detectSpam(message: string): boolean {
  const normalized = message.toLowerCase();
  return SPAM_PATTERNS.some(pattern => pattern.test(normalized));
}

export function rateLimit(): boolean {
  try {
    const timestamps: number[] = JSON.parse(
      sessionStorage.getItem(STORAGE_KEY) || '[]'
    );
    const now = Date.now();
    const recent = timestamps.filter(t => now - t < 60000);
    recent.push(now);
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(recent));

    if (recent.length > 1) {
      const lastSubmission = recent[recent.length - 2];
      return now - lastSubmission < MIN_INTERVAL_MS;
    }
    return false;
  } catch {
    return false;
  }
}
