import React from 'react';

import '../styles/Header.css'

import { GiBookshelf, GiHamburgerMenu } from 'react-icons/gi'
import { FiLogIn } from 'react-icons/fi'
import { FaQuestionCircle, FaBook, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {

    state = {
        renderOptions: false
    }

    componentDidMount() {

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
                    <Link to='/' className="Logo" >
                        <p>Editora ABC</p>
                        <GiBookshelf style={{ marginBottom: 14, marginLeft: 5 }} />
                    </Link>
                    <GiHamburgerMenu onClick={() => this.setState({ renderOptions: !this.state.renderOptions })} className="Menu" />
                </div>
                <div className="Header-content" >
                    <div className="Header-item" >
                        <p>Log-in</p>
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
                    <div className="Header-item" >
                        <p>Quem somos</p>
                        <FaQuestionCircle className="Icon-header" />
                    </div>
                </div>

            </div>
        );
    }
}

