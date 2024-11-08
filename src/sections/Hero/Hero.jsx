import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
import { useEffect } from 'react';
import { addScrollAnimation } from '../../utils/scrollAnimation';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  useEffect(() => {
    addScrollAnimation();
  }, []);

  return (
    <section id="hero" className={`${styles.container} animate-fadeInUp`}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={`${styles.hero} hover-scale`}
          alt="Profile picture"
        />
        <img
          className={`${styles.colorMode} button-hover`}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={`${styles.info} scroll-animate`}>
        <h1 className="text-gradient">
          Pranshu
          <br />
          Gupta
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          
          <a href="https://github.com/pranshuguptaa" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/pranshu-gupta-3166372b4/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
