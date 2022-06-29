import React from 'react';
import readImg from '../../assets/img/WebDev/read.png';
import studentImg from '../../assets/img/WebDev/student.png';
import stockImg from '../../assets/img/WebDev/stock.png'
import noteImg from '../../assets/img/WebDev/note.png'
import deskImg from '../../assets/img/deskcaddy.png';
import dartImg from '../../assets/img/Dartboard.png';
import dc1 from '../../assets/img/dc/dc1.jpg';
import dc2 from '../../assets/img/dc/dc2.jpg';
import dc3 from '../../assets/img/dc/dc3.jpg';
import coaster from '../../assets/img/holder.png';
import coast1 from '../../assets/img/coast/coast1.jpg';
import coast2 from '../../assets/img/coast/coast2.jpg';
import coast3 from '../../assets/img/coast/coast3.jpg';
import chess from '../../assets/img/chess/chess1.jpg';
import chess2 from '../../assets/img/chess/chess2.jpg';
import chess3 from '../../assets/img/chess/chess3.jpg';

const Portfolio=() => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="./styles_proj.css" />
        <title>Web Development</title>
      </head>
      <body class="bg-dark">
        <div class="row col-12">
          <div class="card mx-auto my-3">
            <img src={stockImg} class="card-img-top" alt="website"/>
            <div class="card-body">
              <h5 class="card-title">Stock/Crypto Watcher</h5>
              <p class="card-text">
                This was a group project where we developed a website where you can
                track crypto and stock data. While it may not be the best website in
                the world it was my first full website. I used JS, HTML, CSS, and
                third party APIS
              </p>
              <a
                href="https://github.com/Blingbi/Stock-CryptoWatcher"
                class="btn btn-primary"
                >GitHub Repository</a
              >
              <a
                href="https://blingbi.github.io/Stock-CryptoWatcher/"
                class="btn btn-success"
                >Deployed website</a
              >
            </div>
          </div>
          <div class="card mx-auto my-3">
          <img src={studentImg} class="card-img-top" alt=" website"/>
            <div class="card-body">
              <h5 class="card-title">Alphabet Testing for first graders</h5>
              <p class="card-text">
                This was a group project where we developed a working app where you
                can make a teacher or student login. The students take a test which
                evaluates their understanding of the alphabet. The teachers are
                taken to a dashboard where they can see their student's score. This
                project uses SQL, Node, JS, HTML, CSS, JS and more!
              </p>
              <a
                href="https://github.com/tparlmer/SJDA_Alphabet_Test"
                class="btn btn-primary"
                >GitHub Repository</a
              >
              <a
                href="https://ancient-brook-00685.herokuapp.com/"
                class="btn btn-success"
                >Deployed app</a
              >
            </div>
          </div>
    
          <div class="card mx-auto my-3">
          <img src={noteImg} class="card-img-top" alt=" website"/>
            <div class="card-body">
              <h5 class="card-title">Note Taking Application</h5>
              <p class="card-text">
                This app allows the user to take and save notes. It will save the
                notes locally and will be available upon return to the app.
              </p>
              <a
                href="https://github.com/colinc27/NotoriusNoteTaker"
                class="btn btn-primary"
                >GitHub Repository</a
              >
              <a
                href="https://notoriusnotetaker.herokuapp.com/"
                class="btn btn-success"
                >Deployed app</a
              >
            </div>
          </div>
    
          <div class="card mx-auto my-3">
          <img src={readImg} class="card-img-top" alt=" website"/>
            <div class="card-body">
              <h5 class="card-title">README Generator</h5>
              <p class="card-text">
                This app allows the user to use console commands to create a custom
                professional readme MD file without all the MD file coding. Checkout
                the video link for an explanation of how it works.
              </p>
              <a
                href="https://github.com/colinc27/ColinsRidiculousREADMEGenerator"
                class="btn btn-primary"
                >GitHub Repository</a
              >
              <a
                href="https://drive.google.com/file/d/1PC59JjUI9JoKYBbl-qXrM-k0e0jnNw8k/view"
                class="btn btn-success"
                >Video</a
              >
            </div>
          </div>
                {/* 3D Printing */}
          <div class="card mx-auto my-3">
        <img src={dartImg} class="card-img-top" alt="Dartholder" />
        <div class="card-body">
          <h5 class="card-title">Dart Holder</h5>
          <p class="card-text">
            For this project, I designed a dart holder that has some cool
            functionality to it. The base is separate from the body and sits on
            a bearing that allows the entire body to spin. It also has a hidden
            compartment in the middle that holds the tips, tools, and flights.
          </p>
          <a
            href="https://cad.onshape.com/documents/35790471ada578959ad0d66e/w/953455c8daa1fcd5d2323a77/e/51910844a8593db0cd72e0ae?renderMode=0&uiState=628f886f8c541f74a5109581"
            class="btn btn-primary"
            >OnShape Link</a
          >
        </div>
      </div>
      <div class="card mx-auto my-3">
        <img src={deskImg} class="card-img-top" alt="des"  />
        <div class="card-body">
          <h5 class="card-title">Desk Caddy</h5>
          <p class="card-text">
            For this project, I designed a desk caddy that allows the user to
            store their mouse and 2 usb drives. It uses gravity to sit attached
            to the table and can be picked up and moved very easily.
          </p>
          <a
            href="https://cad.onshape.com/documents/70c9dcff3edea3b6a64d4f83/w/806e0250b738c58f6ef731e3/e/c350ccc0c6f5f2e10c4d82bf?renderMode=0&uiState=628f8b30951a6348c1ae78d5"
            class="btn btn-primary"
            >OnShape Link</a
          >
          <button
            type="button"
            class="btn btn-success"
            data-toggle="modal"
            data-target="#modaldc"
          >
            More pictures
          </button>
          <div
            class="modal fade"
            id="modaldc"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalScrollableTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalScrollableTitle">
                    More pictures
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <img src={dc1} alt="desk caddy one" />
                  <img src={dc2} alt="desk caddy two"/>
                  <img src={dc3} alt="desk caddy three"/>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mx-auto my-3">
        <img src={coaster} class="card-img-top" alt="Coaster Holder" />
        <div class="card-body">
          <h5 class="card-title">Coaster Holder</h5>
          <p class="card-text">
            This project was a christmas present for my family. Its a coaster
            holder that has a 3d printed base that holds coasters with laser
            engraved photos of the dogs.
          </p>
          <a
            href="https://cad.onshape.com/documents/6e3974b9fbc28bc153596c64/w/574175120831b06675898cd3/e/3735c9710aa75783d478e7a1?renderMode=0&uiState=628f8bbd4db5323fee13968f"
            class="btn btn-primary"
            >OnShape Link</a
          >
          <button
            type="button"
            class="btn btn-success"
            data-toggle="modal"
            data-target="#modalcoast"
          >
            More pictures
          </button>
          <div
            class="modal fade"
            id="modalcoast"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalScrollableTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalScrollableTitle">
                    More pictures
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <img src={coast1} alt="Coaster 1" />
                  <img src={coast2} alt="Coaster 2" />
                  <img src={coast3} alt="Coaster 3" />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card mx-auto my-3">
        <img src={chess} class="card-img-top" alt='Chess Board'/>
        <div class="card-body">
          <h5 class="card-title">Chess Board</h5>
          <p class="card-text">
            For this project, I used my 3d printer to create a chessboard from
            different color materials. Unfortunately, I no longer have access to
            the models as this was a project I created using another software.
          </p>
          <button
            type="button"
            class="btn btn-success"
            data-toggle="modal"
            data-target="#modalchess"
          >
            More pictures
          </button>

          <div
            class="modal fade"
            id="modalchess"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalScrollableTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalScrollableTitle">
                    More pictures
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <img src={chess2} alt='Chess Board 2' />
                  <img src={chess3} alt='Chess Board 3' />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


        </div>
      </body>
    </html>
    
  );
}

export default Portfolio;