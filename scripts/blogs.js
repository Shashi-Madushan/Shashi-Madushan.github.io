(function () {
    let blogs = null;

    async function loadBlogs() {
        try {
            const res = await fetch('../jsons/blogs.json');
            const blogData = await res.json();

            blogs = blogData.reverse();
            renderBlogs();
        } catch (error) {
            console.log("Error loading blogs:", error);
        }
    }

    const container = document.getElementById('dynamic-blog-card-container');

    function renderBlogs() {
        // Clear existing content
        container.innerHTML = '';

        // Iterate over the blog data and create cards dynamically
        blogs.forEach(blog => {
            const card = document.createElement('div');
            card.classList.add('blog-card-container');

            card.innerHTML = `
                <div class="blog-card">
                <div class="blog-front-content" style="background: url('${blog.photo}') center/cover no-repeat;">
                    <p>Hover to Read</p>
                </div>
                <div class="blog-content">
                    <p class="blog-heading">${blog.title}</p>
                    <p>${blog.description}</p>
                </div>
                <button class="blog-card-button" onclick="window.open('${blog.link}', '_blank')">Read More</button>
                </div>
            `;

            container.appendChild(card);
        });
    }

    loadBlogs();
})();
