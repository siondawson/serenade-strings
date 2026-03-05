document.addEventListener("DOMContentLoaded", function () {
    console.log("new vids js")
  const videoList = document.getElementById('videoList');
  const loadedVideoContainer = document.getElementById('loadedVideo');

  videoList.addEventListener('click', function(e) {
    const listItem = e.target.closest('li[data-video-id]');
    if (!listItem) return;

    // Remove selected class from all
    videoList.querySelectorAll('.selected-video').forEach(el => el.classList.remove('selected-video'));
    listItem.classList.add('selected-video');

    const videoId = listItem.getAttribute('data-video-id');
    const videoTitle = listItem.getAttribute('data-video-title');
    loadedVideoContainer.innerHTML = `
      <div class="container pt-5">
        <div class="video-wrapper embed-responsive embed-responsive-16by9 d-flex justify-content-center align-items-center">
          <iframe class="embed-responsive-item" 
                  src="https://www.youtube.com/embed/${videoId}" 
                  title="YouTube video player" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                  allowfullscreen>
          </iframe>
        </div>
        <div>
          <p class="text-center">Now Playing: ${videoTitle}</p>
        </div>
      </div>`;
  });
});