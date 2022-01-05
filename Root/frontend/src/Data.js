import React, {useEffect, useState} from 'react';
import axios from "./axios";
import List from './List';
import './Data.css'

function Data() {

    const[people,setPeople]= useState([]);
    const[navigate,setnavigate]= useState('All');
    useEffect(() =>{
        async function fetchData() {
            const req = await axios.get(`/${navigate}`);

            setPeople(req.data);
        }

        fetchData();
    }, [navigate]);

    function handleChange(e){
        setnavigate(e.target.value);
    }

    return (
        <div className="data">
            <div className="dropdown">
                <form>
                    <label for="cars">Manufacturer</label>
                    <br></br>
                    <select name="cars" id="select" onChange={handleChange}>
                        <option selected value="All" >All</option>
                        <option value="Apple" >Apple</option>
                        <option value="OnePLus" >One Plus</option>
                        <option value="Samsung" >Samsung</option>
                        <option value="Google" >Google</option>
                        <option value="Sony" >Sony</option>
                        <option value="Huawei" >Huawei</option>
                    </select>
                </form>
            </div>
            <List data={people} />
        </div>
    )
}

export default Data
