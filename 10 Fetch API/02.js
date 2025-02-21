// Fetching API using Promise Chaining

const URL = "https://potterapi-fedeperin.vercel.app/en/books";

function getBooks() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

getBooks();
