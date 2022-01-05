import React from 'react';
import './ListData.css';

function ListData({datarow:{id, name, price, stock_quantity, manufacturer, date_added, date_modified} }) {
    return (
        <div>
            <li class="table-row">
                <div class="col-1" data-label="Id">{id}</div>
                <div class="col-2" data-label="Name">{name}</div>
                <div class="col-3" data-label="Price">$ {price}</div>
                <div class="col-4" data-label="Quantity" style={stock_quantity===0 ? {backgroundColor: 'red', color: 'white'}: stock_quantity>50? {backgroundColor: 'green', color: 'white'}:{backgroundColor: 'orange', color: 'white'}}>{stock_quantity}</div>
                <div class="col-5" data-label="Manufacturer">{manufacturer}</div>
                <div class="col-6" data-label="Date Added">{date_added}</div>
                <div class="col-7" data-label="Date Modified">{date_modified}</div>
            </li>
        </div>
    )
}

export default ListData
