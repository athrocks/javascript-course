// Fetch API

const URL = "https://potterapi-fedeperin.vercel.app/en/books";

// fetch(URL) returns a promise
// The promise resolves to the Response object representing the response to the request.

// let promise = fetch(URL,[OPTIONS]);
// without providing any options, the default is a GET request
// console.log(promise);

const getBooks = async () => {
  console.log("Fetching data...");
  let response = await fetch(URL);
  console.log(response); // JSON Format

  let data = await response.json();
  console.log(data);
};

getBooks();
