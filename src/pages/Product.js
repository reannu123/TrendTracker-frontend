import React from 'react'
import {useParams} from "react-router-dom"

function Product() {
  const {id} = useParams()
  return (
    <div className="container">
      <h1 className="m-5 pb-5 border-bottom">Product {id}</h1>
    </div>
  )
}

export default Product