document.getElementById('categoryFilter').addEventListener('change', function() {
    fetchNotices(this.value);
});

function fetchNotices(category = '') {
    const url = 'your-backend-url/notices' + (category ? `?category=${category}` : '');
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const noticesContainer = document.getElementById('notices');
        noticesContainer.innerHTML = '';
        data.forEach(notice => {
            const noticeElement = document.createElement('div');
            noticeElement.innerHTML = `
                <h3>${notice.title}</h3>
                <p>${notice.body}</p>
                <small>Category: ${notice.category}</small>
                <small>Date: ${notice.date}</small>
            `;
            noticesContainer.appendChild(noticeElement);
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}


fetchNotices();
