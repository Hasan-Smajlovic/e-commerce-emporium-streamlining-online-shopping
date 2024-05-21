document.addEventListener("DOMContentLoaded", function () {
    const links = {
        "earrings-link": "earrings-container",
        "necklaces-link": "necklaces-container",
        "rings-link": "rings-container",
        "bracelets-link": "bracelets-container"
    };

    for (const [linkId, sectionId] of Object.entries(links)) {
        document.getElementById(linkId).addEventListener('click', function () {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});