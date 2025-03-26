$(function(){
    let tagP = $('#about p').text('I am a beginner web developer with a strong foundation in HTML, CSS, and JavaScript. I am passionate about creating visually appealing and user-friendly websites. Currently, I am in the process of expanding my skill set by learning the jQuery library, which will enhance my ability to create dynamic and interactive web applications. I am eager to continue my journey in web development, and I am excited to take on new challenges that will help me grow as a developer.Feel free to modify it to better fit your style or add any additional information!').hide(3000).show(2000);
    
    let section = $('.about-foto').before('<h3 class="foto-h3">In my free time, I enjoy traveling to new places and experiencing different cultures. Exploring the world not only broadens my horizons but also inspires my creativity. Additionally, I have a passion for drawing, which allows me to express my thoughts and ideas visually. Whether its sketching landscapes from my travels or experimenting with different art styles, drawing is a fulfilling hobby that brings me joy and relaxation.Feel free to adjust any part of it to better reflect your personality!</h3>')
    $('.foto-h3').css('font-family', 'Montserrat', 'serif').css('font-size', '1.1em').css('color', '#333')
   
});

$(function(){
    $('.nav-list > li').hide(3000).show(2000);

});

$(function(){
    let btn = $('.btn').width(200).height(50)
    let form = $('.contact-input').width(500).height(50)
    let text = $('.contact-input').color('red')
});

$(function(){
    $('.nav-list li a').css('color', 'white').css('font-size', '25px')
    $('.section-title').css('color', 'green').css('font-size', '40px')
    $('.logo').css('color', 'white').css('font-size', '40px')
    $('.header').css('background-color', 'gray')

});

function calculateTotal() {
    const services = document.querySelectorAll('.service');
    let total = 0;

    services.forEach(service => {
        if (service.checked) {
            total += parseInt(service.value);
        }
    });


    document.getElementById('total').innerText = total;
}

function saveLocally() {
    const review = document.getElementById('review').value;
    if (review) {
        localStorage.setItem('savedReview', review);
        alert('Your review has been saved locally!');
    } else {
        alert('Please enter a review before saving.');
    }
}

function saveLocally() {
    const review = document.getElementById('review').value;
    if (review) {
        localStorage.setItem('savedReview', review);
        alert('Your review has been saved locally!');
    } else {
        alert('Please enter a review before saving.');
    }
}

function submitFeedback() {
    const review = document.getElementById('review').value;
    if (review) {
        const reviewsList = document.getElementById('reviews');
        const newReview = document.createElement('li');
        newReview.textContent = review;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            reviewsList.removeChild(newReview);
        };

        newReview.appendChild(deleteButton);
        reviewsList.appendChild(newReview);
        document.getElementById('review').value = ''; // Clear the textarea
        alert('Thank you for your feedback!');
    } else {
        alert('Please enter a review before submitting.');
    }
}



