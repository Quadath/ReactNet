import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import './app.css';

import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails/itemDetails';
import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../pages/characterPage/characterPage';
import GotService from '../../services/gotService';
import HousePage from '../pages/housePage/housePage';
import BookPage from '../pages/booksPage/bookPage';
import BooksItem from '../pages/bookItem';
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';


export default class App extends Component  {
    constructor() {
        super();
        this.state = {
            isRandomCharVisible: true,
            error: false
        }
        this.toggleRandomChar = this.toggleRandomChar.bind(this);
    }

    gotService = new GotService();

    toggleRandomChar() {
        this.setState({isRandomCharVisible: !this.state.isRandomCharVisible})
    }

  

    render() {
        const randomChar = this.state.isRandomCharVisible ? <RandomChar/> : null;
        
        return (
            <Router> 
                <div className='app'>
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {randomChar}
                                <button className='random-char__btn'
                                onClick={this.toggleRandomChar}>Toggle random character</button>
                            </Col>
                        </Row>
                        <Routes>
                            <Route path='/characters' element={<CharacterPage/>}/>
                            <Route path='/houses' element={<HousePage/>}/>
                            <Route path='/books' exact element={<BookPage/>}/>
                            <Route path='/books/:id'  render={
                                () => <BooksItem/>
                            }/>
                        </Routes>
            
                    </Container>
                </div>
            </Router>
        );
    }
};
