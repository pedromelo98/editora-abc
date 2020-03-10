import React from 'react';

import Lottie from 'react-lottie'

import errorAnimation from '../assets/images/error'
import successAnimation from '../assets/images/success'
import barAnimation from '../assets/images/bar'

import '../styles/Alert.css'

export default class AlertMessage extends React.PureComponent {

    state = {
        lottieOptions: {
            loop: false,
            autoplay: true,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        }
    }

    handleAnimation(type) {
        switch (type) {
            case 'success':
                return (
                    <Lottie
                        options={{ ...this.state.lottieOptions, animationData: successAnimation, loop: false }}
                        height={50}
                        width={50}
                        isStopped={false}
                        isPaused={false}
                    />
                )
            case 'error':
                return (
                    <Lottie
                        options={{ ...this.state.lottieOptions, animationData: errorAnimation, loop: false }}
                        height={50}
                        width={50}
                        isStopped={false}
                        isPaused={false}
                    />
                )
            default:
                return <div />
        }
    }

    render() {
        const { text, type } = this.props
        return (
            <div className="Alert-message" style={type === 'success' ? { backgroundColor: '#00994d' } : {}}  >
                <Lottie
                    options={{ ...this.state.lottieOptions, animationData: barAnimation, loop: true }}
                    height={10}
                    width={320}
                    isStopped={false}
                    isPaused={false}
                />
                {this.handleAnimation(type)}
                <p className="Alert-text" >{text}</p>
            </div>
        );
    }
}

