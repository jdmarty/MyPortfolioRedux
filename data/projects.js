const codeQuiz = {
  title: "Code Quiz",
  image: {
    src: "assets/Images/codeQuiz.PNG",
    alt: "Code Quiz",
  },
  description:
    "Quiz app that prompts the user to answer web-development related questions and maintains a high score board.",
  tech: [
    '<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>',
    '<img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>',
    '	<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>',
    '<img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/>',
    '<img alt="jQuery" src="https://img.shields.io/badge/jquery%20-%230769AD.svg?&style=for-the-badge&logo=jquery&logoColor=white"/>',
  ],
  repoLink: "https://github.com/jdmarty/codeQuiz",
  deployedLink: "https://jdmarty.github.io/codeQuiz/",
};

const nutriSpot = {
  title: "NutriSpot",
  image: {
    src: "assets/Images/nutriSpot.PNG",
    alt: "Nutrispot",
  },
  description:
    "Application that uses the Spoonacular and Yelp API to combine a healthy recipe search and a search for local restaurants",
  tech: [
    '<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>',
    '<img alt="jQuery" src="https://img.shields.io/badge/jquery%20-%230769AD.svg?&style=for-the-badge&logo=jquery&logoColor=white"/>',
    '	<img alt="Heroku" src="https://img.shields.io/badge/heroku%20-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white"/>',
    '<span class="featured-tech-span yelp"><i class="fab fa-yelp mx-2"></i>Yelp API</span>',
  ],
  repoLink: "https://github.com/jdmarty/scoop",
  deployedLink: "https://jdmarty.github.io/scoop/",
};

const passwordGenerator = {
  title: "Password Generator",
  image: {
    src: "assets/Images/PasswordGenerator.PNG",
    alt: "Password Generator",
  },
  description:
    "Simple site that prompts you to enter password criteria and generates a scrambled password that meets those criteria",
  tech: ["HTML", "CSS", "JavaScript"],
  repoLink: "https://github.com/jdmarty/scrambledPasswordGenerator",
  deployedLink: "https://jdmarty.github.io/scrambledPasswordGenerator/",
};

const jammming = {
  title: "Jammming with JD",
  image: {
    src: "./assets/Images/jammming_codecademy.png",
    alt: "Jamming with JD",
  },
  description:
    "An app built with React and the Spotify API that allows users to search the Spotify library and create new playlists.",
  tech: [
    '<img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>',
    '<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>',
    '<img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>',
    '<span class="featured-tech-span spotify"><i class="fab fa-spotify mx-2 spotify"></i>Spotify API</span>',
  ],
  repoLink: "https://github.com/jdmarty/jammming/",
  deployedLink: "http://jammmingwithjd.surge.sh/",
};

const dreamTeam = {
  title: "Dream Team",
  image: {
    src: "./assets/Images/DreamTeam.PNG",
    alt: "Dream Team",
  },
  description:
    "Full stack application that allows users to create teams of their favorite NBA players and run a simulated game between them.",
  descriptionCont:
    "Sample Account | email: guest@gmail.com | password: P@ssword12345",
  tech: [
    '<img alt="MySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?&style=for-the-badge&logo=mysql&logoColor=white"/>',
    '<img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>',
    '<img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/>',
    '<img alt="Heroku" src="https://img.shields.io/badge/heroku%20-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white"/>',
    '<span class="featured-tech-span handlebars">Handlebars</span>',
  ],
  repoLink: "https://github.com/jdmarty/DreamTeamRedux",
  deployedLink: "https://dreamteamsim.herokuapp.com/login",
};



const Projects = [dreamTeam, nutriSpot, codeQuiz, jammming]

export default Projects