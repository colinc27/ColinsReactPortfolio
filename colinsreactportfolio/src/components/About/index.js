import React from 'react';
import me from '../../assets/img/prof.jpg'

function About() {
  return (
    <body class="bg-primary col-12 container text-center">
        <div class="container rounded">
            <div class="row">
                        <div class="d-flex flex-row">
                            <div class="my-auto">
                                <img class="rounded-circle prof p-2" src={me} alt=""/>
                            <div class="m-2 bg-white border-dark intro">
                                <h4 class="item-name text-dark">Introduction</h4>
                                <p class="item-type text-dark">Dedicated professional looking to get back into engineering after developing my business and communication skills at Rocket Mortgage. I am truly a jack of all trades and can fill any role. I have a great understanding of a wide field of disciplines making me someone that can complete any challenge placed in front of me. I can learn anything in a very short amount of time and love a challenge. I think that my skills, knowledge, and hard work would be a great asset to your business as an engineer and a team member.
                                </p>
                            </div>
                        </div>
            </div>
            </div>
            </div>
        </body>
  );
}

export default About;
