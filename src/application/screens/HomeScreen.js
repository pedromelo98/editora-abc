import React from 'react';

import '../../App.css'
import '../styles/Home.css'

import BookStoresCards from '../components/BookStoresCards'
import Books from '../components/Books';
import AlertMessage from '../components/AlertMessage'

import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/AuthActions'
import { sendAlertMessage } from '../redux/actions/AlertActions'

class Home extends React.Component {

    state = {
        user: false,
        message: false
    }

    componentDidMount() {
        if (this.props.message) {
            this.sendAlertMessage(this.props.message)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevState.user && this.state.user) {
            this.sendAlertMessage({
                text: 'Você efetuou login com sucesso!',
                type: 'success'
            })
        }
        if (prevState.user && !this.state.user) {
            this.sendAlertMessage({
                text: 'Você foi deslogado com sucesso!',
                type: 'success'
            })
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let user = prevState.user
        let message = prevState.message
        if (nextProps.user !== user) {
            user = nextProps.user
        }
        if (nextProps.message !== message) {
            message = nextProps.message
        }
        return {
            user,
            message
        }
    }

    sendAlertMessage(message) {
        this.props.sendAlertMessage(message)
        setTimeout(() => this.props.sendAlertMessage(false), 5000);
    }

    render() {
        return (
            <div className="App" >
                {this.state.message &&
                    <AlertMessage
                        text={this.state.message.text}
                        type={this.state.message.type}
                    />
                }
                <div className="Home" >
                    <Books />
                    <div className="Backgrounded" >
                        <div className="Ten-books" >
                            <div className="Book-text" >
                                <p style={{ fontSize: 70, color: '#802b00' }} >Os 10+</p>
                                <p style={{ fontSize: 40, fontFamily: 'FredokaOne' }} className="Invisible" >livros vendidos da Editora ABC</p>
                                <p style={{ fontSize: 70, color: '#802b00' }} >2019</p>
                            </div>
                        </div>
                    </div>
                    <BookStoresCards />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        user: state.AuthReducer.user,
        message: state.AlertReducer.message
    }
)

export default connect(mapStateToProps, { loginUser, sendAlertMessage })(Home)

