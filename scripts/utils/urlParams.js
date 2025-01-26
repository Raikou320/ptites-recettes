export const getURLParams = function (url) {
  const urlObj = new URL(url);
  const urlParams = new URLSearchParams(urlObj.search);
  let params = []
  for (const [key, value] of urlParams.entries()) {
    params.push(`${key}=${value}`)
  }
  return params
}, setURLParam = function (url, paramName, value) {
  const urlObj = new URL(url);
  const urlParams = new URLSearchParams(urlObj.search);
  urlParams.set(paramName, value);
  urlObj.search = urlParams.toString();
  window.location.href =  urlObj.toString();
};