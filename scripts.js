document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('header a');
    const dynamicContent = document.getElementById('dynamic_content');

    function loadContent(file) {
        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok ${response.statusText}`);
                }
                return response.text();
            })
            .then(responseText => {
                // Clear the previous content
                dynamicContent.innerHTML = '';

                // Parse the response text
                const tempContainer = document.createElement('div');
                tempContainer.innerHTML = responseText;
                dynamicContent.appendChild(tempContainer);

                // Load external scripts
                const scripts = tempContainer.querySelectorAll('script[src]');
                scripts.forEach(script => {
                    const existingScript = document.querySelector(`script[src="${script.src}"]`);
                    if (existingScript) {
                        existingScript.remove();
                    }
                    const newScript = document.createElement('script');
                    newScript.src = `${script.src}?t=${new Date().getTime()}`;
                    newScript.onload = () => console.log(`Script loaded: ${script.src}`);
                    newScript.onerror = () => console.error(`Error loading script: ${script.src}`);
                    document.body.appendChild(newScript);
                });

                // Execute inline scripts
                const inlineScripts = tempContainer.querySelectorAll('script:not([src])');
                inlineScripts.forEach(script => {
                    try {
                        console.log('Executing inline script:', script.textContent);
                        (function() {
                            eval(script.textContent);
                        })();
                    } catch (e) {
                        console.error('Error executing inline script:', e);
                    }
                });
            })
            .catch(error => {
                console.error('Error loading content:', error);
                dynamicContent.innerHTML = '<p>Error loading content. Please try again later.</p>';
            });
    }

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior
            const file = this.getAttribute('data-file'); // Get the file name from data-file attribute
            loadContent(file);
        });
    });

    // Optionally, load the default content (e.g., home.html) from the subfolder
    const defaultFile = links[0].getAttribute('data-file');
    loadContent(defaultFile);
});
