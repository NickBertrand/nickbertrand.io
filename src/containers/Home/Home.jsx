import React from 'react'
import backgroundImage from '../../assets/images/space-header.jpg';
import { Card } from '../../components/Card';
import { Hero } from '../../components/Hero';


export default function Home() {
  
  return (
    <div>
      <Hero image={backgroundImage}>
        <div>This is some Hero Image Content</div>
      </Hero>
      <Card>
        <h2>This is the Home Page!</h2>
      </Card>
    </div>
  )
}
