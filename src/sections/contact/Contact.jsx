import "./contact.css";
import data from "./data";

const contact = () => {
  return (
    <section id="contact" className="container contact__container">
      <h3 data-aos='fade-down' data-aos-delay='400'>Get In Touch</h3>
      <p data-aos='fade-down' data-aos-delay='500'>Shoot me a message via any of the social account below!</p>

      <div className="contact__content" data-aos='fade-up' data-aos-delay='600'>
        {data.map((item) => (
          <li key={item.id} className="contact__card">
            <div className="contact__icon">{item.icon}</div>
            <div className="contact__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </li>
        ))}
      </div>
    </section>
  );
};

export default contact;
