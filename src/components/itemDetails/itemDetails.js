import React, {Component} from 'react';
import './itemDetails.css';
import GotService from '../../services/gotService';

const Field = ({item, field, label}) => {
    return (
            <li   li className="list-group-item d-flex justify-content-between">
                <span className="term">{label}</span>
                <span>{item[field]}</span>
            </li>
    )
}
export {Field};

export default class ItemDetails extends Component {

    GotService = new GotService();

    state = {
        item: {

        },
        itemId: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId, getData} = this.props;
        if(!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({item});
            })
        // this.foo.bar = 'bar';

    }

    render() {
        console.log(this.state.itemId);
        console.log(this.props);
        if(!this.props.itemId) {
            return <span className='select-error'>Please select a character</span>
        }
        const {item} = this.state; 
        const {name} = this.state.item;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item});
                        })
                    }
                </ul>
            </div>
        );
    }
}