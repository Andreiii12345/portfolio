// Welcome Button

function showMessage()
{
    alert(
        "Welcome to my portfolio website! Thank you for visiting."
    );
}


// About Me - Read More Button

function toggleAbout()
{
    let moreAbout =
    document.getElementById("moreAbout");

    if(moreAbout.style.display === "block")
    {
        moreAbout.style.display = "none";
    }
    else
    {
        moreAbout.style.display = "block";
    }
}


// Dynamic Changing Text

const titles = [

    "Information Technology Student",

    "Aspiring Web Developer",

    "Future Software Engineer",

    "Problem Solver",

    "Technology Enthusiast"

];

let index = 0;

setInterval(function()
{
    index++;

    if(index >= titles.length)
    {
        index = 0;
    }

    document.getElementById("changingText")
    .textContent = titles[index];

}, 2500);


// Contact Form Validation

document
.getElementById("contactForm")
.addEventListener("submit", function(event)
{
    event.preventDefault();

    let name =
    document.getElementById("name").value.trim();

    let email =
    document.getElementById("email").value.trim();

    let message =
    document.getElementById("message").value.trim();


    if(
        name === "" ||
        email === "" ||
        message === ""
    )
    {
        alert(
            "Please fill in all fields before submitting."
        );

        return;
    }


    if(
        !email.includes("@") ||
        !email.includes(".")
    )
    {
        alert(
            "Please enter a valid email address."
        );

        return;
    }


    alert(
        "Thank you, " +
        name +
        "! Your message has been sent successfully."
    );

    this.reset();

});


// Smooth Fade-In Animation

const sections =
document.querySelectorAll("section");

const observer =
new IntersectionObserver((entries) =>
{
    entries.forEach((entry) =>
    {
        if(entry.isIntersecting)
        {
            entry.target.classList.add("show");
        }
    });

},
{
    threshold:0.2
});

sections.forEach((section) =>
{
    observer.observe(section);
});