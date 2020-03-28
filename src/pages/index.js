import React from 'react'
import WorkList from '../components/WorkList'
import Header from '../components/Header'

export default () => {
  return (
    <>
      <div className="content">
            <Header />
          </div>
      <div className="content">
            <WorkList />
          </div>
    </>)
}