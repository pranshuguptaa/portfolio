import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={`${styles.container} animate-fadeInUp`}>
      <p className="text-gradient">
        &copy; 2024 Pranshu Gupta. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
