import React from 'react';

class YouTubeDebugger extends React.Component{

    state = {
        errors: [],
        user: null,
        settings:{
            bitrate: 8,
            video:{
                resolution: '1080p'
            }
        }
    }

    handleBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings, bitrate: 12
            }
        })
        // console.log(this.state);
    }

    handleResolution = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                    video: {
                        ...this.state.settings.video,
                            resolution: '720p'
                    }
            }
        })
        // console.log(this.state);
    }

    render(){
        return(
            <div>
                <button className='bitrate' onClick={this.handleBitrate}>Change Bitrate from {this.state.settings.bitrate}</button>
                <button className='resolution' onClick={this.handleResolution}>Change Resolution from {this.state.settings.video.resolution}</button>
            </div>
        )}
}

export default YouTubeDebugger;