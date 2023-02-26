import React from 'react';

const Form = (props) => {

    return (
        <form onSubmit={props.getweather}>
            <input type="text" name='City' placeholder="City ....." />
            <input type="text" name='Country' placeholder="Country ....." />
            <button>Get Weather</button>
        </form>
    )

}
export default Form;
