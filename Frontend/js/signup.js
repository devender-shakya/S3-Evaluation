document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        phone_number: document.getElementById('phone').value,
        department: document.getElementById('department').value
    };

    fetch('http://localhost:8000/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
