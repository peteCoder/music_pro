import React, { useState } from 'react'
import Header from '../components/Header'
import ShowItem from '../components/ShowItem'
import { shows } from '../utilities/utils'

const Shows = () => {
  const [showDetail, setShowDetail] = useState({});

  return (
    <div id="shows" className=''>
      <Header
        title="shows"
      />

      {/* For Show Detail */}
      <div className="">

      </div>

      <div>
        {shows.map((show, index) => (
          <ShowItem
            onClick={(e) => {
              setShowDetail(show)
              console.log(showDetail.title)
            }}
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


    </div>
  )
}

export default Shows