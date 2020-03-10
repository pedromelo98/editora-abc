import React from 'react';

import '../../App.css'
import '../styles/Perfil.css'

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import { loginUser } from '../redux/actions/AuthActions'
import { sendAlertMessage } from '../redux/actions/AlertActions'
import AlertMessage from '../components/AlertMessage'
import categories from '../assets/files/Categories'

class Perfil extends React.Component {

    state = {
        user: false,
        message: false,

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

    getBooksByCategorie(categorie) {
        return categories.categories.filter((item) => {
            return item.name.toUpperCase().startsWith(categorie.toUpperCase())
        })
    }

    renderBooksByCategorie(categorie) {
        return (
            this.getBooksByCategorie(categorie)[0].books.map((l, i) => {
                return (
                    <p></p>
                )
            })
        )
    }

    renderCategories() {
        return (
            categories.categories.map((l, i) => {
                return (
                    <div key={i} className="Categorie" >
                        {l.name}
                    </div>
                )
            })
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
                    <p className="Title-intro" >Categorias</p>
                    <div className="Categories" >
                        {this.renderCategories()}
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

export default connect(mapStateToProps, { loginUser, sendAlertMessage })(Perfil)

