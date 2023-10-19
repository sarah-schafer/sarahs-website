import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile.js';

export default function WorkService(props) {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <Profile />
                    <div className='col'>
                        <div className='section work-service'>
                            <h2>Additional Work, Organizations, and Service</h2>
                            <p>I am fortunate to have had the opportunity to be part of a number of fantastic organizations and volunteer projects that have helped me grow and allowed me to contribute to my community.  In high school, I completed over 120 hours of community service, and so far, over the course of my college career, I have completed over 130 hours of volunteering.  Below are some of these experiences.</p>
                            <h3>Positions</h3>
                            <ul>
                                <li>
                                    <h4><a href='https://botanicgardens.uw.edu/center-for-urban-horticulture/gardens/uw-farm/'>UW Farm</a> Informatics Intern</h4>
                                    <p>I've been involved with the UW Farm, an urban, organic farm; since May 2022, volunteering roughly 2-4 hours each week.  As a volunteer and a UW Farm Apprentice, I've harvested, planted, weeded, and learned about food systems.  Additionally, as a farm tour guide, I've lead environmental studies classes through tours, teaching about sustainability, the processes of urban and organic farming, and the communities involved in food systems.  Finally, as an Informatics Intern in Winter 2023, I updated and maintained the UW Farm website using WordPress and organized the organization's files.</p>
                                    <p>To learn more about my work with the UW Farm, please see <a href='https://docs.google.com/document/d/1gEZonvnz65KS8HTRLxykhztI8QCM7LdFz_YIwo37cBw/edit?usp=sharing'>my reflection</a> on this incredible experience.</p>
                                </li>
                                <li>
                                    <h4>UW Salsa Club Officer</h4>
                                    <p>Since joining UW Salsa Club in September 2022, I've learned the importance of dance for community.  As an officer since January 2023, I've organized events, facilitated community building activities, and managed the club social media accounts.  In addition, I have also planned and taught club lessons.  Additionally, I have gained leadership experience through being the group's Co-President since September 2023.</p>
                                </li>
                                <li>
                                    <h4><a href='https://clothesforkids.org/'>Clothes for Kids</a> Volunteer</h4>
                                    <p>Clothes for Kids is a nonprofit organization that assists local students in need by providing wardrobes.  From 2018 to 2020, I volunteered 2-2.5 hours per week during the seasons that Clothes for Kids is open, where I sorted donations, tagged clothing, and assisted children in finding clothes.</p>
                                </li>
                                <li>
                                    <h4>Hall Council Representative</h4>
                                    <p>In both the 2021-2022 and 2022-2023 academic years, I've been a representative to my residence hall's Hall Council.  Through these organizations, I've learned leadership skills and have planned, organized, and volunteered for community building events.  Additionally, in Spring of 2022, I represented my hall in Students Expressing Environmental Dedication (SEED), where we learned about environmental issues, created informational posters, and planned educational events.</p>
                                </li>
                                <li>
                                    <h4>DAWGS Crew Volunteer</h4>
                                    <p>As a DAWGS Crew Volunteer in 2022, I assisted residents with move-in, welcomed students to campus, and answered residents’ and their families’ questions.</p>
                                </li>
                                <li>
                                    <h4>Dawg Daze Leader</h4>
                                    <p>As a Dawg Daze Leader in 2022, I welcomed first-year students to campus by assisting with Dawg Daze events, helped students find their classes, registered students to vote, facilitated a connection group, and more.</p>
                                </li>
                            </ul>
                            <h3>Experiences</h3>
                            <ul>
                                <li>
                                    <h4>ACLU National Advocacy Institute</h4>
                                    <p>For a week in July 2021, I was fortunate enough to be able to attend the ACLU National Advocacy Institue.  During this educational and empowering conference, I attended workshops and lectures on topics ranging from lobbying, graphic design for advocacy, key rights and justice issues, and more.  This opportunity to learn and collaborate with peers also interested in advocacy has shaped my pursuits in college and future goals.</p>
                                </li>
                                <li>
                                    <h4>Women in Informatics 2022 Hackathon</h4>
                                    <p>
                                        In January 2022, I participated in UW Women in Informatics' Annual Hackathon.  Titled "Embracing the New," this opportunity allowed me to develop and receive feedback on an app design.  Over the course of the event, my group used Figma to propose an app design that would help users take care of their houseplants.  You can view our <a href='https://www.figma.com/proto/i2yZDf3kpzcVI9ehxPRKZu/Branching-Out?type=design&node-id=4-826&t=5G0uQcC3AkSJ6z2P-1&scaling=scale-down&page-id=3%3A2174&starting-point-node-id=4%3A826&mode=design'>Figma Prototype</a>.
                                    </p>
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