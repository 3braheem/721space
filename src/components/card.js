import React from 'react';

const Card = ({ address }) => {
    return (
        <div className='tc w5 bg-dark-gray dib grow br3 pa4 ma2 bw2 ba bw1 b--white-50'>
            <img src={`https://effigy.im/a/${address}.svg`} alt="NFT"/>
            <div>
                <p className='white'>{address}</p>
            </div>
        </div>
    );
}

export default Card;