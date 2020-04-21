import React from 'react';

import '../styles/Book.css'
import '../styles/BookStores.css'

import { IoIosArrowBack } from 'react-icons/io'
import { FaUserAlt } from 'react-icons/fa'


export default class Book extends React.Component {

    componentDidMount() {

    }

    render() {
        const { choosedBook, onBack } = this.props
        return (
            <div className="Show-book" >
                <div onClick={onBack} className="Back-button" >
                    <IoIosArrowBack />
                    <p>VOLTAR</p>
                </div>
                <div className="The-book" >
                    <div className="Card" >
                        <div className="Card-header" >
                            {choosedBook.name}
                        </div>
                        <div className="Card-body" >
                            <img alt='imagem' className="Book-image" src={require(`../assets/images/book-cover${choosedBook.index}.jpg`)} />
                        </div>
                    </div>
                    <div className="Book-features" >
                        <p>Nome: {choosedBook.name}</p>
                        <div className="tooltiped" >
                            <p>Autor: {choosedBook.author.name}</p>
                            <div className="Tooltip-author" >
                                <div className="Author-image" >
                                    <img alt='imagem' className="imgauthor" src={require('../assets/images/author1.jpg')} />
                                </div>
                                <p className="Author-name" >{choosedBook.author.name}</p>
                                <p className="Author-feature" >Nascido em: {choosedBook.author.born}</p>
                                <p className="Author-feature" >Livros com a editora ABC: 32</p>
                            </div>
                        </div>
                        <p>Publicado: {choosedBook.published}</p>
                        <p>Sinopse: {choosedBook.intro}</p>
                    </div>
                </div>
            </div>
        );
    }
}

