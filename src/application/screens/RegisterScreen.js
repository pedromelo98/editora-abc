import React from 'react';

import '../styles/Login.css'

import { FaEdit } from 'react-icons/fa'
import { TiDelete } from 'react-icons/ti'
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom'
import { loginUser } from '../redux/actions/AuthActions'
import { sendAlertMessage } from '../redux/actions/AlertActions'
import AlertMessage from '../components/AlertMessage'

class Register extends React.Component {

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
        if (this.state.login === 'cultura' && this.state.password === 'senha')
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
                <Redirect to='/perfil' />
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
                        <label  >Nome</label>
                        <input onChange={(event) => this.setState({ login: event.target.value })} className="Input-style" />
                    </div>
                    <div className="Input-item" >
                        <label  >CPF</label>
                        <input onChange={(event) => this.setState({ login: event.target.value })} className="Input-style" />
                    </div>
                    <div className="Input-item" >
                        <label  >Nascimento</label>
                        <input onChange={(event) => this.setState({ login: event.target.value })} className="Input-style" />
                    </div>
                    <div className="Input-item" >
                        <label  >Telefone</label>
                        <input onChange={(event) => this.setState({ login: event.target.value })} className="Input-style" />
                    </div>
                    <div className="Input-item" >
                        <label  >Endereço</label>
                        <input onChange={(event) => this.setState({ login: event.target.value })} className="Input-style" />
                    </div>
                    
                    <div className="Buttons" >

                        <button onClick={() => this.submit()} className="Button" >
                            Salvar alterações
                        <FaEdit />
                        </button>
                        <button style={{ backgroundColor: 'red' }} onClick={() => this.submit()} className="Button" >
                            Deletar
                        <TiDelete />
                        </button>
                    </div>
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

export default connect(mapStateToProps, { loginUser, sendAlertMessage })(Register)

