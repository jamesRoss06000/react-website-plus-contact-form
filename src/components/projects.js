import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button } from 'react-mdl';
import database from './database';

class Projects extends Component {
    frontend = [];
    backend = [];
    frameworks = [];
    data = database.map(data => {
        if (data.languages === 'HTML, CSS, JavaScript') {
            this.frontend.push(data);
        } else if (data.languages === 'PHP, SQL') {
            this.backend.push(data);
        } else if (data.languages === 'frameworks') {
            this.frameworks.push(data);
        }
    }
    );

    constructor(props) {
        super(props);
        this.state = { activeTab: 1 };
    }

    toggleCategories() {
        if (this.state.activeTab === 1 && this.frontend.length > 0) {
            return this.frontend.map(data =>
                <div className='cardDivs'>
                    <Card shadow={4} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ height: '250px', background: data.image }}></CardTitle>
                        <CardText>
                          <h4>{data.name}</h4>  
                        </CardText>
                        <CardText>
                            {data.description}
                        </CardText>
                        <br></br>
                        <CardActions border>
                            <Button colored><a style={{textDecoration: 'none'}} href={data.github} target='_blank' rel="noopener noreferrer">Github</a></Button>
                            <Button colored><a style={{textDecoration: 'none'}} href={data.live} target='_blank' rel="noopener noreferrer">Live Demo</a></Button>
                        </CardActions>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2 && this.backend.length > 0) {
            return this.backend.map(data =>
                <div className='cardDivs'>
                    <Card shadow={4} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ height: '250px', background: data.image }}></CardTitle>
                        <CardText>
                          <h4>{data.name}</h4>  
                        </CardText>
                        <CardText>
                            {data.description}
                        </CardText>
                        <br></br>
                        <CardActions border>
                            <Button colored><a style={{textDecoration: 'none'}} href={data.github} target='_blank' rel="noopener noreferrer">Github</a></Button>
                            <Button colored><a style={{textDecoration: 'none'}} href={data.live} target='_blank' rel="noopener noreferrer">Live Demo</a></Button>
                        </CardActions>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 3 && this.frameworks.length > 0) {
            return this.frameworks.map(data =>
                <div className='cardDivs'>
                    <Card shadow={4} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ height: '250px', background: data.image }}></CardTitle>
                        <CardText>
                          <h4>{data.name}</h4>  
                        </CardText>
                        <CardText>
                            {data.description}
                        </CardText>
                        <br></br>
                        <CardActions border>
                            <Button colored><a style={{textDecoration: 'none'}} href={data.github} target='_blank' rel="noopener noreferrer">Github</a></Button>
                            {/* <Button colored><a style={{textDecoration: 'none'}} href={data.live} target='_blank' rel="noopener noreferrer">Live Demo</a></Button> */}
                        </CardActions>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <span style={{ width: '15px' }}></span>
                    <Tab>Front End</Tab>
                    <Tab>Back End</Tab>
                    <Tab>Frameworks</Tab>
                    <span style={{ width: '15px' }}></span>
                </Tabs>

                <Grid>
                    <Cell col='12' >
                        <div >
                            <div className='content'>{this.toggleCategories()}</div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;