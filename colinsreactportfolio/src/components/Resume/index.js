 import React from 'react';
 
 function Resume() {
    return (
<>
 <section id="resume" class="justify-content-center">
      <div class="accordion expander mx-auto" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Presidents Club Closing Specialist
              </button>
            </h2>
          </div>
      
          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
                <ol class="text-left"><h6>November 2020 - May 2022</h6>
                    <li>Worked with mortgage bankers, clients, and title officers to successfully close loans.  Including scheduling, balancing, and coordination </li>
                    <li>Developed my communication, business, and sales skills</li>
                    <li>Constantly received achieves/exceeds expectations in monthly review and was promoted twice for excellent communication skills and being a subject-matter expert to our team.</li>    
                    </ol>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Manufacturing and Production Engineer
              </button>
            </h2>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
        <ol class="text-left"><h6>September 2018 - November 2020</h6> 
        <li>Quoted and estimated costs for hundreds of different parts for the medical industry</li>
        <li>Led the 3D printing design team and was the best engineering resource for Solidworks and ESPRIT</li>
        <li>Provided engineering expertise and training to machine operators to help them create more quality parts without high scrap counts</li>
        <li>Led a kaizen event that saved the company time and money</li>
        <li>Worked with many different materials including Titanium, Aluminum, Stainless, and Plastics</li>
        </ol>
            </div>
          </div>
        </div>
 
                <div class="card">
                    <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree"
                                aria-expanded="false" aria-controls="collapseThree">
                                Technical Marketing Engineer
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">
                            <ol class="text-left">
                                <h6>June 2018 - September 2018</h6>
                                <li>Provided technical expertise to customers looking to design a new product</li>
                                <li>Helped customers with issues relating to the products they received</li>
                                <li>Created engineering drawings for new customer products</li>
                                <li>Performed root cause analysis to determine quality issues occurring on the manufacturing line</li>
                            </ol>
                        </div>
                    </div>
                </div>
                    <div class="card">
                        <div class="card-header" id="headingFour">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour"
                                    aria-expanded="false" aria-controls="collapseFour">
                                    Risk Engineering Intern
                                </button>
                            </h2>
                        </div>
                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                            <div class="card-body">
                                <ol class="text-left">
                                    <h6>May 2017 - August 2017</h6>
                                    <li>Provided general technical support to the risk engineering team including: data analysis, computer coding and movie editing</li>
                                    <li>Delivered presentations to VPs and AVPs in the risk engineering department</li>
                                    <li>Developed risk assessment and analysis skills through training and customer visits</li>
                                 </ol>
                            </div>
                        </div>
                    </div>
      </div>
    </section>
    </>
    )}

    export default Resume;