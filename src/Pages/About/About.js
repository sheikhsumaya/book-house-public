import React from "react";

const About = () => {
  return (
    <div className="container">
      <section>
        <h1 className="mt-5 pt-5 text-center">About Us</h1>
        <hr className="border border-4 border-dark rounded-pill w-25 m-auto" />
        <div className="row g-5">
          <img className="col-md-5" src="https://i.ibb.co/sHYkWx5/about.webp" alt="" />
          <div className="col-md-7 mt-5 pt-5">
            <h2 className="text-center">
              WE ARE NOT JUST A TEAM
              <br />
              <span className="text-warning">WE ARE FAMILY</span>
            </h2>
            <hr className="border border-4 border-warning rounded-pill w-25 m-auto" />
            <h5 className="text-secondary text-wrap lh-base w-75 m-auto">
              Seasonality and support of our local community are central to our
              philosophy at Book House. We're passionate about your knowing and viewing,
              we inspire you to build a great mental and physical health, Not only become a good person but also becaming a great personality.
              Books are always great for you and your consumption minimises impact
              on the environment.
            </h5>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
