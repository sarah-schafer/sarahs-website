import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile.js';

export default function Awards(props) {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <Profile />
                    <div className='col'>
                        <div className='section work-service'>
                            <h2>Awards</h2>
                            <ul>
                                <li>
                                    <h3>Dean's List</h3>
                                    <p>I have been on the Dean's List each quarter of my college career so far, from Fall 2021 to Spring 2023.</p>
                                </li>
                                <li>
                                    <h3>Senior Kamiak “Grand Knight” Award, 2021</h3>
                                    <p>The teachers and staff at my high school award one graduating senior each year the "Grand Knight" award, named for the values the award represents: “Knowledge, Nobility, Integrity, Gratitude, Humility, Tenacity, and Service."</p>
                                </li>
                                <li>
                                    <h3>Senior Science Student Award, 2021</h3>
                                </li>
                                <li>
                                    <h3>STEM Student of the Month, 2021</h3>
                                </li>
                                <li>
                                    <h3>Kiwanis Club of Mukilteo Scholarship Recipient, 2021</h3>
                                </li>
                                <li><h3>National Merit Scholarship Commended Student, 2019</h3></li>
                            </ul>
                            <Link className='internal-link' to="/">Return to main page</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}