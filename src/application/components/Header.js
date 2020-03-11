import React from 'react';

import '../styles/Header.css'

import { GiBookshelf, GiHamburgerMenu } from 'react-icons/gi'
import { FiLogIn, FiLogOut } from 'react-icons/fi'
import { FaBook, FaUsers, FaListAlt } from 'react-icons/fa'
import { MdLocalLibrary, MdHome } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { loginUser } from '../redux/actions/AuthActions'

class Header extends React.Component {

    state = {
        renderOptions: false,
        user: false,
        message: false
    }

    componentDidMount() {

    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let user = prevState.user
        if (nextProps.user !== user) {
            user = nextProps.user
        }
        return {
            user
        }
    }

    renderItemsByAuth() {
        if (this.state.user) {
            return (
                <div>
                    <Link to='/' onClick={() => this.setState({ renderOptions: false })} className="Header-item" >
                        <p>Home</p>
                        <MdHome className="Icon-header" />
                    </Link>
                    <Link to='/perfil' onClick={() => this.setState({ renderOptions: false })} className="Header-item" >
                        <p>{this.state.user.login}</p>
                        <MdLocalLibrary className="Icon-header" />
                    </Link>
                    <Link to='/catologos' onClick={() => this.setState({ renderOptions: false })} className="Header-item" >
                        <p>Catálogos</p>
                        <FaListAlt className="Icon-header" />
                    </Link>
                    <div onClick={() => { this.props.loginUser(false); this.setState({ renderOptions: false }) }} className="Header-item" >
                        <p>Sair</p>
                        <FiLogOut className="Icon-header" />
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Link onClick={() => this.setState({ renderOptions: false })} to='/login' className="Header-item" >
                    <p>Entrar</p>
                    <FiLogIn className="Icon-header" />
                </Link>
                <div className="Header-item" >
                    <p>Cadastrar</p>
                    <FiLogIn className="Icon-header" />
                </div>
                <div className="Header-item" >
                    <p>Livros</p>
                    <FaBook className="Icon-header" />
                </div>
                <div className="Header-item" >
                    <p>Autores</p>
                    <FaUsers className="Icon-header" />
                </div>
            </div>

        )
    }

    render() {
        return (
            <div
                style={
                    this.state.renderOptions
                        ? { height: 400, backgroundColor: 'black' }
                        : { height: 130, backgroundColor: '#000000d7' }
                }
                className="Header"
            >
                <div className="Principal" >
                    <Link to='/' onClick={() => this.setState({ renderOptions: false })} className="Logo" >
                        <p>Editora ABC</p>
                        <GiBookshelf style={{ marginBottom: 14, marginLeft: 5 }} />
                    </Link>
                    <GiHamburgerMenu onClick={() => this.setState({ renderOptions: !this.state.renderOptions })} className="Menu" />
                </div>
                <div className="Header-content" >
                    {this.renderItemsByAuth()}

                </div>

            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        user: state.AuthReducer.user,
    }
)

export default connect(mapStateToProps, { loginUser })(Header)
