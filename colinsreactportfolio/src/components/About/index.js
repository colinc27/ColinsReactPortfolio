import React from "react";
import me from "../../assets/img/prof.jpg";

function About() {
  return (
    <body class="bg-primary col-12 container text-center">
      <div class="container rounded">
        <div class="row">
          <div class="d-flex flex-row">
            <div class="my-auto">
              <img class="rounded-circle prof p-2" src={me} alt="" />
              <div class="m-2 bg-white border-dark intro">
                <h4 class="item-name text-dark">Introduction</h4>
                <p class="item-type text-dark">
                  Dedicated professional looking to start my career in software
                  development/engineering. I have proven technical, business,
                  communication, and analytical skills. Utilizing a BS in
                  Mechanical Engineering and completing a coding bootcamp have
                  taught me a great deal in solving the challenges of becoming a
                  software engineer. I am a problem-solver by nature, and I
                  believe that I would be a great asset for your company and a
                  great addition to any team.
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
