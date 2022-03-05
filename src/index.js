import { render } from '@testing-library/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './data'

function Page() {
  const cards = Data.map(item => {
    return <Card
              key         = {item.id}
              {...item}
    />
  })

  return (
    <React.StrictMode>
      <div>
          <Navbar />
          <Hero />
          <section className='cards-list'>
            {cards}
          </section>
      </div>    
    </React.StrictMode>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"))