import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile(props) {
    return (
        <div className='col col-12 col-md-4'>
            <div className='sticky-md-top'>
                <div className='name-portrait'>
                    <h1>
                        <Link className='internal-link' to="/">Sarah Schafer</Link>
                    </h1>
                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/img/IMG_3754.JPG'} alt="Portrait  of Sarah Schafer" />
                    <p className='portrait-caption'>
                        University of Washington Student, Informatics (Environmental Studies)
                    </p>
                    <p>
                        Email: <a href="mailto:schafer5@uw.edu">schafer5@uw.edu</a>
                    </p>
                    <p>
                        <a href='https://www.linkedin.com/in/sarah-schafer-2b45a5282/'>LinkedIn</a>
                    </p>
                    <p>
                        <a href={process.env.PUBLIC_URL + '/Resume_Schafer_6-4-2023.pdf'} download>Download Resume</a>
                    </p>
                </div>
            </div>
        </div>
    );
}