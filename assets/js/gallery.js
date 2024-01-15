document.addEventListener("DOMContentLoaded", function () {
    const photosContainer = document.getElementById("photos");
  
    // Fetch the gallery.json file
    fetch('assets/json/gallery.json')
      .then(response => response.json())
      .then(images => {
        // Shuffle the array
        const shuffledImages = shuffleArray(images);
  
        // Append each shuffled image to the container
        shuffledImages.forEach(image => {
          const img = document.createElement('img');
          img.src = image.src;
          img.alt = image.alt || ''; // Use provided alt text or an empty string
          photosContainer.appendChild(img);
        });
      })
      .catch(error => console.error('Error fetching gallery:', error));
  
    // Function to shuffle an array
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  });
  