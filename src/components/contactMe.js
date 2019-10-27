import React, { Component } from 'react';
import { List, ListItem, ListItemContent } from 'react-mdl';

class ContactMe extends Component {
    render() {
        return (
            <div className='contact-body'>
                <div className='contact-grid'>
                    <div className='contact-right'>
                        <img src="https://i.ibb.co/3c5K4Cy/MAD-4864.jpg"
                            alt="James-ROSS" border="0" className='myAvatar' />

                        <h2 style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                            James Ross
                        </h2>
                        <hr />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '10px' }}>Thanks for visiting my site. If you have any questions or know
                             of any exciting opportunities you feel I should know about,
                             don't hesitate to contact me. I look forward to hearing from you!
                    </p>
                    </div>
                    <div className='contact-right'>
                        <div className='contact-side'>
                            <h2 style={{ fontSize: '25px', fontFamily: 'Anton', paddingTop: '10px'}}>
                                Contact Me
                        </h2>
                            <hr />
                            <div className='contact-list'>
                                <div className='form'>
                                    <form action="treatment.php">
                                        <input type="text" name="name" placeholder="Your name..." />
                                        <input type="email" name="email" placeholder="Your email..." />
                                        <textarea id="subject" name="subject" placeholder="Message me..."></textarea>
                                        <input type="submit" value="Submit" />
                                    </form>
                                </div>
                                {/* <List>
                                    <ListItem>
                                        <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                            <a style={{ color: 'white', textDecoration: 'none' }} href='/'><img src='https://i.ibb.co/jwHSyd0/email-1.png' alt='email' />
                                                james_ross@outlook.fr</a>
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                            <a style={{ color: 'white', textDecoration: 'none' }} href='https://www.linkedin.com/in/jamesross06000/' target='_blank' rel="noopener noreferrer"><img src='https://i.ibb.co/THJNhDp/linkedin.png' alt='email' />
                                                linkedin.com</a>
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                            <a style={{ color: 'white', textDecoration: 'none' }} href='https://github.com/jamesRoss06000' target='_blank' rel="noopener noreferrer"><img src='https://i.ibb.co/hVtB9LR/github-white.png' alt='email' />
                                                github.com</a>
                                        </ListItemContent>
                                    </ListItem>
                                </List> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactMe;