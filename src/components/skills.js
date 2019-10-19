import React, { Component } from 'react';
import { ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return (
      <div className='skillDiv'>
        <div>{this.props.skill}
        <ProgressBar style={{margin: 'auto', width: '100%'}} progress={this.props.progress}/></div>
      </div>
    )
  }
}

export default Skills;