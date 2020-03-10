import React from 'react';

import '../styles/Login.css'

import { FiLogIn } from 'react-icons/fi'
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom'
import { loginUser } from '../redux/actions/AuthActions'
import { sendAlertMessage } from '../redux/actions/AlertActions'
import AlertMessage from '../components/AlertMessage'

class Login extends React.Component {

    state = {
        login: '',
        password: '',
        redirect: false,
        message: false
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let message = prevState.message
        if (nextProps.message !== message) {
            message = nextProps.message
        }
        return {
            message
        }
    }

    sendAlertMessage(message) {
        this.props.sendAlertMessage(message)
        setTimeout(() => this.props.sendAlertMessage(false), 5000);
    }

    validator() {
        if (this.state.login === 'login' && this.state.password === 'senha')
            return true
        return false
    }

    submit() {
        if (this.validator()) {
            this.props.loginUser({ login: this.state.login, password: this.state.password })
            this.sendAlertMessage({
                text: 'Você efetuou login com sucesso!',
                type: 'success'
            })
            this.setState({ redirect: true })
            return true
        }
        this.sendAlertMessage({
            text: 'Login e/ou senhas errados!',
            type: 'error'
        })
        return false
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to='/' />
            )
        }
        return (
            <div className="Login" >
                {this.state.message &&
                    <AlertMessage
                        text={this.state.message.text}
                        type={this.state.message.type}
                    />
                }
                <div className="Form-login" >
                    <div className="Input-item" >
                        <label  >Login</label>
                        <input onChange={(event) => this.setState({ login: event.target.value })} value={this.state.login} className="Input-style" />
                    </div>
                    <div className="Input-item" >
                        <label  >Senha</label>
                        <input onChange={(event) => this.setState({ password: event.target.value })} value={this.state.password} type='password' className="Input-style" />
                    </div>
                    <button onClick={() => this.submit()} className="Button" >
                        Entrar
                        <FiLogIn />
                    </button>
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

export default connect(mapStateToProps, { loginUser, sendAlertMessage })(Login)

