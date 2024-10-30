// src/components/Cards.js

import React from 'react';

const Card = ({ title, value, info, percentage, isPositive }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <p className="text-gray-400">{title}</p>
            <h2 className="text-2xl font-bold">{value}</h2>
            {info && <p className="text-gray-400">{info}</p>}
            {percentage && (
                <p className={isPositive ? 'text-green-400' : 'text-red-400'}>
                    {percentage}
                </p>
            )}
        </div>
    );
};

export default Card;
