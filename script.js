document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get form values
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
  
    // Log the form values (you can replace this with sending to a server)
    console.log('Name:', name);
    console.log('Contact:', contact);
    console.log('Email:', email);
  
    // Reset the form after submission
    document.getElementById('myForm').reset();
  });
  