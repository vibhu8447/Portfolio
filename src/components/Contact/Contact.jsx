import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Contact.css';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import codechef from './../../assets/codechef.png';
import instagram from './../../assets/in.png';
import medium from './../../assets/me.png';
import web from './../../assets/web.png';

const Contact = () => {
    return (
        <div className='section-container'>
            <Header
                heading='Get in touch.'
                details='Interested to collaborate? Feel free to drop me an email.'
            />

            {/* Form section */}
            <div className='contact-form-container'>
                <form className='contact-form'>
                    {/* Email Id Input */}
                    <input
                        type='email'
                        placeholder='Your Email ID'
                        name='email'
                        className='input-box email-input'
                        autoComplete='off'
                    />

                    {/* Email Body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>

                    {/* Submit button */}
                    <button type='submit' className='contact-btn'>
                        Send Email
                    </button>
                </form>
            </div>

            {/* Social icons */}
            <div className='social-icons-container'>
                <a href= 'https://github.com/vibhu8447' target="_blank" className='social-icon'>
                    <img src={github} alt='social' />
                </a>
                <a
                    target="_blank"
                    href='https://www.linkedin.com/in/vibhu8447/'
                    className='social-icon'
                >
                    <img src={linkedin} alt='social' />
                </a>
                <a
                    target="_blank"
                    href='https://www.codechef.com/users/vibhu8447'
                    className='social-icon'
                >
                    <img src={codechef} alt='social' />
                </a>
               
            </div>

            <FooterLink
                phrase='Read more '
                toAdress='/about'
                link='about me.'
            />

            <div className='vector-frame'>
                <img
                    src={contactVector}
                    alt='vector'
                    className='about-vector'
                />
            </div>
        </div>
    );
};

export default Contact;
