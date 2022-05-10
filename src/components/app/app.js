import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import './app.css';

import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../characterPage/characterPage';
import GotService from '../../services/gotService';


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
            <> 
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
            <CharacterPage/>
            <Row>
                <Col md='6'>
                    <ItemList onItemSelected={this.onItemSelected}
                    getData={this.gotService.getAllBooks}
                    renderItem={(item) => item.name}/>
                </Col>
                <Col md='6'>
                    <CharDetails charId={this.state.selectedChar}/>
                </Col>
            </Row>
            <Row>
                <Col md='6'>
                    <ItemList onItemSelected={this.onItemSelected}
                    getData={this.gotService.getAllHouses}
                    renderItem={(item) => item.name}/>
                </Col>
                <Col md='6'>
                    <CharDetails charId={this.state.selectedChar}/>
                </Col>
            </Row>
                </Container>
            </>
        );
    }
};
