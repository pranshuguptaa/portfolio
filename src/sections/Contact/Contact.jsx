import styles from './ContactStyles.module.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    
    // Open default email client
    window.location.href = `mailto:${email}?subject=Portfolio Contact&body=Name: ${formData.get('name')}%0D%0A%0D%0AMessage: ${formData.get('message')}`;
    
    // Clear the form
    e.target.reset();
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle text-gradient">Contact</h1>
      <form onSubmit={handleSubmit} className="animate-scaleIn">
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn button-hover" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
