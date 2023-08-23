import Card from '../../components/Card';
import './services.css';
import data from './data';

const Services = () => {
  return (
    <section id='services'>
      <h2 data-aos='fade-down' data-aos-delay='400'>Services</h2>
      <p data-aos='fade-down' data-aos-delay='500'>I give you the best in all the services below</p>
      <div className='container services__container' data-aos='fade-up' data-aos-delay='600'>
        {
          data.map(item => (<Card key={item.id} className="service__light">
            <div className='service__icon'>{item.icon}</div>
            <div className='service__details'>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
            </div>
          </Card>)
        )}
      </div>
    </section>
  )
}

export default Services