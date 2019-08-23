import React from 'react'

const Footer = () => {
  return (
      <React.Fragment>
          <footer id="footer-content">
            <div className="container">
                <div className="footer-box">
                    <h1>GLUG PACE</h1>
                    <p>GNU AND LINUX USERS GROUP PACE, <br /> a subgroup of (FSMK) <br/>Free Software Movement Karnataka.</p>
                </div>
                <div className="footer-box">
                    <h1>Open Source Community</h1>
                    <p>
                        <a href="http://instagram.com/glugpace" target="blank">Instagram</a><br/>
                        <a href="https://github.com/mohammed-adil/glugpace/" target="blank">GitHub</a><br/>
                        <a href="https://twitter.com/GlugPace" target="blank">Twitter</a>
                    </p>
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
        </footer>
      </React.Fragment>
  )
}
export default Footer;