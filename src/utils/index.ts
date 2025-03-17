/**
 * Extracts the first character of the first and last name.
 * Only the first and last names are used, any middle names are ignored.
 * @param {string} name - Full name
 * @returns {string} Initials in uppercase
 * @example
 * getInitials('harry potter'); // 'HP'
 * getInitials('John Walker'); // 'AD'
 */
export function getInitials(name: string): string {
  if (!name.trim()) {
    return '';
  }
  const parts = name.trim().split(/\s+/);
  const initials = parts.map((part) => part[0]).join('');
  return initials.toUpperCase();
}
