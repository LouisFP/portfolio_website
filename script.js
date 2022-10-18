(function borderChange () {

    let listLinks = document.querySelectorAll('li');

    function borderOn() {
        listLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.borderRight = '.19rem solid black';

        });
    });}

    function contactDown() {
        listLinks.forEach(link => {
            link.addEventListener('mousedown', () => {
                link.style.paddingLeft = '.8rem';
            });
        });
    }

    function contactUp() {
        listLinks.forEach(link => {
            link.addEventListener('mouseup', () => {
                link.style.paddingLeft = '0';
            });
        });
    }

    function borderDown() {
        listLinks.forEach(link => {
            link.addEventListener('mouseout', () => {
                link.style.borderRight = '';
                link.style.paddingLeft = '';
            });
        });
    }

    contactDown();
    contactUp();
    borderOn();
    borderDown();
})();

(function hoverOnPics() {
    
    let projectLinks = document.querySelectorAll('.project-container > .project');

    function hoverOver() {
        projectLinks.forEach(link => {
            link.addEventListener('mouseover', () => {
                link.style.backgroundColor = 'rgba(0,0,0,0.1)';
                link.style.boxShadow = '2px 2px 2px black';
            });
        });
    }

    function hoverOff() {
        projectLinks.forEach(link => {
            link.addEventListener('mouseout', () => {
                link.style.backgroundColor = '';
                link.style.boxShadow = '';
            })
        })
    }

    hoverOver();
    hoverOff();
})();

(function contactMe(){

    let contactLink = document.getElementById('contact-me');

    function contactChange() {
    contactLink.style.backgroundColor = 'rgba(0,0,0,0.3)';
        contactLink.style.color = 'white';
    }

    function contactReturn() {
        contactLink.style.backgroundColor = 'white';
        contactLink.style.color = 'black'
    }

    function contactClick() {
        contactLink.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }

    contactLink.addEventListener('mouseover',contactChange);
    contactLink.addEventListener('mouseout',contactReturn);
    contactLink.addEventListener('mousedown',contactClick);
    contactLink.addEventListener('mouseup',contactChange);
})();

(function rotatePic() {

    let skillsImage = document.getElementById('skills-image');
    let logoAlbum = ["./img/HTML5_Logo_256.png", "./img/css3-logo-png-transparent.png",
    "./img/git-logo-png-transparent.png", "./img/github-icon-1-logo-png-transparent.png", 
    "./img/javascript-logo-pack/javascript-logo-png-transparent.png"]
    let imageIndex = 0;
    let rotationIndex = 0;

    function changeImage() {
        if (rotationIndex <= 15) {
        skillsImage.setAttribute('src', logoAlbum[imageIndex])
        imageIndex++;
        if (imageIndex  >= logoAlbum.length) {
            imageIndex = 0;
        }
        rotationIndex++;
    }
    }

    setInterval(changeImage, 1000);

})();