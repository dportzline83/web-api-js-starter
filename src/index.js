function hello() {
  const heading = document.getElementById('welcome');
  fetch('http://localhost:5000/api/default')
    .then(function(response) {
      return response.json();
    })
    .then(function (body) {
      heading.innerHTML = body + "!!!";
    });
}

hello();