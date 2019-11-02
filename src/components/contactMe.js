import React, { Component } from 'react';
import firebase from 'firebase';
require('dotenv').config()

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: "https://react-my-website.firebaseio.com",
    projectId: process.env.REACT_APP_FIREBASE_PROJEDT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: "1:1089446550486:web:1855acb39dc11618b7e277",
    measurementId: "G-N3KHE821PD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let messageRef = firebase.database().ref('messages');

class ContactMe extends Component {
    constructor(props) {
        super(props)
        this.submitHandler = this.submitHandler.bind(this);

        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault()

        let from = this.state.email;
        let to = 'james_ross@outlook.fr';
        let name = this.state.name;
        let text = this.state.message;

        function saveMessage(from, to, name, text) {
            let newMessageRef = messageRef.push();
            newMessageRef.set({
                from,
                to,
                name,
                text
            })
        }
        saveMessage(from, to, name, text);
        // alert saying message sent for 3 secinds
        document.querySelector('.alert').style.display = 'block';
        setTimeout(function () {
            document.querySelector('.alert').style.display = 'none';
        }, 3000);
        // Clear inout boxes after message sent
        document.getElementById('formName').value = '';
        document.getElementById('formEmail').value = '';
        document.getElementById('formText').value = '';
    }

    render() {
        const { name, email, message } = this.state
        return (
            <div className='contact-body'>
                <div className='contact-grid'>
                    {/* <div className='contact-right'> */}
                    {/* <img src="https://i.ibb.co/3c5K4Cy/MAD-4864.jpg"
                            alt="James-ROSS" border="0" className='myAvatar' /> */}
                    <h2 id='thanks' style={{ fontSize: '25px' }}>
                        Thanks for visiting...
                        </h2>
                    <p style={{ width: '75%', margin: 'auto'}}>If you have any questions or know
                         of any exciting opportunities you feel I should know about,
                         don't hesitate to contact me. I look forward to hearing from you!
                    </p>
                    {/* <hr /> */}
                    <h2 id='signature' style={{ fontSize: '25px' }}>
                        James Ross
                        </h2>
                    {/* </div> */}
                    {/* <div className='contact-right'> */}
                    <div className='contact-side'>
                        <h2 style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                            Contact Me
                        </h2>
                        {/* <hr /> */}
                        <div className='contact-list'>
                            <div className='form'>
                                <div className='alert'>Your message has been sent</div>
                                {/* ATTEMPT USING PHP */}
                                {/* <form action="/contact.php" method='post'> */}
                                <form onSubmit={this.submitHandler} encType='multipart/form-data'>
                                    <input type="text"
                                        name="name" placeholder="Your name..."
                                        value={name}
                                        onChange={this.changeHandler}
                                        id='formName'
                                        required />
                                    <input type="email"
                                        name="email" placeholder="Your email..."
                                        value={email}
                                        onChange={this.changeHandler}
                                        id='formEmail'
                                        required />
                                    <textarea name="message"
                                        placeholder="Message me..."
                                        value={message}
                                        onChange={this.changeHandler}
                                        id='formText'
                                        required></textarea>
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
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default ContactMe;