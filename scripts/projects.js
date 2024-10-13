(function () {

    let projects = null;
    async function loadProjects() {
        try {
            const res = await fetch('../jsons/projects.json');
            const data = await res.json();
           
                projects = data.reverse(); // Less than 4 projects, include all projects
            
            renderProjects();
        } catch (error) {
            console.log("error loading latest projects", error);
        }

    }
    // Get the container element
    const container = document.getElementById('card-container');

    function renderProjects() {
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
    }

    loadProjects();

})();