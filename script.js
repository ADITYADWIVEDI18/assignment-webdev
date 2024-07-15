$(document).ready(function() {
    // Handle image change on hover for our-project-right-box
    $('.our-project-right-box').click(function() {
        var imgSrc = $(this).data('img');
        $('#project-img').attr('src', imgSrc);
    }); 
$(document).ready(function() {
    // Handle image change on hover for our-project-right-box
    $('.our-project-right-box').hover(function() {
        var imgSrc = $(this).data('img');
        $('#project-img').attr('src', imgSrc);
    }); 
    
    
    // Expert Growth section: animated number counting
    $('.expert-growth-box-number').each(function() {
        var $this = $(this);
        var countTo = $this.text().replace('+', '').trim();
        $this.text('0');

        $({ countNum: 0 }).animate(
            { countNum: countTo },
            {
                duration: 2000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum) + ' +');
                },
                complete: function() {
                    $this.text(this.countNum + ' +');
                }
            }
        );
    });

    // Carousel
    const dots = document.querySelectorAll('.dot');
    const slider = document.querySelector('.slider');
    let currentIndex = 0;

    slider.addEventListener('scroll', () => {
        const index = Math.round(slider.scrollLeft / (slider.offsetWidth / 3));
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slider.scrollTo({ left: index * (slider.offsetWidth / 3), behavior: 'smooth' });
            dots.forEach(dot => dot.classList.remove('active'));
            dot.classList.add('active');
        });
    });

    // Show and hide contact form
    const showFormButton = $('#show-form-button');
    const formSection = $('#contact-form-section');

    showFormButton.click(function() {
        formSection.css('display', 'flex');
    });

    formSection.click(function(event) {
        if (event.target === this) {
            formSection.css('display', 'none');
        }
    });

    $("#ajaxForm").submit(function(e) {
        e.preventDefault();
        var action = $(this).attr("action");
        $.ajax({
            type: "POST",
            url: action,
            crossDomain: true,
            data: new FormData(this),
            dataType: "json",
            processData: false,
            contentType: false,
            headers: {
                "Accept": "application/json"
            }
        }).done(function() {
            alert('The form was submitted successfully.');
        }).fail(function() {
            alert('An error occurred! Please try again later.');
        });
    });
});
