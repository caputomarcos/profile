import React from 'react'

const Sidebar = () => (
    <div className="sidebar-wrapper">
        <div className="profile-container">
            <img className="avatar" src="assets/images/profile.png" alt="profile picture"/>
            <h1 className="name">Marcos Caputo</h1>
            <h3 className="tagline">Full Stack Developer</h3>
        </div>
        <div className="contact-container container-block">
            <ul className="list-unstyled contact-list">
                <li className="email"><i className="fas fa-envelope"></i>
                    <a href="mailto:hello@webjeda.com">hello@webjeda.com</a>
                </li>
                <li className="phone"><i className="fas fa-phone"></i>
                    <a href="tel:012 345 6789">012 345 6789</a>
                </li>
                <li className="website"><i className="fas fa-globe"></i>
                    <a href="http://blog.webjeda.com" target="_blank">blog.webjeda.com</a>
                </li>
                <li className="linkedin"><i className="fa fas fab fa-linkedin"></i>
                    <a href="https://linkedin.com/in/alandoe" target="_blank">alandoe</a>
                </li>
                <li className="github"><i className="fa fas fab fa-github"></i>
                    <a href="https://github.com/sharu725" target="_blank">sharu725</a>
                </li>
                <li className="twitter"><i className="fab fa-twitter"></i>
                    <a href="https://twitter.com/@webjeda" target="_blank">@webjeda</a>
                </li>
            </ul>
        </div>
        <div className="education-container container-block">
            <h2 className="container-block-title">
                Education
            </h2>
            <div className="item">
                <h4 className="degree">MSc in Computer Science</h4>
                <h5 className="meta">University of London</h5>
                <div className="time">2011 - 2012</div>
            </div>
            <div className="item">
                <h4 className="degree">BSc in Applied Mathematics</h4>
                <h5 className="meta">Bristol University</h5>
                <div className="time">2007 - 2011</div>
            </div>
        </div>
        <div className="languages-container container-block">
            <h2 className="container-block-title">
                Languages
            </h2>
            <ul className="list-unstyled interests-list">
                <li>
                    English
                    <span className="lang-desc">(Native)</span>
                </li>
                <li>
                    French
                    <span className="lang-desc">(Professional)</span>
                </li>
                <li>
                    Spanish
                    <span className="lang-desc">(Professional)</span>
                </li>
            </ul>
        </div>
        <div className="interests-container container-block">
            <h2 className="container-block-title">
                Interests
            </h2>
            <ul className="list-unstyled interests-list">
                <li>Climbing</li>
                <li>Snowboarding</li>
                <li>Cooking</li>
            </ul>
        </div>
        <div className="remove-container container-block">
            <h2 className="container-block-title">
                About Theme
            </h2>
            <ul className="list-unstyled interests-list">
                <li><a target="_blank" href="https://www.youtube.com/watch?v=Jnmj1dXDbNk">How to use?</a></li>
                <li><a className="github-button" href="https://github.com/sharu725/online-cv" data-icon="octicon-star"
                       data-show-count="true" aria-label="Star sharu725/online-cv on GitHub">Star</a>
                    <script async defer src="https://buttons.github.io/buttons.js"></script></li>
            </ul>
        </div>
    </div>
)

export default Sidebar