import React from 'react';

const Card = ({name,email,id}) => {
    return(
        <div className='bg-light-green dib br1 pa3 ma2 grow bw4 shadow-5'>
            <img alt='logo' src={`https://robohash.org/${id}?size=200x180`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>

            </div>
            
        </div>
        
    );
}

export default Card;