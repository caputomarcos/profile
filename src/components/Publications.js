import React from 'react'

const Publications = () => (
    <section className="section publications-section">
    <h2 className="section-title">
        <span className="fa-stack fa-xs">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fas fa-file fa-stack-1x fa-inverse"></i>
        </span>
        Publications
    </h2>
    <div className="intro">
        <p>You can list your publications in this section. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Vestibulum et ligula in nunc
            bibendum fringilla a eu lectus.</p>
    </div>
    <div className="item">
        <li><a href="#">The Art of Computer Programming</a></li>
        <div className="publication-authors">Donald E. Knuth</div>
        <div className="publication-conference">Addison-Wesley, 1968</div>
    </div>
    <div className="item">
        <li><a href="#">Genetic Programming III: Darwinian Invention &amp; Problem Solving</a></li>
        <div className="publication-authors">Koza, J.R., Andre, D., Bennett, F.H., Keane, M.A.</div>
        <div className="publication-conference">Morgan Kaufmann Publishers Inc., San Francisco, CA, USA, 1st edn.
            (1999)
        </div>
    </div>
    <div className="item">
        <li><a href="#">A syntax directed compiler for Algol 60</a></li>
        <div className="publication-authors">Edgar T. Irons</div>
        <div className="publication-conference">Comm. ACM 4 (1961), 51–55</div>
    </div>
</section>
)

export default Publications