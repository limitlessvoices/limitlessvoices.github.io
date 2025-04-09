const API_KEY = 'AIzaSyCQuenlaFBWhX4hgb3_NhP0Ca54p7L9wcs'; // Replace with your YouTube API key
const CHANNEL_ID = 'UCQnquq-jI4kP3KorznaO4Pg'; // Your Channel ID

// Function to fetch YouTube videos
async function fetchVideos() {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6`);
    const data = await response.json();

    const videoGrid = document.getElementById('videoGrid');
    
    data.items.forEach(item => {
        const videoId = item.id.videoId;
        const videoElement = document.createElement('div');
        videoElement.classList.add('video');
        
        videoElement.innerHTML = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
        
        videoGrid.appendChild(videoElement);
    });
}

// Load videos when the page loads
window.onload = fetchVideos;
