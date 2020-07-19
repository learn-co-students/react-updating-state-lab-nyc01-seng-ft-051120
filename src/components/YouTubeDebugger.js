import React, { Component } from 'react'

class YouTubeDebugger extends Component {
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    // handleClick = (event) => {
    //     let className = event.target.className
    //     switch (className) {
    //         case 'bitrate':
    //             this.setState({
    //                 settings: {
    //                     ...this.state.settings,
    //                     bitrate: 12
    //                 }
    //             })
    //             break
    //         case 'resolution':
    //             this.setState({
    //                 settings: {
    //                     ...this.state.settings,
    //                     video: {resolution: '720p'}}
                    
    //             })
    //             console.log(this.state)
    //             break
    //         default: 
    //             console.log("no changes made")
    //     }
    // }

    handleBitrateClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }, console.log(this.state))
    }

    handleResolutionClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }}
                
        }, console.log(this.state))
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitrateClick}>
                    Bitrate 
                </button>
                <button className="resolution" onClick={this.handleResolutionClick}>
                    Resolution
                </button>
            </div>
        )
    }
}

export default  YouTubeDebugger