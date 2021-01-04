import Projects from '../data/projects.js'

function renderHighlight(project) {
    //image, title, and description
    $('#featured-image').attr('src', project.image.src).attr('alt', project.image.alt);
    $('#featured-title').text(project.title);
    $('#featured-description').text(project.description);
    //technology
    $("#featured-tech-cont").empty();
    project.tech.forEach(tech => {
        const techItem = $('<span>').addClass('featured-tech bg-primary').text(tech)
        $("#featured-tech-cont").append(techItem);
    });
    //links
    $("#featured-repo-link").attr("href", project.repoLink);
    $("#featured-deployed-link").attr("href", project.deployedLink);
}

function renderCards(projects) {
    let delay = 0;
    projects.forEach((project, index) => {
        //create elements
        const card = $("<article>")
            .addClass('col-12 col-lg-3 project-card fade-rise')
            .attr("style", "width: 18rem;")
            .attr('data-index', index);
        const cardImg = $("<img>")
          .addClass("project-card-img grow")
          .attr("src", project.image.src)
          .attr("alt", project.image.alt)
        //create card with event listener
        card
            .append(cardImg)
            .on('click', (e) => {
                const index = $(e.currentTarget).attr('data-index')
                renderHighlight(Projects[index])
            })
        //append card and column
        setTimeout(() => {
            $("#projects-card-row").append(card);
        }, delay)
        delay += 250
    })
}

renderCards(Projects)

renderHighlight(Projects[0])