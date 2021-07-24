import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios'
import './styles.css'

const PictureDay = () => {
    const [pictureData, setPictureData] = useState([]);
    const [dateSearch, setDateSearch] = useState(new Date());

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=PjLc7bkz2D8b8pUPUhE8UsO9YQMs7mjMZ3WKOPG3');
                setPictureData(res.data);
                
            }
            catch (err) {

            }
        }

        fetchData();
    }, []);

    const formatDate = () => {
        var d = dateSearch,
            month = '' + (d.getMonth() + 1),
            day = '' + (d.getDate()+1),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    const handleLookUpDate =  () => {
        const getData = async () => {
        try {
          
            let fDate= formatDate();
            
            const res2 = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=PjLc7bkz2D8b8pUPUhE8UsO9YQMs7mjMZ3WKOPG3&date=${fDate}`);
            setPictureData(res2.data);
            
        }
        catch (err) {

        }
    }

        getData()
    }

    const onChange = (event) => {
        setDateSearch(new Date(event.target.value))
    }

    
    return(
    <div>
        < img className = "photo" src = {pictureData.url} />
        <div className = "textDiv">
            <h1 className = "boldFont"> {pictureData.title}</h1>
            <p className="date">{pictureData.date}</p>
            <p> {pictureData.explanation}</p>
            <hr  style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: 1,
    borderColor : '#000000'
}}/>
            <label className="label">Select Date to View the Picture of the Day
            <input className = "input" type = "date"  onChange = {onChange} /> 
            <Button className = "button" onClick={handleLookUpDate}>Look Up</Button>
            </label>
        </div>    
            
        
    </div>
    
    )};

export default PictureDay;
