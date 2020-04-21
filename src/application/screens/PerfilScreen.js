import React from 'react';

import '../../App.css'
import '../styles/Perfil.css'

import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom'
import { MdShoppingCart } from 'react-icons/md'
import { MdWeb, MdAttachMoney } from 'react-icons/md'
import { FiLogOut } from 'react-icons/fi'

import { loginUser } from '../redux/actions/AuthActions'
import { sendAlertMessage } from '../redux/actions/AlertActions'
import AlertMessage from '../components/AlertMessage'
import categories from '../assets/files/Categories'

class Perfil extends React.Component {

    state = {
        user: false,
        message: false,
        filterCategorie: false
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

    renderSelectOptions() {
        return categories.categories.map((l, i) => {
            return <option key={i} value={l.name} >{l.name}</option>
        })
    }

    renderCategories() {
        if (!this.state.filterCategorie) {
            return (
                categories.categories.map((l, i) => {
                    return (
                        <div key={i} className="Categorie" >
                            {l.name}
                            <div className="Books" >
                                {this.renderBooksByCategorie(l.name)}
                            </div>
                        </div>
                    )
                })
            )
        }
        return (
            <div className="Categorie" >
                {this.state.filterCategorie}
                <div className="Books" >
                    {this.renderBooksByCategorie(this.state.filterCategorie)}
                </div>
            </div>
        )
    }

    render() {
        if (!this.props.user) {
            return (
                <Redirect to='/' />
            )
        }
        return (
            <div className="App" >
                {this.state.message &&
                    <AlertMessage
                        text={this.state.message.text}
                        type={this.state.message.type}
                    />
                }
                <div className="Perfil" >
                    <div className="Store-data" >
                        <p className="Store-title" >Livraria {this.state.user.login}</p>
                        <div className="Store-column" >
                            <div className="Data" >
                                <MdWeb />
                                <p className="Feature" >Website</p>
                            </div>
                            <div className="Data" >
                                <MdAttachMoney />
                                <p className="Feature" >Desconto atual: 10%</p>
                            </div>
                        </div>
                        <div style={{ alignItems: 'flex-end' }} className="Store-column" >
                            <div className="Data" >
                                <p className="Feature" >Sair</p>
                                <FiLogOut />
                            </div>
                            <Link to='/shop' className="Data" >
                                <MdShoppingCart style={{ color: '#802b00' }} />
                                <p className="Feature" >Carrinho</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => (
    {
        user: state.AuthReducer.user,
        message: state.AlertReducer.message
    }
)

export default connect(mapStateToProps, { loginUser, sendAlertMessage })(Perfil)

