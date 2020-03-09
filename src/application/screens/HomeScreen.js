import React from 'react';

import '../../App.css'
import '../styles/Home.css'

import BookStoresCards from '../components/BookStoresCards'
import Books from '../components/Books';

export default class Home extends React.Component {

    state = {
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="App" >
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

