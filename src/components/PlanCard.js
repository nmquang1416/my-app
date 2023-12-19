import React from 'react';

const PlanCard = ({ planName, description, features, price}) => {
    return (
        <div className='card h-100 shadow-lg'>
            <div className='card-body'>
                <div className='text-center p-3'>
                    <h5 className='card-title'>
                        {planName}
                    </h5>
                    <span className='h2'> ${price}</span>/month
                </div>
                <br/><br/>
                <ul className='list-group custom-list'>
                    {features.map((features, index) =>(
                        <li key={index}className={`list-group-item custom-list-items ${features.disabled ? 'disabled':''}`}>
                            <span className={`feature-icon ${features.disabled ? 'disabled' : ''}`}>
                            {features.disabled ?'×': '✓'}
                            </span>
                            {features.text}
                        </li>
                    ))}
                </ul>
                <small>
                    {description}
                </small>
                <br/><br/>
            </div>
            <p className='card-text'>
                some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <div className='card-body text-center'>
                <button className='btn btn-outline-primary btn-lg' style={{borderRadius:'30px'}}>
                        Select
                </button>
            </div>
        </div>
    );
};

export default PlanCard;