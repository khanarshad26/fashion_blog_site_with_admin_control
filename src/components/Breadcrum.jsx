import React from 'react'

const Breadcrum = ({title, summary}) => {
  return (
    <>
    <div className="breadcrumbs">
        <div className="container">
          <h2>{title}</h2>
          <p>{summary}</p>
        </div>
      </div>
    </>
  )
}

export default Breadcrum