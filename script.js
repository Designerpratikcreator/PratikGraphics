<script>
        const container = document.getElementById('bubble-container');
        let intervalId;

        // Function to create and add a single bubble
        function createBubble() {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');

            // Set random size for the bubble
            const size = Math.random() * 80 + 20; // Size between 20px and 100px
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;

            // Set random left position
            bubble.style.left = `${Math.random() * 100}%`;

            // Set a random duration for the animation to create variation
            const duration = Math.random() * 15 + 10; // Duration between 10s and 25s
            bubble.style.animationDuration = `${duration}s`;

            // Set a random animation delay so bubbles appear staggered
            bubble.style.animationDelay = `${Math.random() * 5}s`;

            // Set a random, translucent color
            const hue = Math.floor(Math.random() * 360);
            bubble.style.backgroundColor = `hsla(${hue}, 100%, 75%, 0.1)`;

            // Add the bubble to the container
            container.appendChild(bubble);

            // Remove the bubble element after its animation is complete
            bubble.addEventListener('animationend', () => {
                bubble.remove();
            });
        }

        // Start creating bubbles
        function startBubbles() {
            // Clear any existing interval to prevent duplicates on resize
            if (intervalId) {
                clearInterval(intervalId);
            }
            // Create a new bubble every 500 milliseconds
            intervalId = setInterval(createBubble, 500);
        }

        // Start the animation when the window loads
        window.onload = startBubbles;

        // Handle window resize
        window.addEventListener('resize', () => {
            // Re-start the bubble creation process on resize
            startBubbles();
        });
    </script>
