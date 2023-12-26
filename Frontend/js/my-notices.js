document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('token')) {
        window.location.href = 'login.html';
    }

    fetchMyNotices();

    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('token');
        window.location.href = 'login.html';
    });
});

function fetchMyNotices() {
    fetch('http://localhost:8000/my-notices', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => response.json())
    .then(myNotices => {
        const myNoticesContainer = document.getElementById('myNotices');
        myNoticesContainer.innerHTML = '';
        myNotices.forEach(notice => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h3>${notice.title}</h3>
                <p>${notice.body}</p>
                <button onclick="editNotice(${notice.id})">Edit</button>
                <button onclick="deleteNotice(${notice.id})">Delete</button>`;
            myNoticesContainer.appendChild(div);
        });
    })
    .catch(error => console.error('Error:', error));
}

function editNotice(noticeId) {
    // Logic to populate edit form with notice details
    // This part needs implementation based on your application's design and requirements.
}

function deleteNotice(noticeId) {
    if(confirm('Are you sure you want to delete this notice?')) {
        fetch(`http://localhost:8000/notices/${noticeId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            if(response.ok) {
                fetchMyNotices(); // Refresh the list after deletion
            } else {
                alert('Failed to delete notice.');
            }
        })
        .catch(error => console.error('Error:', error));
    }
}
