import React from 'react'
import Header from '../components/Header'
import ShowItem from '../components/ShowItem'
import { shows } from '../utilities/utils'

const Shows = () => {
  return (
    <div id="shows" className=''>
      <Header 
        title="shows" 
      />

      {shows.map((show, index) => (
        <ShowItem
          title={show.title}
          subTitle={show.subTitle}
          href="#"
          image={show.image}
          buttonText={show.buttonText}
          index={index}
          key={show.id}
        />
      ))}

    </div>
  )
}

export default Shows