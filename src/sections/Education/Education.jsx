import styles from './EducationStyles.module.css';

function Education() {
  return (
    <section id="education" className={styles.container}>
      <h1 className="sectionTitle text-gradient">Education & Achievements</h1>
      
      <div className={styles.educationContainer}>
        <div className={`${styles.educationBox} animate-fadeInLeft hover-lift`}>
          <h2>Education</h2>
          <div className={styles.eduItem}>
            <h3>Bachelor of Technology in Computer Science</h3>
            <p>SYMBIOSIS INSTITUTE OF TECHNOLOGY, PUNE</p>
            <p>Specialization in Artificial Intelligence and Machine Learning</p>
            <p>2022 - 2026</p>
            <p>CGPA: 7.2</p>
          </div>
          
          <div className={styles.eduItem}>
            <h3>Higher Secondary(12th)</h3>
            <p>St. Theresa's Convent School, Karnal</p>
            <p>Year: 2021</p>
            <p>Percentage: 92%</p>
          </div>
        </div>

        <div className={styles.achievementsContainer}>
          <div className={`${styles.achievementsBox} animate-fadeInRight hover-lift`}>
            <h2>Co-curricular</h2>
            <ul className={styles.achievementsList}>
              <li>Successfully Completed Course on Web Development</li>
              <li>Successfully Completed Course on Machine Learning</li>
              <li>Published Research Paper on Universal Hardware Remote</li>
            </ul>
          </div>

          <div className={`${styles.achievementsBox} animate-fadeInRight hover-lift`}>
            <h2>Extra-curricular</h2>
            <ul className={styles.achievementsList}>
              <li>Member of AI Club</li>
              <li>Volunteered at College Tech Fest</li>
              <li>Volunteered at Reverb(Cultural Fest of SYMBIOSIS INSTITUTE OF COMPUTER STUDIES)</li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
