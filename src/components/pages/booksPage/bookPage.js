import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails from '../../itemDetails/itemDetails';
import ErrorMessage from '../../errorMessage/errorMessage';
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock/rowBlock';
import { Field } from '../../itemDetails/itemDetails';

export default class BookPage extends Component {
    gotService = new GotService();
    state = {
        selectedBook: 3,
        error: false
    }
    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }
    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }


    render() {
        if(this.state.error) {
            return <ErrorMessage/>
        }
        const itemList = (
            <ItemList onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllBooks}
            renderItem={({name, authors}) => `${name} (${authors})`}/>
        )
        const bookDetails = (
            <ItemDetails itemId={this.state.setectedBook}
            getData={this.gotService.getBook}>
                <Field field='authors' label='Authors'/>
                <Field field='publisher' label='Publisher'/>
            </ItemDetails>
        )
        return(
            <RowBlock left={itemList} right={bookDetails}/>
        )
    }
}