/**
 * Format a number as currency
 * @param value - Number to format
 * @param currency - Currency code (default: BRL)
 * @returns Formatted currency string
 */
export function formatCurrency(value: number, currency = "BRL"): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency,
  }).format(value);
}

/**
 * Format a date to Brazilian format
 * @param date - Date to format
 * @returns Formatted date string
 */
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("pt-BR").format(dateObj);
}

/**
 * Format a date to relative time
 * @param date - Date to format
 * @returns Relative time string (e.g., "2 hours ago")
 */
export function formatRelativeTime(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  const now = new Date();
  const diff = now.getTime() - dateObj.getTime();
  
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) return `${days} dia${days > 1 ? "s" : ""} atrás`;
  if (hours > 0) return `${hours} hora${hours > 1 ? "s" : ""} atrás`;
  if (minutes > 0) return `${minutes} minuto${minutes > 1 ? "s" : ""} atrás`;
  return "agora mesmo";
}

/**
 * Truncate text with ellipsis
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @returns Truncated text
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}