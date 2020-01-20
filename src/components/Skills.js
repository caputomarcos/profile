import React from 'react'

const Skills = () => (
    <section className="skills-section section">
    <h2 className="section-title">
        <span className="fa-stack fa-xs">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fas fa-wrench fa-stack-1x fa-inverse"></i>
        </span>
        Skills &amp; Proficiency
    </h2>
    <div className="skillset">
        <div className="item">
            <h3 className="level-title">Python & Django</h3>
            <div className="level-bar">
                <div className="level-bar-inner" data-level="98%">
                </div>
            </div>
        </div>
        <div className="item">
            <h3 className="level-title">Javascript & jQuery</h3>
            <div className="level-bar">
                <div className="level-bar-inner" data-level="98%">
                </div>
            </div>
        </div>
        <div className="item">
            <h3 className="level-title">Angular</h3>
            <div className="level-bar">
                <div className="level-bar-inner" data-level="98%">
                </div>
            </div>
        </div>
        <div className="item">
            <h3 className="level-title">HTML5 & CSS</h3>
            <div className="level-bar">
                <div className="level-bar-inner" data-level="95%">
                </div>
            </div>
        </div>
        <div className="item">
            <h3 className="level-title">Ruby on Rails</h3>
            <div className="level-bar">
                <div className="level-bar-inner" data-level="85%">
                </div>
            </div>
        </div>
        <div className="item">
            <h3 className="level-title">Sketch & Photoshop</h3>
            <div className="level-bar">
                <div className="level-bar-inner" data-level="60%">
                </div>
            </div>
        </div>
    </div>
</section>
)

export default Skills