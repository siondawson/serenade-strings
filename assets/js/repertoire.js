document.addEventListener('DOMContentLoaded', () => {
    const rockPopList = document.getElementById('rock-pop-list');
    const classicalList = document.getElementById('classical-list');
    const filmList = document.getElementById('film-list');
    const jazzList = document.getElementById('jazz-list');
    const traditionalList = document.getElementById('traditional-list');

    fetch('assets/json/pop-rock-rep.json')
        .then(response => response.json())
        .then(data => {
            for (const [artist, songs] of Object.entries(data)) {
                songs.forEach(song => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${artist} - ${song}`;
                    rockPopList.appendChild(listItem);
                });
            }
        })
        .catch(error => console.error('Error fetching pop/rock data:', error));

    fetch('assets/json/classical-rep.json')
        .then(response => response.json())
        .then(data => {
            for (const [composer, compositions] of Object.entries(data)) {
                compositions.forEach(composition => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${composer} - ${composition}`;
                    classicalList.appendChild(listItem);
                });
            }
        })
        .catch(error => console.error('Error fetching classical data:', error));

    fetch('assets/json/film-musical-games-rep.json')
        .then(response => response.json())
        .then(data => {
            for (const [composer, compositions] of Object.entries(data)) {
                compositions.forEach(composition => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${composer} - ${composition}`;
                    filmList.appendChild(listItem);
                });
            }
        })
        .catch(error => console.error('Error fetching film data:', error));

    fetch('assets/json/jazz-rep.json')
        .then(response => response.json())
        .then(data => {
            for (const [composer, compositions] of Object.entries(data)) {
                compositions.forEach(composition => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${composer} - ${composition}`;
                    jazzList.appendChild(listItem);
                });
            }
        })
        .catch(error => console.error('Error fetching jazz data:', error));

    fetch('assets/json/traditional-rep.json')
        .then(response => response.json())
        .then(data => {
            for (const [composer, compositions] of Object.entries(data)) {
                compositions.forEach(composition => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${composer} - ${composition}`;
                    traditionalList.appendChild(listItem);
                });
            }
        })
        .catch(error => console.error('Error fetching traditional data:', error));

    
});
