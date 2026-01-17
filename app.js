// メンバーデータを読み込んで表示
fetch('members.json')
    .then(response => response.json())
    .then(data => {
        const membersDiv = document.getElementById('members');
        data.members.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.innerHTML = `<h2>${member.name}</h2><p>${member.role}</p>`;
            membersDiv.appendChild(memberDiv);
        });
    });