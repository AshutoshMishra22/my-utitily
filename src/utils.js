function debounce(func) {
  let timeoutId;
  return function (...args) {
    timeoutId && clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      func.apply(this, args);
    }, 1000);
  };
}
async function requestAPI(url, body, method = "GET", headers) {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  let options = { headers: { ...headers } };
  const cookies = document.cookie;
  console.log(" cookies ", cookies, url);
  if (method !== "GET") {
    options = {
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
  }
  const response = await fetch(`${baseUrl}${url}`, {
    method: method ?? "GET",
    ...options,
  });
  return response.json();
}
export { debounce, requestAPI };
