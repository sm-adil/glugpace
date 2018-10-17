import React from 'react'
import logo from './images/logo.png';
import chars from './images/chars.png';
import students from './images/students.png';

const Header = () => {
  return (
    <React.Fragment>
        <section id="section-one">
            <div className="container">
                <div id="hero-content">
                    <img id="hero-image" src={ logo } alt="GNU/LINUX" />
                    <h1>GNU AND LINUX USERS GROUP</h1>
                    <p>GNU/Linux user groups are the means of spreading the idea of free software, hardware, and philosphy in campuses. GLUGs serve as a base to technically empower yourself and interact with professionals, right from installation of Linux to hacking the kernel, web technologies like drupal and mastering the latest python module, at the same time raising questions of self reliance.</p>
                </div>
            </div>
        </section>

        <section id="section-two">
            <div className="container">
                <div className="box">
                    <h1 className="hero-heading">What is the purpose of a GLUG?</h1>
                    <p>The purpose of a GLUG is to equip students with FOSS and make them understand how FOSS is developed and why is it done so. While doing that - how one can contribute back to FOSS. And get them adapted to "critical thinking".</p>
                </div>
                <div className="box">
                    <img src={ chars } alt="BOX" />
                </div>
            </div>
        </section>

        <section id="section-three">
            <div className="container">
                <div className="box">
                    <img src={ students } alt="BOX" />
                </div>
                <div className="box">
                    <h1 className="hero-heading">Be a part of the FSMK team!</h1>
                    <p>Free Software Movement Karnataka is a registered not-for-profit organization. Our primary objective is to create and spread awareness of Free Software technologies in different strata of society. We are driven by volunteers, who by day are software engineers, students, academicians, or government officials, and by night are Free Software evangelists.</p>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}
export default Header;