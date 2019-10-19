import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class ContactMe extends Component {
    render() {
        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col='6'>
                        <img src="https://4vnkta.db.files.1drv.com/y4mlVYYXLCcqv0xwDRZUQ626BgNiqw5pQ0vCTZut0HOGqO7Zk3q0JMham69t51TeAUfw9nfWhrDzZnyV8t67sR5_XNuC13V5CphQRQay22G7F1l-1231XSOm2WTF7xLttVcaUjoPJy32A52X4Vv4zL4N_1JjsXTDwZslf5SjB7w64-ouczzkqSljkgx8y63pYnaxvoHGkkHd3xRp_kDHG_9CA?width=3543&height=3543&cropmode=none"
                            alt="James-ROSS-couleurs" border="0" className='myAvatar' />

                        <h2 style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                            James Ross
                        </h2>
                        <hr />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '10px' }}>Thanks for visiting my site. If you have any questions or know
                             of any exciting opportunities you feel I should know about,
                             don't hesitate to contact me. I look forward to hearing from you!
                    </p>
                    </Cell>
                    <Cell col='6'>
                        <div className='contact-side'>
                            <h2 style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                Contact Me
                        </h2>
                            <hr />
                            <div className='contact-list'>
                                <List>
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
                                </List>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default ContactMe;