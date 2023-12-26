document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('token')) {
        window.location.href = 'login.html';
    }

    fetchNotices();

    document.getElementById('categoryFilter').addEventListener('change', function(e) {
        fetchNotices(e.target.value);
    });

    document.getElementById('addNoticeForm').addEventListener('submit', function(e) {
        e.preventDefault();
        addNotice();
    });

    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('token');
        window.location.href = 'login.html';
    });
});

function fetchNotices(category = '') {
    fetch(`http://localhost:8000/notices?category=${category}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => response.json())
    .then(notices => {
        const noticesContainer = document.getElementById('notices');
        noticesContainer.innerHTML = '';
        notices.forEach(notice => {
            const div = document.createElement('div');
            div.innerHTML = `<h3>${notice.title}</h3><p>${notice.body}</p>`;
            noticesContainer.appendChild(div);
        });
    })
    .catch(error => console.error('Error:', error));
}

function addNotice() {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const category = document.getElementById('category').value;

    fetch('http://localhost:8000/notices', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, body, category })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            fetchNotices(); // Refresh the list of notices
        } else {
            alert('Failed to add notice');
        }
    })
    .catch(error => console.error('Error:', error));
}
