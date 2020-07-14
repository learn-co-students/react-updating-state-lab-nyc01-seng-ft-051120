// Code YouTubeDebugger Component Here
import React from 'react'
class YouTubeDebugger extends React.Component{
  state={errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }}
  changeBitRate=()=>{
    this.setState({
      settings:{
        ...this.state.settings,
        bitrate:12
      }
    })
  }

  changeVidQuality=()=>{
    this.setState({
      settings:{
        ...this.state.settings,
        video:{
          ...this.state.settings.video,
          resolution:"720p"
        }  
      }
    })
  }
render(){
  return(
 <div>
   <button className="bitrate" onClick={this.changeBitRate}>Change bitrate</button>
   <button className="resolution" onClick={this.changeVidQuality}>Change resolution</button>
 </div>
)}
}
export default YouTubeDebugger