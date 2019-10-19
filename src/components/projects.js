import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button } from 'react-mdl';
import database from './database';

class Projects extends Component {
    frontend = [];
    backend = [];
    frameworks = [];
    data = database.map(data => {
        if (data.languages == 'HTML, CSS, JavaScript') {
            this.frontend.push(data);
        } else if (data.languages == 'PHP, SQL') {
            this.backend.push(data);
        } else if (data.languages == 'frameworks') {
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
                            {data.name}
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2 && this.backend.length > 0) {
            return this.backend.map(data =>
                <div className='cardDivs'>
                    <Card shadow={4} style={{ minWidth: '450', margin: 'auto', background: data.image }}>
                        <CardTitle style={{ height: '250px' }}>{data.name}</CardTitle>
                        <CardText>
                            {data.description}
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 3 && this.frameworks.length > 0) {
            return this.frameworks.map(data =>
                <div className='cardDivs'>
                    <Card shadow={4} style={{ minWidth: '450', margin: 'auto', background: data.image }}>
                        <CardTitle style={{ height: '250px' }}>{data.name}</CardTitle>                        <CardText>
                            {data.description}
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
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