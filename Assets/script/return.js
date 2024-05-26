document.getElementById('returnForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let orderId = document.getElementById('orderId').value;
    let customerName = document.getElementById('customerName').value;
    let itemName = document.getElementById('itemName').value;
    let jewelryType = document.getElementById('jewelryType').value;
    let reason = document.getElementById('reason').value;
    let comments = document.getElementById('comments').value;

    if (!orderId || !customerName || !itemName || !jewelryType || !reason) {
        document.getElementById('message').textContent = 'Please fill out all required fields.';
        document.getElementById('message').style.color = 'red';
        return;
    }

    document.getElementById('message').innerHTML = '<i class="fas fa-check-circle"></i> Your return request has been submitted.';
    document.getElementById('message').style.color = 'green';

    document.getElementById('returnForm').reset();

    window.alert('Your message is sent successfully.');
});
