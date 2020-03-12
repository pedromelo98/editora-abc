import React from 'react';

import '../../App.css'
import '../styles/Catalogos.css'

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { MdShoppingCart, MdAdd, MdAttachMoney } from 'react-icons/md'

import { loginUser } from '../redux/actions/AuthActions'
import { sendAlertMessage } from '../redux/actions/AlertActions'
import AlertMessage from '../components/AlertMessage'
import categories from '../assets/files/Categories'

class Catalogos extends React.Component {

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

    getBooksByCategorie(categorie) {
        return categories.categories.filter((item) => {
            return item.name.toUpperCase().startsWith(categorie.toUpperCase())
        })
    }

    renderBooksByCategorie(categorie) {
        return (
            this.getBooksByCategorie(categorie)[0].books.map((l, i) => {
                console.log(i)
                return (
                    <div key={i} className="Book" >
                        <div className="Book-title" >
                            <p>{l.name}</p>
                        </div>
                        <div className="Book-body" >
                            <img className="Book-image" alt="imagem do livro" src={require(`../assets/images/book-cover${i}.jpg`)} />
                        </div>
                        <div className="Sale" >
                            <MdAttachMoney />
                            <p>10%</p>
                        </div>
                        <div className="Book-footer" >
                            <MdAdd />
                            <MdShoppingCart />
                        </div>
                    </div>
                )
            })
        )
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
                <div className="Catalogos" >
                    <p className="Title-intro" >Catálogos</p>
                    <div className="Select" >
                        <p>Filtrar catalogos:</p>
                        <select
                            onChange={(e) => this.setState({ filterCategorie: e.target.value })}
                            value={this.state.filterCategorie}
                            placeholder='Selecionar categoria'
                            id='categories'
                        >
                            <option value={''} >Todos</option>
                            {this.renderSelectOptions()}
                        </select>
                    </div>
                    <div className="Categories" >
                        {this.renderCategories()}
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

export default connect(mapStateToProps, { loginUser, sendAlertMessage })(Catalogos)

