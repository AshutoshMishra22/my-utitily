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
  let options = {
    headers: {
      ...headers,
      ...(document.cookie ? { cookies: document.cookie } : {}),
    },
  };
  if (method !== "GET") {
    console.log(">>> ", options);
    options = {
      headers: {
        ...options.headers,
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
