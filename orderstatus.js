document.addEventListener('DOMContentLoaded', () => {
    // Simulating an order status update
    const orderStages = ['orderReceived', 'processing', 'shipped', 'outForDelivery', 'delivered'];
    let currentStage = 0;

    function updateOrderStatus() {
        if (currentStage < orderStages.length) {
            document.getElementById(orderStages[currentStage]).classList.add('active');
            currentStage++;
        }
    }
    setInterval(updateOrderStatus, 2000);
});
