import React from 'react'

const FeatureCol = ({title, desc}) => {
  return (
    <div className="col-md-4">
        <h4>{title}</h4>
        <p className="lead">{desc}</p>
    </div>
  )
}

export default FeatureCol