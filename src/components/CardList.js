import React from 'react';
import Card from './card.js';

const CardList = ({ addresses }) => {
    return (
        <div> 
            {
                addresses.map((user, i)=> { return (
                    <Card key={i} id={addresses[i].id}  
                        address={addresses[i].address}/>
                    )
                }) 
            }
        </div>
    );
}

export default CardList;