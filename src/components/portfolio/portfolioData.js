import Image1 from "../../assets/img/portfolio/contentlab1.png";
import Image2 from "../../assets/img/portfolio/ukiyo.png";
import Image3 from "../../assets/img/portfolio/addad1.png";
import Image4 from "../../assets/img/portfolio/ccifilo.png";

const PortfolioData = [
  {
    id: 1,
    type: "Website",
    image: Image1,
    tag: ["Javascript"],
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
    tag: ["Javascript"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "Ukiyo Yatching",
        language: "Javascript",
        preview: "https://ukiyodatca.com/",
        link: "https://ukiyodatca.com/",
      },
    ],
  },
  
  {
    id: 3,
    type: "Vehicle and Personnel Tracking App",
    image: Image4,
    tag: ["React-Native", "PHP",],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Vehicle and Personnel Tracking",
        client: "Coca Cola Co.",
        language: "React Native",
        preview: "https://play.google.com/store/search?q=ccifiloapp&c=apps",
        link: "https://play.google.com/store/search?q=ccifiloapp&c=apps",
      },
    ],
  },
  {
    id: 4,
    type: "Advertisement Platform",
    image: Image3,
    tag: ["Javascript","PHP"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Opet, Watsons,Tesco, File",
        language: " HTML, CSS, Javascript,React",
        preview: "https://addad.io/",
        link: "https://addad.io/",
      },
    ],
  },

];

export default PortfolioData;
