import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import logo from '../../assets/images/checkout/checkout.png'
import { AuthContext } from './../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Checkout = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { title, _id, price, img } = service;
  
  const handleBookService = event => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name, 
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price:price
    }
    console.log(booking);

    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Done",
          text: "Service book successfully",
         
        });
      }
    })

  }
  return (
    <div>
      <div >
        <img className='mx-auto' src={logo} alt="" />
      </div>
      <h2 className='text-center text-3xl my-5 font-semibold'>checkout : {title} </h2>
      <form onSubmit={handleBookService} className="card-body bbooking border-red-500">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input defaultValue={user?.displayName}
              type="text" name='name'
              placeholder="your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date" name='date'
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email" defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              defaultValue={'$'+price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-block bg-[#FF3811] text-white"
            type="submit"
            value="Oder Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;