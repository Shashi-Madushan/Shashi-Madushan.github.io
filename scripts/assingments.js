// Wrap the code in an IIFE to avoid polluting the global scope
(function() {
    let assignments = null;

    // Fetch JSON data using async/await for cleaner code
    async function fetchAssignments() {
        try {
            const response = await fetch('./jsons/assignments.json');
            const data = await response.json();
            assignments = data;
            loadAssignments();
        } catch (error) {
            console.error('Error fetching the JSON file:', error);
        }
    }

    function loadAssignments() {
        const assignmentList = document.getElementById('assignment-list');
        assignments.forEach(assignment => {
            const assignmentDiv = document.createElement('div');
            assignmentDiv.classList.add('assignment-card');
    
            // Title
            const title = document.createElement('h2');
            title.innerText = assignment.title;
            assignmentDiv.appendChild(title);
    
            // Create list of cases if present
            if (assignment.cases && assignment.cases.length > 0) {
                const caseList = document.createElement('ul');
                caseList.classList.add('assignment-case-list');
    
                assignment.cases.forEach(caseItem => {
                    const caseListItem = document.createElement('li');
                    const caseButton = document.createElement('button');
                    caseButton.innerText = caseItem.caseTitle;
                    caseButton.classList.add('assignment-button');
                    caseButton.addEventListener('click', () => openPopup(caseItem.url));
                    caseListItem.appendChild(caseButton);
                    caseList.appendChild(caseListItem);
                });
    
                assignmentDiv.appendChild(caseList);
            } else {
                // If no cases, add a single view button
                const popupButton = document.createElement('button');
                popupButton.innerText = assignment.description;
                popupButton.classList.add('assignment-button');
                popupButton.addEventListener('click', () => openPopup(assignment.url));
                assignmentDiv.appendChild(popupButton);
            }
    
            assignmentList.appendChild(assignmentDiv);
        });
    }
    
    function openPopup(url) {
        document.getElementById('assignment-popup-frame').src = url;
        document.getElementById('assignment-popup').style.display = 'flex';
    }
    
    function closePopup() {
        document.getElementById('assignment-popup').style.display = 'none';
        document.getElementById('assignment-popup-frame').src = '';
    }
    
    // Close popup event listener
    document.querySelector('.assignment-close-btn').addEventListener('click', closePopup);
    
    fetchAssignments();
    
})();