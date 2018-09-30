import React from 'react'

const Footer = () => {
  return (
      <React.Fragment>
          <footer id="footer-content">
            <div className="container">
                <div className="footer-box">
                    <h1>GLUG PACE</h1>
                    <p>GNU AND LINUX USERS GROUP PACE, <br /> a subgroup of Free Software Movement Karnataka.</p>
                </div>
                <div className="footer-box">
                    <h1>Open Source Community</h1>
                    <p><a href="https://github.com">GitHub</a></p>
                </div>
                <div className="footer-box">
                    <h1>P A College of Engineering</h1>
                    <p>Nadupadav, Montepadav Post <br />
                        Kairangala <br />
                        Mangalore - 574153 <br />
                        Karnataka, INDIA.
                    </p>
                </div>
            </div>
            <div id="developer">
                <p>Made with <span className="heart"></span> by <a href="https://github.com/elmentrix">elmentrix</a></p>
            </div>
        </footer>
      </React.Fragment>
  )
}
export default Footer;