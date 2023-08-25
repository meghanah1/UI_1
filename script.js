$(document).ready(function () {
  $("#loginForm").submit(function (e) {
    e.preventDefault();

    var username = $("#username").val();
    var password = $("#password").val();

    if (!/^[A-Z][a-z]*$/.test(username)) {
      alert("Username should start with a capital letter.");
    } else if (!/^[a-z0-9]*$/.test(password)) {
      alert("Password should only contain small letters and numbers.");
    } else {
      // Successful login, go to another page
      window.location.href = "another-page.html";
    }
  });
});
