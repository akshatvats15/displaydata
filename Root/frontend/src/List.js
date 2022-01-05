import React from 'react';
import ListData from './ListData';
import './List.css';

function List({data}) {
    return (
        <div>
            <ul class="table">
                <li class="table-header">
                    <div class="col col-1">Id</div>
                    <div class="col col-2">Name</div>
                    <div class="col col-3">Price</div>
                    <div class="col col-4">Quantity</div>
                    <div class="col col-5">Manufacturer</div>
                    <div class="col col-6">Date Added</div>
                    <div class="col col-7">Date Modified</div>
                </li>
                
                { data.map(d => <ListData key={d.id} datarow={d} />) }
                
            </ul>
        </div>
    )
}

export default List
