import React from 'react'

const Projects = () => (
    <section className="section projects-section">
        <h2 className="section-title">
            <span className="fa-stack fa-xs">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fas fa-archive fa-stack-1x fa-inverse"></i>
            </span>
            Projects
        </h2>
        <div className="intro">
            <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.
            </p>
        </div>
        <div className="item">
            <span className="project-title">
                <a href="#hook" target="_blank">Velocity</a>
            </span>
            - <span className="project-tagline">A responsive website template designed to help startups promote, market and sell their products.</span>
        </div>
        <div className="item">
            <span className="project-title">
                <a href="#" target="_blank">DevStudio</a>
            </span>
            - <span className="project-tagline">A responsive website template designed to help web developers/designers market their services.</span>
        </div>
        <div className="item">
            <span className="project-title">
                <a href="#" target="_blank">Tempo</a>
            </span>
            - <span className="project-tagline">A responsive website template designed to help startups promote their products or services and to attract users &amp; investors</span>
        </div>
        <div className="item">
            <span className="project-title">
            <   a href="#" target="_blank">Atom</a>
            </span>
            - <span className="project-tagline">A comprehensive website template solution for startups/developers to market their mobile apps.</span>
        </div>
        <div className="item">
            <span className="project-title">
                <a href="#" target="_blank">Delta</a>
            </span>
            - <span className="project-tagline">A responsive Bootstrap one page theme designed to help app developers promote their mobile apps</span>
        </div>
    </section>
)

export default Projects