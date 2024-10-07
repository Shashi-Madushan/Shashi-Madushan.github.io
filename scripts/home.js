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


    const texts = ["Hello World!", "Welcome", "Enjoy Your Stay"];
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


    let slideIndex = 1;
    let autoScroll;

    function showSlides(n) {
        const slides = document.getElementsByClassName("carousel-images")[0].getElementsByTagName("img");
        const dots = document.getElementsByClassName("dot");

        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            dots[i].classList.remove("active-dot");
        }

        slides[slideIndex - 1].classList.add("active");
        dots[slideIndex - 1].classList.add("active-dot");
    }

    function plusSlides(n) {
        slideIndex += n;
        showSlides(slideIndex);
        resetAutoScroll();
    }

    function currentSlide(n) {
        slideIndex = n;
        showSlides(slideIndex);
        resetAutoScroll();
    }

    function autoSlide() {
        slideIndex++;
        showSlides(slideIndex);
    }

    function resetAutoScroll() {
        clearInterval(autoScroll);
        autoScroll = setInterval(autoSlide, 3000);
    }

    document.getElementById('carousel').addEventListener('mouseenter', () => {
        clearInterval(autoScroll);
    });

    document.getElementById('carousel').addEventListener('mouseleave', () => {
        resetAutoScroll();
    });

    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', () => {
            currentSlide(i + 1); // Adjust index to start from 1
        });
    }

    // Add event listeners for next and previous buttons
    document.querySelector('.prev').addEventListener('click', () => {
        plusSlides(-1); // Move to the previous slide
    });

    document.querySelector('.next').addEventListener('click', () => {
        plusSlides(1); // Move to the next slide
    });

    showSlides(slideIndex);
    autoScroll = setInterval(autoSlide, 5000);



    //////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////

    const blogs = [
        {
            photo: 'https://via.placeholder.com/400x200',
            title: 'Blog Post 1',
            description: 'This is a description of the first blog post. It gives an overview of the content.',
            link: 'http://example.com/blog1'
        },
        {
            photo: 'https://via.placeholder.com/400x200',
            title: 'Blog Post 2',
            description: 'This is a description of the second blog post. It gives an overview of the content.',
            link: 'http://example.com/blog2'
        },
        {
            photo: 'https://via.placeholder.com/400x200',
            title: 'Blog Post 3',
            description: 'This is a description of the third blog post. It gives an overview of the content.',
            link: 'http://example.com/blog3'
        },
        {
            photo: 'https://via.placeholder.com/400x200',
            title: 'Blog Post 4',
            description: 'This is a description of the fourth blog post. It gives an overview of the content.',
            link: 'http://example.com/blog4'
        },
        {
            photo: 'https://via.placeholder.com/400x200',
            title: 'Blog Post 3',
            description: 'This is a description of the third blog post. It gives an overview of the content.',
            link: 'http://example.com/blog3'
        }

    ];

    // Get the container element for the blog cards
    const blogContainer = document.getElementById('blog-card-container');

    // Iterate over the blog data and create cards dynamically
    blogs.forEach(blog => {
        const card = document.createElement('div');
        card.classList.add('blog-card');
        card.innerHTML = `
        <img src="${blog.photo}" alt="${blog.title}" class="blog-card-image">
        <div class="blog-card-content">
          <h2 class="blog-card-title">${blog.title}</h2>
          <p class="blog-card-description">${blog.description}</p>
          <a href="${blog.link}" class="blog-card-button" target="_blank">Read More</a>
        </div>
      `;
      blogContainer.appendChild(card);
    });







})();

