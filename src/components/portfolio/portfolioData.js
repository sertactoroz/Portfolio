import Image1 from "../../assets/img/portfolio/balance.png";
import Image2 from "../../assets/img/portfolio/addad1.png";
import Image3 from "../../assets/img/portfolio/contentlab1.png";
import Image4 from "../../assets/img/portfolio/ukiyo2.png";
import Image5 from "../../assets/img/portfolio/ccifilo1.png";

const PortfolioData = [
  
  {
    id: 1,
    type: "Cryptocurrency Platform",
    image: Image1,
    tag: ["React","Java"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Development of Trade/Spot Module",
        client: "Balance Network Exchange",
        language: "React,Java",
        preview: "https://www.balancenetwork.io/trade/spot/",
        link: "https://www.balancenetwork.io/trade/spot/",
      },
    ],
  },
  {
    id: 2,
    type: "Advertisement Platform",
    image: Image2,
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
  {
    id: 3,
    type: "Website",
    image: Image3,
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
    id: 4,
    type: "Website",
    image: Image4,
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
    id: 5,
    type: "Vehicle and Personnel Tracking App",
    image: Image5,
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
];

export default PortfolioData;
