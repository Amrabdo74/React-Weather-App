import React from 'react';
import { FaWind, FaTemperatureHigh, } from 'react-icons/fa';
import { WiHumidity, WiDaySunny } from 'react-icons/wi';
import '../index.css';


const Weather = (props) => {


    return (
        <div className='content'>
            <div className='sub-content'>
            {
                props.tempreture && 
                <div> <p>tempreture</p>  {props.tempreture}<FaTemperatureHigh /></div>
            }
            {
                props.humidity && 
                
                <div ><p>humidity</p> {props.humidity}<WiHumidity /></div >
            }
            </div>
            <div className='sub-content'>
            {
                props.description && 
                <div ><p>sky</p>{props.description}<WiDaySunny /></div >
            }
            {
                props.wind && 
                <div ><p>wind</p> {props.wind + "m/s"} <FaWind /></div >
            }
            </div>
            <div className='Error'> {props.Error}</div>
        </div>
    )

}
export default Weather;