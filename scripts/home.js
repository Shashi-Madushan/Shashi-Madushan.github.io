(function () {


    let projects = null;
    async function loadProjects() {
        try {
            const res = await fetch('../jsons/projects.json');
            const data = await res.json();
            if (data.length >= 4) {
                projects = data.slice(-4).reverse(); // Get the last 4 projects
            } else {
                projects = data; // Less than 4 projects, include all projects
            }
            renderProjects();
        } catch (error) {
            console.log("error loading latest projects", error);
        }

    }

    // Get the container element
    const container = document.getElementById('card-container');
    function renderProjects() {
        // Check if projects is not null before iterating
        if (projects) {
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
        } else {
            console.log("No projects to render");
        }

    }

    

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////

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

     // Start the typing animation


    let slideIndex = 1;
    let autoScroll;
    function renderSlides() {

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
    }

    


    //////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////

    let blogs = null;

    async function loadBolgs() {
        try {
            const res = await fetch('../jsons/blogs.json');
            const bolgData = await res.json();
            if (bolgData.length > 4) {
                blogs = bolgData.slice(-4).reverse();

            } else {
                blogs = bolgData.reverse();
            }
            renderBlogs()
        } catch (error) {
            console.log("errer loading bloogs (home )", error);
        }

    }

    const blogcontainer = document.getElementById('dynamic-blog-card-container');

    function renderBlogs() {
        // Clear existing content
        blogcontainer.innerHTML = '';

        // Iterate over the blog data and create cards dynamically
        blogs.forEach(blog => {
            const card = document.createElement('div');
            card.classList.add('blog-card-container');

            card.innerHTML = `
                <div class="blog-card">
                <div class="blog-front-content" style="background: url('${blog.photo}') center/cover no-repeat;">
                   <div class="front-text-container">
                    <p class="blog-heading">${blog.title}</p>
                    <p>Hover to Read</p>
                    </div>
                </div>
                <div class="blog-content">
                    <p class="blog-heading">${blog.title}</p>
                    <p>${blog.description}</p>
                </div>
                <button class="blog-card-button" onclick="window.open('${blog.link}', '_blank')">Read More</button>
                </div>
            `;

            blogcontainer.appendChild(card);
        });
    }

    type();
    renderSlides();
    loadProjects();
    loadBolgs();







})();

