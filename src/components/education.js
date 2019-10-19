import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <div>
        <p>{this.props.place} {this.props.diploma}</p>
      </div>
    )
  }
}

export default Education;