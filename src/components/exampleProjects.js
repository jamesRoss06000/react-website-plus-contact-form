import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardActions, Button } from 'react-mdl';
import exampleList from './exampleList';

class ExampleProjects extends Component {
  examples = [];
  data = exampleList.map(data => {
    this.examples.push(data)
  }
  );

  render() {
    return this.examples.map(data =>
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
            <Button colored><a style={{ textDecoration: 'none' }} href={data.github} target='_blank' rel="noopener noreferrer">Github</a></Button>
            <Button colored><a style={{ textDecoration: 'none' }} href={data.live} target='_blank' rel="noopener noreferrer">Live Demo</a></Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default ExampleProjects;