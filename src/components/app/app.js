import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import './app.css';

import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../characterPage/characterPage';


export default class App extends Component  {
    constructor() {
        super();
        this.state = {
            isRandomCharVisible: true,
            error: false
        }
        this.toggleRandomChar = this.toggleRandomChar.bind(this);
    }

  

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
                   <CharacterPage/>
                   <CharacterPage/>
                </Container>
            </>
        );
    }
};
