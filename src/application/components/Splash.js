import React from 'react';
import Lottie from 'react-lottie'

import splashFile from '../assets/images/Splash'

export default class Splash extends React.PureComponent {

    state = {
        loading: true,
        lottieOptions: {
            loop: false,
            autoplay: true,
            animationData: splashFile,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid'
            }
        }
    }

    render() {
        return (
            <div>
                <Lottie options={this.state.lottieOptions}
                    height={500}
                    width={500}
                    isStopped={false}
                    isPaused={false}
                />
            </div>
        )
    }
}

