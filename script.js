// Array of image URLs
const images = [
    'image1.png',
    'image2.png',
    'image3.png',
    'image4.png',
    'image5.png',
    'image6.png',
    'image7.png',
    'image8.png',
    'image9.png'
];

function pickRandomImage() {
    const imgElement = document.getElementById('randomImage');
    let count = 0;
    const maxCount = 20; // Total number of changes, increased for more blur effect duration
    const intervalTime = 50; // Time in milliseconds between changes, reduced for faster cycling

    imgElement.classList.add('blurring'); // Apply blur effect

    const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * images.length);
        imgElement.src = images[randomIndex];

        count++;
        if (count >= maxCount) {
            clearInterval(interval); // Stop the interval when the max count is reached
            imgElement.classList.remove('blurring'); // Remove blur effect
        }
    }, intervalTime);
}
