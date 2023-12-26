document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    fetch('http://localhost:8000/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
      
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
