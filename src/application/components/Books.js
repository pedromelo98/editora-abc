import React from 'react';

import '../styles/BookStores.css'

import { FaPlusCircle } from 'react-icons/fa'

export default class Books extends React.Component {

    componentDidMount() {

    }

    renderBookstoreCard(name, picture) {
        return (
            <div className="Card" >
                <div className="Card-header" >
                    {name}
                </div>
                <div className="Card-body" >
                    <img alt='imagem' className="Book-image" src={picture} />
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="Component" >
                <p className="Title" >Livros editora ABC</p>
                <div className="Bookstores" >
                    {this.renderBookstoreCard('Book name', require('../assets/images/book-cover1.jpg'))}
                    {this.renderBookstoreCard('Lorem epsum', require('../assets/images/book-cover2.jpg'))}
                    {this.renderBookstoreCard('Dolorem set', require('../assets/images/book-cover3.jpg'))}
                    <div className="Plus-button" >
                        <FaPlusCircle />
                        <p>Ver todos</p>
                    </div>
                </div>
            </div>
        );
    }
}

