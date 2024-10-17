var anim = gsap.timeline();

anim.from('.hero_content',{
    opacity :0,
    duration:1,
    x:-500,
});
anim.from('.hero_img',{
    opacity :0,
    duration:1.5,
    scale:0.7,
    x:500,
});
anim.from('.navbar',{
    opacity :0,
    duration:1,
    y:-100,
});
anim.from('.bottom_container',{
    opacity :0,
    duration:1.2,
    scale:0.7,
    y:100,
})


// rent container part 

// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get all rent boxes
    const rentBoxes = document.querySelectorAll('.rent_box');

    // Function to check if the element is in the viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Add scroll event listener
    window.addEventListener('scroll', () => {
        rentBoxes.forEach((box) => {
            if (isInViewport(box)) {
                // Add animation class when the box is in the viewport
                box.classList.add('animate-on-scroll');
            } else {
                // Optionally, remove the class if you want the animation to replay when scrolling up
                box.classList.remove('animate-on-scroll');
            }
        });
    });

    // Trigger scroll event on page load to check visibility
    window.dispatchEvent(new Event('scroll'));
});


// intro part
// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the intro content and image elements
    const introElements = document.querySelectorAll('.intro_container, .intro_img');

    // Function to check if the element is in the viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    };
    // Add scroll event listener
    window.addEventListener('scroll', () => {
        introElements.forEach((element) => {
            if (isInViewport(element)) {
                // Add animation class when the element is in the viewport
                element.classList.add('animate-on-scroll');
            }
        });
    });
    // Trigger scroll event on page load to check visibility
    window.dispatchEvent(new Event('scroll'));
});



// term &conditon
window.addEventListener('load', () => {
    const termContainer = document.querySelector('.term_container');
    termContainer.classList.add('fade-in');
});




// SHOW NAVBAR
let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu');

bar.addEventListener('click', () =>{
    menu.classList.toggle('show_menu');
});


