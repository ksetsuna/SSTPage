// Code From: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const fetchJson = (url, callback) => {
  return fetch(url).then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.includes("application/json")) {
      return response.json();
    } else {
      new TypeError("Oops, we haven't got JSON!");
    }
  });
}

export default fetchJson