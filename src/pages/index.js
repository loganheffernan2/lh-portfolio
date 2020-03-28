import React from 'react'
import BlogRoll from '../components/BlogRoll'
import Header from '../components/Header'

export default () => {
  return (
    <>
      <div className="content">
            <Header />
          </div>
      <div className="content">
            <BlogRoll />
          </div>
    </>)
}