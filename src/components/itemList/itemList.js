import React, { useEffect, useState } from 'react';
import './itemList.css';
import Spinner from '../spinner/spinner';

function ItemList ({getData, onItemSelected, renderItem}) {
    const [itemList, updateList] = useState([]);

    useEffect(() => {
        getData()
        .then((data) => {
            updateList(data);
        })
    }, []);
  
    function renderItems(arr) {
        return arr.map((item, i) => {
            const label = renderItem(item);

            return (
            <li key={Math.floor(Math.random() * 100000)}
             className="list-group-item"
             onClick={() => onItemSelected(41 + i)}
            >
            {label}
        </li>)
        });
    }
    
    if(!itemList) { 
        return <Spinner/>
    }
    const items = renderItems(itemList);
    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
    
}

export default ItemList;