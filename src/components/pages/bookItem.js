import React, {Component} from 'react';
import GotService from '../../services/gotService';
import ItemDetails, {Field} from '../itemDetails/itemDetails';

export default class BooksItem extends Component {
    gotService = new GotService();

    state = {
        selectedBook: 3,
        error: false
    }

    render() {
        return (
            <ItemDetails itemId={this.state.setectedBook}
            getData={this.gotService.getCharacter}>
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='authors' label='Authors'/>
                <Field field='publisher' label='Publisher'/>
            </ItemDetails>
        )
    }
}