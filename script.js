function replaceElement() {
    const tagline = document.getElementById('tagline');
    const banner = document.querySelector('.pfpic');

    const longMessage = `<h2>About</h2>I’m sorry to hear that your grandma passed away I
    actually am like obviously I’m gonna be upset about
    that innit yeah but hadiqah you know the only thing
    is no one can force me to be your mate or anything yeah
    and I don’t wanna be mates with you orite
    `;

    const originalText = "Hi, I'm Jack, of all trades.";

    const isLong = tagline.innerHTML.startsWith("<h2>About</h2>");

    if (!isLong) {
        tagline.innerHTML = longMessage;
        tagline.style.fontSize = "1rem";
        tagline.style.width = "19.5em";
        tagline.style.display = "block";
        
        


        pfpic.classList.add("expanded");
    } else {
        tagline.innerHTML = originalText;
        tagline.style.fontSize = "";
        tagline.style.width = "";

        pfpic.classList.remove("expanded");
    }
}