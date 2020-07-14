// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component{
  state={
    timesClicked:0 
  }

  handleClicks = ()=>{
    this.setState(prevState => ({
      timesClicked: prevState.timesClicked +1
    }))
  }

  render(){
   return(
     <div>
       <button onClick={this.handleClicks}>{this.state.timesClicked}</button>
     </div>
)}
}
export default DigitalClicker