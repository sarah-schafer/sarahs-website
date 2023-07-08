import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile.js';

export default function Academics(props) {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <Profile />
                    <div className='col'>
                        <div className='section academics'>
                            <h2>Academics</h2>
                            <div className='academic-basics'>
                                <h3>University of Washington</h3>
                                <h3>Major: Informatics, Minor: Environmental Studies</h3>
                                <h3>September 2021 - Present, Expected Graduation: June 2025</h3>
                                <h3>Current Cumulative GPA: 4.0</h3>
                            </div>
                            <h3>Relevant Courses:</h3>
                            <ul>
                                <li>Computer Programming I: Java</li>
                                <li>Foundational Skills for Data Science: R</li>
                                <li>Intermediate Data Programming: Python</li>
                                <li>Information Ethics and Policy</li>
                                <li>Client Side Development</li>
                                <li>Informatics Research Methods</li>
                                <li>Statistics for Social Sciences</li>
                                <li>Introduction to Environmental Studies</li>
                                <li>Sustainable Choices</li>
                                <li>Introduction to Women Studies</li>
                            </ul>
                            <h3>Selected Coursework</h3>
                            <p>Below are projects from a few of my courses of which I am particularly proud.</p>
                            <ul>
                                <li>
                                    <em><a href='https://bandhna.shinyapps.io/final-project-ayeshazmo/'>Data Analysis of Enrollment in Washington Schools, 2019-2020</a></em>, final project for INFO 201: Foundational Skills for Data Science.  In addition, for this course, I completed a few semi-structured assignments:
                                    <ul>
                                        <li><em><a href='https://schafer.shinyapps.io/CO2-Emissions/'>Visualizing CO2 Emissions</a></em></li>
                                        <li><em><a href='https://info201b-2021-aut.github.io/assignment-3---incarceration-sarah-schafer/'>Incarceration Rates by Race</a></em></li>
                                    </ul>
                                </li>
                                <li>
                                    <em><a href='https://docs.google.com/document/d/1KpGqsgpQx6NfqXC1OOB4LkaWI6BesNzhuuOHrd9CW08/edit?usp=sharing'>Analysis of Washington's Basic Food Program</a></em>, project for INFO 200: Intellectual Foundations of Informatics
                                </li>
                                <li>
                                    <em><a href='https://github.com/vianneb/Analyzing-Gender-Wage-Gaps'>Analyzing Gender Wage Gaps</a></em>, final project for CSE 163: Intermediate Data Programming, based in Python.
                                </li>
                                <li>
                                    <em><a href='https://docs.google.com/document/d/1fMdf3XNfkGx9rw5MOnmlT9P27I4sj-z6svssM0fQN2o/edit?usp=sharing'>Reimagining an Existing Research Paper through an Intersectional Lens</a></em>, essay for INFO 300: Research Methods.
                                </li>
                                <li>
                                    <em><a href='https://eco-bites.web.app/'>EcoBites</a></em>, final project for INFO 340: Web Development, a web app that acts as a calculator and log of environmental impact of food consumption.
                                </li>
                                <li>
                                    <em><a href='https://drive.google.com/file/d/1F1u02jbEH9IY0_92SnfNj3aV0_elJIVd/view?usp=sharing'>A Manifesto on Environmental Justice</a></em>, final project for GWSS 200: Intro to Women Studies, where we were asked to write a manifesto on an issue we were passionate about, echoing feminists manifesots we read in class.
                                </li>
                            </ul>
                            <Link className='internal-link' to="/">Return to main page</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}