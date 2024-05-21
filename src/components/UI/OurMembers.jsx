import React from "react";
import "../../styles/our-member.css";
import { Link } from "react-router-dom";
import ava1 from "../../assets/all-images/ava-1.jpg";
import ava2 from "../../assets/all-images/ava-2.jpg";
import ava3 from "../../assets/all-images/ava-3.jpg";
import ava4 from "../../assets/all-images/ava-4.jpg";
import ava5 from "../../assets/all-images/ava-5.jpg";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const OUR__MEMBERS = [
  {
    name: "Yassin Al-Farwan",
    experience: "Software Engineer",
    github: "https://github.com/Yassin-010",
    linkedinUrl: "https://www.linkedin.com/in/yassin-al-farwan-9010b9266/",
    imgUrl: ava1,
  },

  {
    name: "Mohammad Al-Farwan",
    experience: "Software Engineer",
    github: "https://github.com/MohammadFarwan",
    linkedinUrl: "https://www.linkedin.com/in/mohammad-farwan",
    imgUrl: ava2,
  },

  {
    name: "Mustapha Al-Huneity",
    experience: "Software Engineer",
    github: "https://github.com/Stevinski-996",
    linkedinUrl: "https://www.linkedin.com/in/mustapha-al-huneity",
    imgUrl: ava3,
  },

  {
    name: "Mustapha Mousa",
    experience: "Software Engineer",
    github: "https://github.com/mustafa-raed123",
    linkedinUrl: "#",
    imgUrl: ava4,
  },
  {
    name: "Nour Al-Samawi",
    experience: "Software Engineer",
    github: "https://github.com/NourAlSamawi",
    linkedinUrl: "#",
    imgUrl: ava5,
  },
];


const OurMembers = () => {


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <div className="our-members">
      {OUR__MEMBERS.map((item, index) => (
        <div className="member" key={index}>
          <div className="singlemember" data-aos="flip-left">
            <div className="singlemember-img">
              <img src={item.imgUrl} alt={item.name} className="w-100" />

              <div className="singlemember-social">


                <Link to={item.github}>
                  <i className="ri-github-line"></i>
                </Link>
                <Link to={item.linkedinUrl}>
                  <i className="ri-linkedin-line"></i>
                </Link>

              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="sectiondescription text-center">
              {item.experience}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurMembers;

