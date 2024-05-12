// Array of image URLs
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    'image9.jpg'
];

function pickRandomImage() {
    const imgElement = document.getElementById('randomImage');
    let count = 0;
    const maxCount = 20; // Total number of changes, increased for more blur effect duration
    const intervalTime = 10; // Time in milliseconds between changes, reduced for faster cycling

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
