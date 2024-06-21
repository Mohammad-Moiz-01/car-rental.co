document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const carModel = document.getElementById('car-model').value;
        const rentalDates = document.getElementById('rental-dates').value;
        const message = document.getElementById('message').value;

        if (name && email && phone && message) {
            // Send the form data to the email service (e.g., using SMTP/SendGrid API)
            // This is a placeholder for actual email functionality
            alert('Form submitted successfully!');
        } else {
            alert('Please fill out all required fields.');
        }
    });
});
