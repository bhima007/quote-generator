window.onload = getQuote;

let loading = false;

function getQuote() {
  loading = true;
  document.getElementById("quote-show").classList.add("hidden");
  document.getElementById("quote-load").classList.remove("hidden");
  fetch("http://quotes.stormconsultancy.co.uk/random.json")
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      loading = false;
      document.getElementById("quote-show").classList.remove("hidden");
      document.getElementById("quote-load").classList.add("hidden");
      document.getElementById("quote").innerHTML = `\" ${res.quote} \"`;
      document.getElementById("author").innerHTML = `- ${res.author} -`;
    })
    .catch((error) => {
      loading = false;
      console.error(error);
    });
}
