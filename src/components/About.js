import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile.js';

export default function AboutPage(props) {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <Profile />
                <div className='col col-xs-12 col-md-8'>
                    <div className='section welcome'>
                        <h2>Hello!</h2>
                        <p>
                            My name is Sarah (Sally) Schafer, and I'm an undergraduate student at the University of Washington.  Currently a junior, I am majoring in Informatics and minoring in Environmental Studies.
                        </p>
                        <p>
                            In Informatics, I study the intersection of technology and societal values, and learn to design and develop more equitable and just information technology.  A growing field, <a href='https://ischool.uw.edu/programs/informatics'>Informatics</a> has not only taught me valuable technical skills, it has also allowed me to learn about societal impacts of technology.
                        </p>
                        <p>
                            Additionally, by minoring in Environmental Studies, I have been able to learn about and actively work for the environment, a topic about which I care deeply. 
                        </p>
                        <p>
                            Though distinct fields, both areas allow me to <em>learn about communities and justice, and develop skills to work towards brighter futures for all.</em>
                        </p>
                        <p>
                            If working together sounds interesting to you, please reach out!  I'd love to hear from you!
                        </p>
                    </div>
                    <div className='section'>
                        <h2>Additional Information</h2>
                        <ul>
                            <li>
                                <Link className='internal-link' to="/academics">
                                    Academics
                                </Link>
                            </li>
                            <li>
                                <Link className='internal-link' to="/work-service">
                                    Work, Organizations, and Service
                                </Link>
                            </li>
                            <li>
                                <Link className='internal-link' to="/awards">
                                    Awards
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}