import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails from '../../itemDetails/itemDetails';
import ErrorMessage from '../../errorMessage/errorMessage';
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock/rowBlock';
import { Field } from '../../itemDetails/itemDetails';

export default class HousePage extends Component {
    gotService = new GotService();
    state = {
        selectedHouse: 3,
        error: false
    }
    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
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
            getData={this.gotService.getAllHouses}
            renderItem={({name, region}) => `${name} (${region})`}/>
        )
        const houseDetails = (
            <ItemDetails itemId={this.state.selectedHouse}
            getData={this.gotService.getHouse}>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
            </ItemDetails>
        )
        return(
            <RowBlock left={itemList} right={houseDetails}/>
        )
    }
}