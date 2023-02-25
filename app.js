const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  console.log("i am working");
  // check if the username and password are valid
  if (username.value === 'Deepraj',"Ankita","Neha" && password.value === '123',"321","Neha@321") {
    alert('Login successful!');
    window.location.href = 'dashboard.html'; // redirect to dashboard page
  } else {
    alert('Invalid username or password');
  }
});

