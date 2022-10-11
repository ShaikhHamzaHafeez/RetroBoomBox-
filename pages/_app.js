
import '../styles/globals.css'
import '../styles/retroStyle.css'
import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Web3 Browswer Detection
    if (typeof window.ethereum !== "undefined") {
      console.log("Injected Web3 Wallet is installed!");
    }

    //Button ID
    const connectButton = document.getElementById("connect");

    //Click Event
    connectButton.addEventListener("click", () => {
      connectAccount();
    });

    //Connect Account Function
    async function connectAccount() {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      connectButton.innerHTML =
        account[0] +
        account[1] +
        account[2] +
        account[3] +
        account[4] +
        account[5] +
        "..." +
        account[38] +
        account[39] +
        account[40] +
        account[41];
    }
  }, []);

  return (
    <html>
    <head>
    {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
     rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/> */}

   
        <link rel="stylesheet" href="/styles/retroStyle.css"/>
        <link rel="stylesheet" href="/styles/Home.module.css"/>
      
        {/* <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script> */}
        </head>
        <body>
    <div className="container-fluid">
    <header>
        <div className="row">
            <div className="col-10">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="http://retroboombox.io/"><img className="" src="assets/images/logo nft-01.png" alt=""/></a>
                      {/*   <!-- <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button> --> */}
                        <div className="navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          
                            <li className="nav-item">
                              <a className="nav-link" href="retro-boombox">Retro Boombox</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="https://www.bonfire.com/store/retroboom-box/">Exclusive Retro Merchandise </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                </nav>
                
            </div>
            <div className="col-2">
                <div className="navbar ">
                    
                    {/* <button className="enableEthereumButton">Connect Wallet</button> */}
                    <button classNameName={styles.connect} id="connect">
Connect Wallet
</button>

                 
                </div>
            </div>
        </div>
    </header>

    <Component {...pageProps}/>
    <footer>
<section className="">
    <div className="slider">
        <div className="slider-wrap">
            <div className="slide">
                <span className="slide-image">RETRO BOOMBOX.</span>
            </div>
            <div className="slide">
              <span className="slide-image">RETRO BOOMBOX.</span>
          </div>
          <div className="slide">
              <span className="slide-image">RETRO BOOMBOX.</span>
          </div>
          <div className="slide">
              <span className="slide-image">RETRO BOOMBOX.</span>
          </div>
          <div className="slide">
              <span className="slide-image">RETRO BOOMBOX.</span>
          </div>
          <div className="slide">
              <span className="slide-image">RETRO BOOMBOX.</span>
          </div>
          <div className="slide">
              <span className="slide-image">RETRO BOOMBOX.</span>
          </div>
          <div className="slide">
              <span className="slide-image">RETRO BOOMBOX.</span>
          </div>
          <div className="slide">
              <span className="slide-image">RETRO BOOMBOX.</span>
          </div>
          <div className="slide">
              <span className="slide-image">RETRO BOOMBOX.</span>
          </div>
          <div className="slide">
              <span className="slide-image">RETRO BOOMBOX.</span>
          </div>
          <div className="slide">
              <span className="slide-image">RETRO BOOMBOX.</span>
          </div>
          <div className="slide">
              <span className="slide-image">RETRO BOOMBOX.</span>
          </div>
          <div className="slide">
              <span className="slide-image">RETRO BOOMBOX.</span>
          </div>
          <div className="slide">
              <span className="slide-image">RETRO BOOMBOX.</span>
          </div>
          <div className="slide">
              <span className="slide-image">RETRO BOOMBOX.</span>
          </div>
          <div className="slide">
              <span className="slide-image">RETRO BOOMBOX.</span>
          </div>
          <div className="slide">
              <span className="slide-image">RETRO BOOMBOX.</span>
          </div>
          <div className="slide">
              <span className="slide-image">RETRO BOOMBOX.</span>
          </div>
          <div className="slide">
              <span className="slide-image">RETRO BOOMBOX.</span>
          </div>
          </div>
      </div>
</section>
<section>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 text-center ftr ">
                <a href="index.html">
                    <img className="fotr-img" src="assets/images/logo nft-01.png" alt=""/>
                </a>
                
                <ul className="footer-ul">
                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg></a></li>
                      <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                      </svg></a></li>
                      <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                      </svg></a></li>
                      <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="none" height="25" viewBox="0 0 90 90" width="25"><path d="m45 0c-24.849 0-45 20.151-45 45s20.151 45 45 45 45-20.151 45-45-20.142-45-45-45zm-22.797 46.512.189-.306 11.709-18.315c.171-.261.576-.234.702.054 1.953 4.383 3.645 9.837 2.853 13.23-.333 1.395-1.26 3.285-2.304 5.031-.135.252-.279.504-.441.747-.072.108-.198.171-.333.171h-12.033c-.324 0-.513-.351-.342-.612zm52.173 6.3c0 .171-.099.315-.243.378-.909.387-4.014 1.818-5.301 3.609-3.294 4.581-5.805 11.133-11.43 11.133h-23.454c-8.316 0-15.048-6.759-15.048-15.102v-.27c0-.216.18-.396.405-.396h13.068c.261 0 .45.234.432.495-.099.846.063 1.719.468 2.511.774 1.575 2.385 2.556 4.122 2.556h6.471v-5.049h-6.399c-.324 0-.522-.378-.333-.648.072-.108.144-.216.234-.342.603-.864 1.467-2.196 2.331-3.717.585-1.026 1.152-2.124 1.611-3.222.09-.198.162-.405.243-.603.126-.351.252-.684.342-1.008.09-.279.171-.567.243-.837.216-.936.306-1.926.306-2.952 0-.405-.018-.828-.054-1.224-.018-.441-.072-.882-.126-1.323-.036-.387-.108-.774-.18-1.17-.099-.585-.225-1.17-.369-1.755l-.054-.225c-.108-.405-.207-.783-.333-1.188-.369-1.26-.783-2.493-1.233-3.645-.162-.459-.342-.9-.531-1.332-.27-.666-.549-1.269-.801-1.836-.135-.261-.243-.495-.351-.738-.126-.27-.252-.54-.387-.801-.09-.198-.198-.387-.27-.567l-.792-1.458c-.108-.198.072-.441.288-.378l4.95 1.341h.018.018l.648.189.72.198.261.072v-2.934c0-1.422 1.134-2.574 2.547-2.574.702 0 1.341.288 1.791.756.459.468.747 1.107.747 1.818v4.365l.531.144c.036.018.081.036.117.063.126.09.315.234.549.414.189.144.387.324.621.513.477.387 1.053.882 1.674 1.449.162.144.324.288.477.441.801.747 1.701 1.62 2.565 2.592.243.279.477.549.72.846.234.297.495.585.711.873.297.387.603.792.882 1.215.126.198.279.405.396.603.36.531.666 1.08.963 1.629.126.252.252.531.36.801.333.738.594 1.485.756 2.241.054.162.09.333.108.495v.036c.054.216.072.45.09.693.072.765.036 1.539-.126 2.313-.072.324-.162.63-.27.963-.117.315-.225.639-.369.954-.279.639-.603 1.287-.99 1.881-.126.225-.279.459-.423.684-.162.234-.333.459-.477.675-.207.279-.423.567-.648.828-.198.27-.396.54-.621.783-.306.369-.603.711-.918 1.044-.18.216-.378.441-.585.639-.198.225-.405.423-.585.603-.315.315-.567.549-.783.756l-.513.459c-.072.072-.171.108-.27.108h-3.942v5.049h4.959c1.107 0 2.16-.387 3.015-1.116.288-.252 1.557-1.35 3.06-3.006.054-.063.117-.099.189-.117l13.689-3.96c.261-.072.513.117.513.387z" fill="#fff"/></svg></a></li>
                      <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 293.775 293.667" width="25"><g transform="translate(-219.378 -213.333)"><path d="m280.433 353.152a12.45 12.45 0 0 1 12.508-12.452l20.737.068a12.467 12.467 0 0 1 12.467 12.467v78.414c2.336-.692 5.332-1.43 8.614-2.2a10.389 10.389 0 0 0 8.009-10.11v-97.266a12.469 12.469 0 0 1 12.467-12.47h20.779a12.47 12.47 0 0 1 12.467 12.47v90.276s5.2-2.106 10.269-4.245a10.408 10.408 0 0 0 6.353-9.577v-107.627a12.466 12.466 0 0 1 12.465-12.467h20.779a12.468 12.468 0 0 1 12.468 12.467v88.625c18.014-13.055 36.271-28.758 50.759-47.639a20.926 20.926 0 0 0 3.185-19.537 146.6 146.6 0 0 0 -136.644-99.006c-81.439-1.094-148.744 65.385-148.736 146.834a146.371 146.371 0 0 0 19.5 73.45 18.56 18.56 0 0 0 17.707 9.173c3.931-.346 8.825-.835 14.643-1.518a10.383 10.383 0 0 0 9.209-10.306v-77.824" fill="#fff"/><path d="m244.417 398.641a146.808 146.808 0 0 0 233.172-118.741c0-3.381-.157-6.724-.383-10.049-53.642 80-152.686 117.405-232.79 128.793" fill="#bfcfda" transform="translate(35.564 80.269)"/></g></svg></a></li>
                </ul>
                <a href="#">Provable fairness</a>
                <a href="#">Terms & conditions</a>
            </div>
            <div className="col-md-4"></div>

        </div>
    </div>
</section>
</footer>
    
</div>

    
</body>
</html>
  );
}

export default MyApp
