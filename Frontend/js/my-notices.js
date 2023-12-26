function fetchUserNotices() {
    // Add your user identifier or use the saved token
    const userId = 'your-user-id';
    fetch(`http://localhost:8000/api/notices?user=${userId}`)
    .then(response => response.json())
    .then(data => {
        const myNoticesContainer = document.getElementById('myNotices');
        myNoticesContainer.innerHTML = '';
        data.forEach(notice => {
            const noticeElement = document.createElement('div');
            noticeElement.innerHTML = `
                <h3>${notice.title}</h3>
                <p>${notice.body}</p>
                <small>Date: ${notice.date}</small>
                <button onclick="editNotice('${notice.id}')">Edit</button>
                <button onclick="deleteNotice('${notice.id}')">Delete</button>
            `;
            myNoticesContainer.appendChild(noticeElement);
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}


fetchUserNotices();
