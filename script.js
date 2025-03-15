document.getElementById('feedback-form').addEventListener('submit',function(event){
    event.preventDefault();
    document.getElementById('feedback-message').innerText="thank you for your feedback!";
    this.requestFullscreen();
});