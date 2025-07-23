$doc = $(document)
$doc.ready(() => { 
  $doc.getElementById("save").addEventListener("click"), function (e) { e.preventDefault();
};


// Books POST function
function createBook() {
  var title = $("#title").val().trim();
  var author = $("#author").val().trim();
  var isbn = $("#isbn").val().trim();
  var year = $("#year").val().trim();
  var publisher = $("#publisher").val().trim();

if (!title || !author || !publisher) {
    alert("This field cannot be empty.");
    return;
  }

if (!/^\d{4}$/.test(year) || year < 1500 || year > 2099) {
    alert("Invalid number.");
    return;
  }

if (!/^\d{10}(\d{3})?$/.test(isbn)) {
    alert("Must be 10 or 13 characters long.");
    return;
  }

}
});


// Create button function
$("#save").on("click", function () {
    createBook();
});







