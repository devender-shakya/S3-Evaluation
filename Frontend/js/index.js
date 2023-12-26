document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('token')) {
        window.location.href = 'login.html';
    }

    fetchNotices();

    document.getElementById('categoryFilter').addEventListener('change', function(e) {
        fetchNotices(e.target.value);
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
    });
}

document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem('token');
    window.location.href = 'login.html';
});
