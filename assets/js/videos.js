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
                loadVideo(data[0].videoId, data[0].title);
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

            const playIcon = document.createElement('i');
            playIcon.classList.add('fas', 'fa-play-circle', 'play-icon');

            // Attach click event to load the video
            listItem.addEventListener('click', function () {
                loadVideo(video.videoId, video.title);
            });

            listItem.appendChild(thumbnail);
            listItem.appendChild(title);
            listItem.appendChild(playIcon);

            videoList.appendChild(listItem);
        });
    }

    // Function to load the video
    function loadVideo(videoId, videoTitle) {
        loadedVideoContainer.innerHTML = `
        <div class="container">
          <h3 class="text-center">${videoTitle}</h3>
          <div class="embed-responsive embed-responsive-16by9 d-flex justify-content-center align-items-center">
            <iframe class="embed-responsive-item w-100 w-md-75" 
                    src="https://www.youtube.com/embed/${videoId}" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
            </iframe>
          </div>
        </div>`;
    }
});
