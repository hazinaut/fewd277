document.addEventListener('DOMContentLoaded', function(){ 
    var form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var firstEmail = document.getElementById('firstEmail').value;
        var confirmEmail = document.getElementById('confirmEmail').value;
        
        if (firstEmail === confirmEmail) {
            alert('Submitted');

        } else {
            alert('Emails do not match. Please try again.');
        }
    });
});