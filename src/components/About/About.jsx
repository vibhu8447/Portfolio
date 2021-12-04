import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='Competitive Programmer | Full Stack Dev | UI/UX developer'
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>FullStack Dev</h3>
                    <p className='about-details'>
                    A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.{' '}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className='about-link-element'
                            href='https://github.com/vibhu8447'
                        >
                            my github!
                        </a>
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Compettive Programming</h3>
                    <p className='about-details'>
                        I've been doing compettive programming   from around 2 years now, and
                     like to solve problems and implememnt it in dev . Check out{' '}
                        <a
                            target="_blank"
                            className='about-link-element'
                            rel="noreferrer"
                            href='https://www.codechef.com/users/vibhu8447'
                        >
                            my Cp profile today!
                        </a>
                    </p>

               
                  
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;
