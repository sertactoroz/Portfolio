import Image1 from "../../assets/img/portfolio/contentlab.png";
import Image2 from "../../assets/img/portfolio/ukiyo.png";
import Image3 from "../../assets/img/portfolio/addad.png";
// import Image4 from "../../assets/img/portfolio/project-4.jpg";
// import Image5 from "../../assets/img/portfolio/project-5.jpg";
// import Image6 from "../../assets/img/portfolio/project-6.jpg";
// import Image7 from "../../assets/img/portfolio/project-7.jpg";
// import Image8 from "../../assets/img/portfolio/project-8.jpg";
// import Image9 from "../../assets/img/portfolio/project-9.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "mockup project",
    image: Image1,
    tag: ["mockup"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Contentlab",
        language: "HTML, CSS, Javascript",
        preview: "https://contentlab.com.tr/",
        link: "https://contentlab.com.tr/",
      },
    ],
  },
  {
    id: 2,
    type: "Website",
    image: Image2,
    tag: ["video"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "video",
        client: "Ukiyo Yatching",
        language: "Javascript",
        preview: "https://ukiyodatca.com/",
        link: "https://ukiyodatca.com/",
      },
    ],
  },
  {
    id: 3,
    type: "Advertisement Platform",
    image: Image3,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Opet, Watsons,Tesco, File",
        language: " HTML, CSS, Javascript",
        preview: "https://addad.io/",
        link: "https://addad.io/",
      },
    ],
  },
  // {
  //   id: 4,
  //   type: "local project",
  //   image: Image4,
  //   tag: ["logo", "video"],
  //   delayAnimation: "0",
  //   modalDetails: [
  //     {
  //       project: "video",
  //       client: "Videohive",
  //       language: " Adobe After Effects",
  //       preview: "www.videohive.net",
  //       link: "https://www.videohive.net",
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   type: "saas project",
  //   image: Image5,
  //   tag: ["logo"],
  //   delayAnimation: "100",
  //   modalDetails: [
  //     {
  //       project: "Web Application",
  //       client: "Themeforest",
  //       language: "HTML, CSS, ReactJS",
  //       preview: "www.envato.com",
  //       link: "https://themeforest.net/item/deski-saas-software-react-template/33799794",
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   type: "mockup project",
  //   image: Image6,
  //   tag: ["logo", "mockup"],
  //   delayAnimation: "200",
  //   modalDetails: [
  //     {
  //       project: "Website",
  //       client: "Themeforest",
  //       language: "HTML, CSS, Javascript",
  //       preview: "www.pexels.com",
  //       link: "https://www.pexels.com",
  //     },
  //   ],
  // },
  // {
  //   id: 7,
  //   type: "facebook project",
  //   image: Image7,
  //   tag: ["logo"],
  //   delayAnimation: "0",
  //   modalDetails: [
  //     {
  //       project: "Website",
  //       client: "Facebook",
  //       language: "HTML, CSS, Javascript",
  //       preview: "www.facebook.com",
  //       link: "https://www.facebook.com/ibthemes",
  //     },
  //   ],
  // },
  // {
  //   id: 8,
  //   type: "dribble project",
  //   image: Image8,
  //   tag: ["graphic design"],
  //   delayAnimation: "100",
  //   modalDetails: [
  //     {
  //       project: "Website",
  //       client: "Dribbble",
  //       language: "HTML, CSS, Javascript",
  //       preview: "www.dribbble.com",
  //       link: "https://dribbble.com/ib-themes",
  //     },
  //   ],
  // },
  // {
  //   id: 9,
  //   type: "behence project",
  //   image: Image9,
  //   tag: ["graphic design", "mockup"],
  //   delayAnimation: "200",
  //   modalDetails: [
  //     {
  //       project: "Website",
  //       client: "Behance",
  //       language: "HTML, CSS, Javascript",
  //       preview: "www.behance.com",
  //       link: "https://www.behance.net/ib-themes",
  //     },
  //   ],
  // },
];

export default PortfolioData;
