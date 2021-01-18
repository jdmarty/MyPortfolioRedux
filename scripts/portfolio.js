import Projects from '../data/projects.js'

$(document).ready(() => {
    function renderHighlight(project) {
      //add fade in fast class
      $("#featured").addClass("fade-in-fast");
      //image, title, and description
      $("#featured-image")
        .attr("src", project.image.src)
        .attr("alt", project.image.alt);
      $("#featured-title").text(project.title);
      $("#featured-description").text(project.description);
      if (project.descriptionCont) {
        $("#featured-description-cont").text(project.descriptionCont);
      } else {
        $("#featured-description-cont").empty();
      }
      //technology
      $("#featured-tech-cont").empty();
      project.tech.forEach((tech) => {
        const techItem = $(tech).addClass("featured-tech");
        $("#featured-tech-cont").append(techItem);
      });
      //links
      $("#featured-repo-link").attr("href", project.repoLink);
      $("#featured-deployed-link").attr("href", project.deployedLink);
      //remove fade in class
      setTimeout(() => $("#featured").removeClass("fade-in-fast"), 1000);
    }

    function renderCards(projects) {
      let delay = 0;
      projects.forEach((project, index) => {
        //create elements
        const card = $("<article>")
          .addClass("col-12 col-lg-3 project-card fade-rise")
          .attr("style", "width: 18rem;")
          .attr("data-index", index);
        const cardImg = $("<img>")
          .addClass("project-card-img grow")
          .attr("src", project.image.src)
          .attr("alt", project.image.alt);
        //create card with event listener
        card.append(cardImg).on("click", (e) => {
          const index = $(e.currentTarget).attr("data-index");
          renderHighlight(Projects[index]);
        });
        //append card and column
        setTimeout(() => {
          $("#projects-card-row").append(card);
        }, delay);
        delay += 250;
      });
    }

    renderCards(Projects);
    renderHighlight(Projects[0]);
})
