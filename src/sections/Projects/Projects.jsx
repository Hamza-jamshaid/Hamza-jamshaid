import React from "react";
import styles from "./ProjectsStyle.module.css";
import Disaster from "../../assets/Disaster relief (1).ico";
import foodDelivery from "../../assets/Fooddelivery (1).ico";
import GeminiClone from "../../assets/Gemini.png";
import sundownStudio from "../../assets/Sundown Studio (1).ico"
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Disaster}
          link="https://github.com/Hamza-jamshaid/Disaster-relief-coordination-tool"
          h3="Disaster Relief"
          p="Crisis Response Information System"
        />
        <ProjectCard
          src={foodDelivery}
          link="https://github.com/Hamza-jamshaid/Food-Delivery-App.git"
          h3="Tomato."
          p="Food delivery App"
        />
        <ProjectCard
          src={GeminiClone}
          link="https://github.com/Hamza-jamshaid/Google-gemini.git"
          h3="Gemini  Clone"
          p="Google Gemini App"
                />
        <ProjectCard
          src={sundownStudio}
          link="https://github.com/Hamza-jamshaid/Sundown-studio.git"
          h3="Sundown Studio"
          p="Sundown Studio portfolio App"
        />
      </div>
    </section>
  );
}

export default Projects;
