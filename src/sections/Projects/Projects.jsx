import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle text-gradient">Projects</h1>
      <div className={`${styles.projectsContainer} animate-fadeInUp`}>
        <div className="hover-scale">
          <ProjectCard
            src={viberr}
            link="https://github.com/pranshuguptaa/GAME-SELECTOR"
            h3="Game Selector"
            p="Gaming Website"
          />
        </div>
        <div className="hover-scale">
          <ProjectCard
            src={freshBurger}
            link="https://github.com/pranshuguptaa/LIBRARY_MANAGEMENT"
            h3="Library Management"
            p="Library Management System"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
