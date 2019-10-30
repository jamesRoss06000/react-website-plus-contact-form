import React, { Component } from 'react';
import { List, ListItem, ListItemContent } from 'react-mdl';

class ContactMe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }
    // changeHandler = e => {
    //     this.setState({ [e.target.name]: e.target.value })
    // }
    // submitHandler = e => {
    //     e.preventDefault()
    //     console.log(this.state)

    //     var api_key = 'e42c2b2002d191fa3e8e83f83a95f314-816b23ef-8179526f';
    //     var domain = 'https://api.mailgun.net/v3/sandboxc5ae022412ed448b873d5766d05570b7.mailgun.org';
    //     var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

    //     var data = {
    //         from: this.state.email,
    //         to: 'james_ross@outlook.fr',
    //         subject: 'Email from' + this.state.name,
    //         text: this.state.message
    //     };

    //     mailgun.messages().send(data, function (error, body) {
    //         if (error){
    //             console.log(error);
    //         }
    //         console.log(body);
    //     });
    // }

    render() {
        const { name, email, message } = this.state
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
                            <h2 style={{ fontSize: '25px', fontFamily: 'Anton', paddingTop: '10px' }}>
                                Contact Me
                        </h2>
                            <hr />
                            <div className='contact-list'>
                                {/* <div className='form'> */}
                                {/* ATTEMPT USING PHP */}
                                {/* <form action="/contact.php" method='post'> */}
                                {/* <form onSubmit={this.submitHandler} encType='multipart/form-data'>
                                        <input type="text"
                                            name="name" placeholder="Your name..."
                                            value={name}
                                            onChange={this.changeHandler} />
                                        <input type="email"
                                            name="email" placeholder="Your email..."
                                            value={email}
                                            onChange={this.changeHandler} />
                                        <textarea name="message"
                                            placeholder="Message me..."
                                            value={message}
                                            onChange={this.changeHandler}></textarea>
                                        <input type="submit" value="Submit" />
                                    </form>
                                </div> */}
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
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactMe;