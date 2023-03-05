// For the given JSON iterate over all loops

// For loop
var request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/posts");
request.send();
request.onload = function () {
  var data = JSON.parse(this.response);
  for (i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
};

// For in loop
var request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/posts");
request.send();
request.onload = function () {
  var data = JSON.parse(this.response);
  for (let a in data) {
    console.log(data[a]);
  }
};

// For of loop
var request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/posts");
request.send();
request.onload = function () {
  var data = JSON.parse(this.response);
  for (let a of data) {
    console.log(a);
  }
};

// ForEach loop
var request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/posts");
request.send();
request.onload = function () {
  var data = JSON.parse(this.response);
  data.forEach((element) => {
    console.log(element);
  });
};
