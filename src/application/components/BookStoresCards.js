import React from 'react';

import '../styles/BookStores.css'

import { FaPlusCircle } from 'react-icons/fa'

export default class Bookstores extends React.Component {

    componentDidMount() {

    }

    renderBookstoreCard(name, picture) {
        return (
            <div className="Card" >
                <div className="Card-header" >
                    {name}
                </div>
                <div className="Card-body" >
                    <img className="Card-image" src={picture} />
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="Component" >
                <p className="Title" >Livrarias</p>
                <div className="Bookstores" >
                    {this.renderBookstoreCard('Livraria Cultura', require('../assets/images/bookstore1.jpg'))}
                    {this.renderBookstoreCard('Lorem epsum', require('../assets/images/bookstore2.jpg'))}
                    {this.renderBookstoreCard('Dolorem set', require('../assets/images/bookstore3.jpg'))}
                    <div className="Plus-button" >
                        <FaPlusCircle />
                        <p>Ver todas</p>
                    </div>
                </div>
            </div>
        );
    }
}

