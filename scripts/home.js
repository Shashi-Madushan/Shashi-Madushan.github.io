(function () {


    const projects = [
        {
            photo: 'assets/36391518fdb85f1bfa77bec4f23b54ac.jpg',
            title: 'Project 1',
            description: 'Description for projeprojectprojectprojectprojectct 1',
            liveDemo: 'http://example.com/demo1',
            github: 'http://github.com/repo1'
        },
        {
            photo: 'assets/36391518fdb85f1bfa77bec4f23b54ac.jpg',
            title: 'Project 2',
            description: 'Descriptioprojectprojectprojectn for project 2',
            liveDemo: 'http://example.com/demo2',
            github: 'http://github.com/repo2'
        }
        ,
        {
            photo: 'assets/36391518fdb85f1bfa77bec4f23b54ac.jpg',
            title: 'Project 2',
            description: 'Description for project 2',
            liveDemo: 'http://example.com/demoprojectprojectprojectproject2',
            github: 'http://github.com/repo2'
        },
        {
            photo: 'assets/36391518fdb85f1bfa77bec4f23b54ac.jpg',
            title: 'Project 2 ',
            description: 'Description for projectprojectprojectprojectprojectprojectproject 2',
            liveDemo: 'http://example.com/demo2',
            github: 'http://github.com/repo2'
        }
        ,
        {
            photo: 'assets/36391518fdb85f1bfa77bec4f23b54ac.jpg',
            title: 'Project 2',
            description: 'Description for project 2',
            liveDemo: 'http://example.com/demo2',
            github: 'http://github.com/repo2'
        },
        {
            photo: 'assets/36391518fdb85f1bfa77bec4f23b54ac.jpg',
            title: 'Project 2 ',
            description: 'Description for projectprojectprojectprojectprojectprojectproject 2',
            liveDemo: 'http://example.com/demo2',
            github: 'http://github.com/repo2'
        }
        ,
        {
            photo: 'assets/36391518fdb85f1bfa77bec4f23b54ac.jpg',
            title: 'Project 2',
            description: 'Description for project 2',
            liveDemo: 'http://example.com/demo2',
            github: 'http://github.com/repo2'
        },
        {
            photo: 'assets/36391518fdb85f1bfa77bec4f23b54ac.jpg',
            title: 'Project 2 ',
            description: 'Description for projectprojectprojectprojectprojectprojectproject 2',
            liveDemo: 'http://example.com/demo2',
            github: 'http://github.com/repo2'
        }
        ,
        {
            photo: 'assets/36391518fdb85f1bfa77bec4f23b54ac.jpg',
            title: 'Project 2',
            description: 'Description for project 2',
            liveDemo: 'http://example.com/demo2',
            github: 'http://github.com/repo2'
        }

    ];

    // Get the container element
    const container = document.getElementById('card-container');

    // Iterate over the project data and create cards
    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${project.photo}" alt="Project Image" class="card__image">
        <div class="card__content">
            <p class="card__title">${project.title}</p>
            <p class="card__description">${project.description}</p>
            <div class="buttons">
            <a href="${project.liveDemo}" class="card__button" target="_blank">Live Demo</a>
            <a href="${project.github}" class="card__button secondary" target="_blank">Source Code</a>
            </div>
        </div>
    `;
        container.appendChild(card);
    });


    const texts = ["Hello World!", "Welcome to My Site", "Enjoy Your Stay"];
    const typingSpeed = 100; // typing speed in ms
    const erasingSpeed = 50; // erasing speed in ms
    const delayBetweenTexts = 1500; // delay before typing next text in ms
    const delayBeforeErasing = 1000; // delay before erasing text in ms
    let textIndex = 0;
    let charIndex = 0;
    let isErasing = false;

    function type() {
        const typingElement = document.getElementById("typing");
        const currentText = texts[textIndex];

        if (!isErasing) {
            typingElement.textContent += currentText.charAt(charIndex);
            charIndex++;
            if (charIndex < currentText.length) {
                setTimeout(type, typingSpeed);
            } else {
                isErasing = true;
                setTimeout(type, delayBeforeErasing);
            }
        } else {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex > 0) {
                setTimeout(type, erasingSpeed);
            } else {
                isErasing = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, delayBetweenTexts);
            }
        }
    }

    type(); // Start the typing animation

})();



