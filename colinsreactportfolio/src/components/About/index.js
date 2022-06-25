import React from 'react';
//import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        Dedicated professional looking to get back into engineering after developing my business and communication skills at Rocket Mortgage. I am truly a jack of all trades and can fill any role. I have a great understanding of a wide field of disciplines making me someone that can complete any challenge placed in front of me. I can learn anything in a very short amount of time and love a challenge. I think that my skills, knowledge, and hard work would be a great asset to your business as an engineer and a team member.
        </p>
      </div>
    </section>
  );
}

export default About;