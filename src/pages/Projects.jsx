import { useState, useEffect } from "react";
import {
  FaGithub,
  FaYoutube,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";
import "../App.css";

const projects = [
  {
    title: "Student Performance Predictor",
    description:
      "A machine learning web application that predicts student performance using academic and behavioral data.",
    team: "Sonakshi, Souyma, Aurindom",
    github:
      "https://github.com/sonakshikumar/Student-Performance-Predictor.git",
    youtube: "#",
  },
  {
    title: "Tech News Aggregator",
    description:
      "A web application that aggregates the latest news from various technology sources.",
    team: "Zia, Shaurya",
    github: "#",
    youtube: "#",
  },
  {
    title: "To Do List App",
    description:
      "A simple and intuitive to-do list application for managing daily tasks.",
    team: "X, Y, Z",
    github: "#",
    youtube: "#",
  },
  {
    title: "Resume Screener",
    description:
      "An application that automates the resume screening process for recruiters.",
    team: "X, Y, Z",
    github: "#",
    youtube: "#",
  },
  {
    title: "Handwritten Digit Recognizer",
    description:
      "A machine learning project that recognizes handwritten digits using image processing techniques.",
    team: "Jivansh",
    github: "#",
    youtube: "#",
  },
  {
    seeMore: true,
    github: "https://github.com/SuhaniSharma1309",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getPosition = (index) => {
    const diff = index - activeIndex;
    const total = projects.length;

    if (diff === 0) return "card active";

    if (diff === -1 || diff === total - 1) return "card left1";
    if (diff === -2 || diff === total - 2) return "card left2";

    if (diff === 1 || diff === -(total - 1)) return "card right1";
    if (diff === 2 || diff === -(total - 2)) return "card right2";

    return "card hidden";
  };

  return (
    <section className="projects-section">
      <h1 className="projects-heading">
        Featured <span>Projects</span>
      </h1>

      {/* Navigation Arrows */}
      <div className="carousel-nav">
        <button className="nav-btn left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <button className="nav-btn right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>

      <div className="carousel">
        {projects.map((project, index) => (
          <div key={index} className={getPosition(index)}>
            {project.seeMore ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="see-more-card"
              >
                <div className="see-more-content">
                  <p>See All Projects</p>
                  <FaArrowRight className="see-arrow" />
                </div>
              </a>
            ) : (
              <>
                {/* Abstract visual instead of image */}
                <div className="card-visual"></div>

                <div className="card-content">
                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <p className="project-team">By: {project.team}</p>

                  <div className="icons">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <FaGithub />
                    </a>

                    <a href={project.youtube} target="_blank" rel="noreferrer">
                      <FaYoutube />
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;