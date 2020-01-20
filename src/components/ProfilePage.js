import React from 'react'
import Sidebar from './Sidebar'
import Career from './Career'
import Experiences from './Experiences'
import Projects from './Projects'
import Publications from './Publications'
import Skills from './Skills'

const ProfilePage = () => (
<div className="wrapper">
    <Sidebar/>
    <div className="main-wrapper">
        <Career/>
        <Experiences/>
        <Projects/>
        <Publications/>
        <Skills/>
    </div>
</div>
)

export default ProfilePage