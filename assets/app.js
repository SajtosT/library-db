document.getElementById("save").addEventListener("click", function (e) {
  e.preventDefault();

  var data = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    isbn: document.getElementById("isbn").value,
    year: document.getElementById("year").value,
    publisher: document.getElementById("publisher").value,
  };

  fetch("http://localhost:3000/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(function (response) {
    if (response.ok) {
      alert("Book saved successfully!");
    } else {
      alert("Something went wrong.");
    }
  })
  .catch(function (error) {
    console.error("Network or server error:", error);
    alert("Couldn't join to server.");
  });
});
