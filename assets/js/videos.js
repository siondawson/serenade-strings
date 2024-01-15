document.addEventListener("DOMContentLoaded", function () {
    const videoList = document.getElementById('videoList');
    const loadedVideoContainer = document.getElementById('loadedVideo');

    // Fetch video data from 'assets/json/videos.json'
    fetch('assets/json/videos.json')
        .then(response => response.json())
        .then(data => {
            // Display video thumbnails in the list
            displayVideoGallery(data);

            // Load the first video
            if (data.length > 0) {
                loadVideo(data[0].videoId);
            }
        })
        .catch(error => console.error('Error fetching videos:', error));

    function displayVideoGallery(videos) {
        // Display video thumbnails in the list
        videos.forEach(video => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

            const thumbnail = document.createElement('img');
            thumbnail.src = video.thumbnail;
            thumbnail.alt = video.title;
            thumbnail.classList.add('img-thumbnail', 'video-thumbnail');

            const title = document.createElement('span');
            title.textContent = video.title;

            // Attach click event to load the video
            listItem.addEventListener('click', function () {
                loadVideo(video.videoId);
            });

            listItem.appendChild(thumbnail);
            listItem.appendChild(title);

            videoList.appendChild(listItem);
        });
    }

    // Function to load the video
    function loadVideo(videoId) {
        loadedVideoContainer.innerHTML = `
            <div class="embed-responsive embed-responsive-16by9 d-flex justify-content-center align-items-center">
                <iframe class="embed-responsive-item" 
                        src="https://www.youtube.com/embed/${videoId}" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                </iframe>
            </div>
        `;
    }
});
