import React from 'react'
import Header from './Header';
import SingleProject from './SingleProject';
import { numbers, titles, descriptions, demo, github, images, technologies, mobile } from '../../Data/ProjectData';

const Project = () => {
  return (
    <>
      <Header />
      {
        numbers.map( (_, idx) => {
          return (
            <SingleProject key={idx} numberProps={numbers[idx]} titleProps={titles[idx]} descriptionProps={descriptions[idx]} technologyProps={technologies[idx]} demo={demo[idx]} github={github[idx]} imgProps={images[idx]} mobile={mobile[idx]}/>
          )
        })
      }
    </>
  )
}

export default Project