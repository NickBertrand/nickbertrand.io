import React, { Component } from 'react'
import backgroundImage from '../../assets/images/space-header.jpg';
import { Card } from '../../components/Card';
import { Hero } from '../../components/Hero';

export default class Resume extends Component {
  render() {
    return (
      <div>
        <Hero image={backgroundImage}/>
        <Card>
          <h2>This is the Resume Page!</h2>
        </Card>
      </div>
    )
    }
}
