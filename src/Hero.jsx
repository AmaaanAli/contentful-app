import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
            numquam. Aliquid fugit iusto odio iste dolores. Eveniet, nobis quis?
            Maxime architecto, soluta sit dolore ipsam inventore similique modi
            quidem ex.
          </p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="woman and the browser" className='img'/>
        </div>
      </div>
    </section>
  );
}
export default Hero