import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
  const {_id, title, img, price} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title"> {title} </h2>
        <div className="card-actions">
          <p className="text-[#FF3811] text-xl font-semibold">
            Price: ${price}{" "}
          </p>
          <Link to={`/checkout/${_id}`}>
            <button className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75"
                  stroke="#FF3811"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;