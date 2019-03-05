import React from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Header = (name) => (
    /**
     * A React component that represents the header of the website
     * include: profile image, name, email, contact information,
     * and title description.
     */

    <div className='header'>
        <div>
            <Flip left delay={800}>
                <div className='headerImage'>
                    <img className='center imgCircle' src='./images/myAvatar'></img>
                </div>
            </Flip>

            <Fade delay={800}>
                <h1 className='textCenter titleText'>Liam D. Eloie</h1>
                <p className='textCenter'>liam.d.eloie@gmail.com</p>
                <div className='contacts'>
                    <div className='contactItem'><a target="_blank" className='contactText' href='https://linkedin.com/in/liam-eloie-a5740965/'><img className='contactLogo' src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png'></img></a></div>
                    <div className='contactItem'><a target="_blank" className='contactText' href='https://github.com/Usefulmaths/'><img className='contactLogo' src='https://cdn.freebiesupply.com/logos/large/2x/github-icon-logo-png-transparent.png'></img></a></div>
                    <div className='contactItem'><a target="_blank" className='contactText' href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=liam.d.eloie@gmail.com&tf=1'><img className='contactLogo' src='data:image/png;base64,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'></img></a></div>
                </div>
            </Fade>
            <Fade delay={800}>
                <hr className='hrStyleWhite'></hr>
                <div>
                    <p class='personDescription textCenter'>MSc Machine Learning Graduate, London, UK</p>
                </div>
            </Fade>
        </div>
    </div>
)

export default Header;