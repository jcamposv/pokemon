/**
 * Extracts the last ID from a URL.
 *
 * This function splits the URL by slashes ('/'), filters out any empty segments,
 * and returns the last segment as the ID. It's useful for extracting IDs from URLs that are consistently formatted.
 *
 * @param {string} url - The URL from which to extract the last ID.
 * @returns {string} The last ID found in the URL.
 */
export const extractLastIdFromUrl = (url: string) =>  {
    const parts = url.split('/').filter(part => part !== '');
    return parts[parts.length - 1];
  }