// Made by Clement
// ----------------------------------------- //
// --------React Useful JS functions--------//
// 2020. 09.15
// Thease are pure javascript functions.

// convert currency to 1B, 1M , 1K etc
export function kBMFormatter(num) {
  if (Math.abs(num) > 999999999) return `${Math.sign(num) * ((Math.abs(num) / 1000000000).toFixed(1))}B`;
  if (Math.abs(num) > 999999) return `${Math.sign(num) * ((Math.abs(num) / 1000000).toFixed(1))}M`;
  if (Math.abs(num) > 999) return `${Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1))}K`;
  return `${Math.sign(num) * ((Math.abs(num)).toFixed(1))}`;
}

// convert number string with comma
export function CommaFomatter(value) {
  return (value * 1).toLocaleString();
}

// remove the ref token of shul url
export function RemoveLastMethod(url) {
  const urlArray = url.split('/');
  const newUrlArray = urlArray.slice(0, urlArray.length - 1);
  const newUrl = newUrlArray.join('/');
  return newUrl;
}

// split array into chunks
export function splitArrayIntoChunksOfLen(arr, len) {
  const chunks = []; let i = 0; const
    n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }
  return chunks;
}

// convert ISO date to Locale date format
export function convertISODateToLocale(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString();
}

// get pathname of url string
export function getPathName(url) {
  const val = new URL(url);
  return val.pathname;
}

// get base URL
export function getBaseUrl(url) {
  const pathArray = url.split('/');
  const protocol = pathArray[0];
  const host = pathArray[2];
  return `${protocol}//${host}`;
}

// get useful pathname
export function pathnameParsing(str) {
  const uri = new URL('http://www.example.com');
  uri.pathname = str;
  const ret = uri.pathname;
  return ret.substring(1);
}

// get last pathname
export function getLastPathName(str) {
  const uri = new URL(str);
  const pathArray = uri.pathname.split('/');
  return pathArray[pathArray.length - 1];
}

// get youtube embedded video link
export function getYoutubeEmbeded(url) {
  const pattern2 = /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/)?(.+)/g;
  if (pattern2.test(url)) {
    const replacement = 'http://www.youtube.com/embed/$1';
    url = url.replace(pattern2, replacement);
  }
  return url;
}

// get whole url link
export function getHostUrl(url) {
  const pattern2 = /(?:http?s?:\/\/)?(?:www\.)?(.+)/g;
  if (pattern2.test(url)) {
    const replacement = 'http://www.$1';
    url = url.replace(pattern2, replacement);
  }
  return url;
}

// get last transform image by adding transform action
export function transformCloudinaryUrl(url, action) {
  const urlArray = url.split('/');
  urlArray.splice(6, 0, action);
  const ret = urlArray.join('/');
  return ret;
}

export default kBMFormatter;
