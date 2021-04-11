import React from 'react'
import ChartTree from './d3chart'

class App extends React.Component {
  state = {
    chartShown:false
  }

  chartShownToggler=(e)=>{
    e.preventDefault()
    this.setState({chartShown:!this.state.chartShown})
  }


  renderChart(){
    if (this.state.chartShown) {
      return(<ChartTree/>)
    }
    return null
  }
    render() {
      return <div>
        <h1>Hello</h1>
        {this.renderChart()}
        <button type="button" onClick={this.chartShownToggler}>D3 View</button> 
      </div>
      
    }}
export default App