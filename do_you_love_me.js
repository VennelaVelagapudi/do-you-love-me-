const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Function to check if device is mobile
function isMobileDevice() {
  return window.innerWidth <= 768;
}

// Function to get random position with boundaries
function getRandomPosition() {
  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;
  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;
  
  // Get random position with minimum distance from edges
  const minDistance = 10; // Reduced minimum distance to allow more coverage
  const x = Math.max(minDistance, Math.min(maxX - minDistance, Math.random() * maxX));
  const y = Math.max(minDistance, Math.min(maxY - minDistance, Math.random() * maxY));
  
  return { x, y };
}

// Function to move No button to new random position
function moveNoButton() {
  if (isMobileDevice()) {
    const pos = getRandomPosition();
    
    // Add a small animation
    noBtn.style.transition = 'all 0.3s ease';
    noBtn.style.left = `${pos.x}px`;
    noBtn.style.top = `${pos.y}px`;
    
    setTimeout(() => {
      noBtn.style.transition = '';
    }, 300);
  }
}

// Desktop hover behavior
noBtn.addEventListener("mouseover", () => {
  if (!isMobileDevice()) {
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;
    const maxX = window.innerWidth - buttonWidth; // Changed to window width
    const maxY = window.innerHeight - buttonHeight; // Changed to window height
    
    const newX = Math.max(0, Math.min(maxX, Math.random() * maxX));
    const newY = Math.max(0, Math.min(maxY, Math.random() * maxY));

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
  }
});

// Mobile click behavior
noBtn.addEventListener("click", () => {
  if (isMobileDevice()) {
    moveNoButton();
  }
});

// yes button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});
