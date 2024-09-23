(function () {
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
        },
        {
            photo: 'https://via.placeholder.com/400x200',
            title: 'Blog Post 4',
            description: 'This is a description of the fourth blog post. It gives an overview of the content.',
            link: 'http://example.com/blog4'
        }
    ];

    // Get the container element for the blog cards
    const container = document.getElementById('blog-card-container');

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
        container.appendChild(card);
    });
})();