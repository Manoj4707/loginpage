import React from 'react'
import Test from './Test'


  const Mango=()=>{
    return(
       <h1>Manoj kamatham</h1>
    )

  }
  const Grape=()=>{
    return(
        <div>Grapes are seewt</div>
    )
  }
   

function Main() {
  return (
    <div>Main
         <Mango/>
         <Grape/>
         <Test/>
    </div>
   
  )
}

export default Main