function replaceAbout() {
    const tagline = document.getElementById('tagline');
    const banner = document.querySelector('.pfpic');

    const longMessage = `<h2>About</h2>I don't always know what I am doing, but when I do, I know I won't for long.<br>
    Student studying Computing Science.<br>
    Striving to strike the balance between creative expression and systematic problem-solving.
    `;

    const originalText = "Hi, I'm Jack, of all trades.";

    const isLong = tagline.innerHTML.startsWith("<h2>About</h2>");

    if (!isLong) {
        tagline.innerHTML = longMessage;
        tagline.style.fontSize = "1rem";
        tagline.style.width = "19.5em";
        tagline.style.display = "block";
        
        

        tagline.classList.add("small");
        pfpic.classList.add("expanded");
    } else {
        tagline.innerHTML = originalText;
        tagline.style.fontSize = "";
        tagline.style.width = "";
       
        
        tagline.classList.remove("small");
        pfpic.classList.remove("expanded");
    }
}


function replaceContact() {
    const tagline = document.getElementById('tagline');
    const banner = document.querySelector('.pfpic');

    const socials = `<h2>Contact</h2>Here are some social media links ho`;

    const originalText = "Hi, I'm Jack, of all trades.";

    const linksActive = tagline.innerHTML.startsWith("<h2>Contact</h2>Here");

    if (!linksActive) {
        tagline.innerHTML = socials;
        tagline.style.fontSize = "1rem";
        tagline.style.width = "19.5em";
        tagline.style.display = "block";
        
        


        pfpic.classList.add("expanded");
        tagline.classList.add("small");
        
    } else {
        tagline.innerHTML = originalText;
        tagline.style.fontSize = "";
        tagline.style.width = "";
       
        
        pfpic.classList.remove("expanded");
        tagline.classList.remove("small");
    }
}

function addAnimation() {
    document.getElementById('about').addEventListener("click", () => {
    const tag = document.getElementById('tagline');
    
    tag.classList.add("animate");
});

}