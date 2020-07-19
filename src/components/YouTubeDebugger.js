import React from 'react';

class YouTubeDeugger extends React.Component {
    state = 
    {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

      handleClickBitrate = () => {
          console.log("handleClickBitrate()")
          this.setState({
              settings: {
                  ...this.state.settings, 
                  bitrate: 12
              }
          })
      }

      handleClickResolution = () => {
          console.log("handleClickResolution()")
          this.setState({
              settings: {
                  ...this.state.settings,
                  video: {
                      ...this.state.settings.video,
                      resolution: '720p'
                  }
              }
          })
      }

     
      render(){
          console.log(this.state)
          return(
            <div>
                <button onClick={this.handleClickBitrate} className="bitrate">Change Bitrate</button>
                <button onClick={this.handleClickResolution} className="resolution">Change Resolution</button>
            </div>
          )
    }

}

export default YouTubeDeugger;



