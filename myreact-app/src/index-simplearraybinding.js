//Arrays
import ReactDOM from 'react-dom';
import React from 'react';

const PriceComponent = () => {
    //simple array binding
    const prices = [10, 45, 89.90, 23.90];
    return <div>
        <ul>
            {/* {
                prices.map(function (price) {
                    return <li>{price}</li>
                })
            } */
                prices.map(price => <li>{price}</li>)
            }
        </ul>
    </div>
}

//
ReactDOM.render(<PriceComponent />, document.getElementById('root'));