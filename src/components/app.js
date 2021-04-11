import React, { useState } from 'react'
import ChartTree from './d3chart'


const App = ()=> {
  const [chartShown, setchartShown] = useState(false);

  // state = {
  //   chartShown:false
  // }

 const chartShownToggler=(e)=>{
    e.preventDefault()
    setchartShown({chartShown:!chartShown})
  }


  const renderChart=()=>{
    if (chartShown) {
      return(<ChartTree/>)
    }
    return null
  }
    return <div>
        <h1>Hello</h1>
        {renderChart()}
        <button type="button" onClick={chartShownToggler}>D3 View</button> 
      </div>
      
    }
export default App