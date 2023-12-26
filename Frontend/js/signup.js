document.getElementById('signupForm').addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone_number = document.getElementById('phone_number').value;
    const department = document.getElementById('department').value;

    fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, phone_number, department })
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            window.location.href = 'login.html';
        } else {
            alert('Signup failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
