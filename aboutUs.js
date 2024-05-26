document.addEventListener('DOMContentLoaded', () => {
    const orderStages = [
        { id: 'orderReceived', name: 'Order Received' },
        { id: 'processing', name: 'Processing' },
        { id: 'shipped', name: 'Shipped' },
        { id: 'outForDelivery', name: 'Out for Delivery' },
        { id: 'delivered', name: 'Delivered' }
    ];
    let currentStage = 0;
    const maxDelay = 5000; // Maximum delay of 5 seconds between stages
    const minDelay = 1000; // Minimum delay of 1 second between stages

    function updateOrderStatus() {
        if (currentStage < orderStages.length) {
            const stage = orderStages[currentStage];
            const element = document.getElementById(stage.id);
            if (element) {
                element.classList.add('active');
                element.style.color = '#5cb85c'; // Change text color to indicate completion
                console.log(`${stage.name} stage is now active.`);
                currentStage++;
                scheduleNextUpdate();
            } else {
                console.error(`Element with ID '${stage.id}' not found.`);
            }
        } else {
            console.log('All stages completed. Resetting order status.');
            resetOrderStatus();
        }
    }

    function scheduleNextUpdate() {
        const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
        setTimeout(updateOrderStatus, delay);
    }

    function resetOrderStatus() {
        orderStages.forEach(stage => {
            const element = document.getElementById(stage.id);
            if (element) {
                element.classList.remove('active');
                element.style.color = ''; // Reset text color
            }
        });
        currentStage = 0;
        setTimeout(updateOrderStatus, 2000); // Restart after a 2-second delay
    }

    scheduleNextUpdate();

    // Dynamic content update for About Us section
    const aboutUsContainer = document.querySelector('.about-us-container');
    const dynamicContent = [
        {
            title: "Our Commitment",
            text: "We are committed to delivering outstanding customer service and ensuring our customers are satisfied with every purchase."
        },
        {
            title: "Our Team",
            text: "Our team consists of experienced jewelers and designers who are passionate about creating beautiful and unique jewelry pieces."
        },
        {
            title: "Sustainability",
            text: "We are dedicated to sustainable practices and use ethically sourced materials to create our jewelry."
        },
        {
            title: "Customer Stories",
            text: "Read inspiring stories from our customers and their experiences with our jewelry."
        }
    ];

    let currentContentIndex = 0;

    function updateAboutUsContent() {
        const content = dynamicContent[currentContentIndex];
        aboutUsContainer.innerHTML = `
            <h1>About Us</h1>
            <div class="intro-text">
                <h2>${content.title}</h2>
                <p>${content.text}</p>
            </div>
            <div class="pictures-container">
                <div class="picture-item">
                    <img src="Assets/photos/jewelry1.jpg" alt="Jewelry 1">
                    <p>Exquisite Designs</p>
                </div>
                <div class="picture-item">
                    <img src="Assets/photos/jewelry2.jpg" alt="Jewelry 2">
                    <p>Quality Craftsmanship</p>
                </div>
                <div class="picture-item">
                    <img src="Assets/photos/jewelry3.jpg" alt="Jewelry 3">
                    <p>Timeless Elegance</p>
                </div>
                <div class="picture-item">
                    <img src="Assets/photos/jewelry4.jpg" alt="Jewelry 4">
                    <p>Unique Collections</p>
                </div>
            </div>
            <div class="repair-service">
                <i class="fas fa-tools"></i>
                <p>We also offer repair services for your beloved jewelry pieces.</p>
            </div>
            <div class="map-container">
                <h1>Visit Us</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509839!2d144.95373511531973!3d-37.81627937975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577dbece42d0e63!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1600737162732!5m2!1sen!2sau" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        `;
        currentContentIndex = (currentContentIndex + 1) % dynamicContent.length;
    }

    setInterval(updateAboutUsContent, 10000); // Update content every 10 seconds
});
