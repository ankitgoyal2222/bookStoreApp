import React from 'react';
import book from "../../public/book7.png";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mb-10'>
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-8 md:mt-36'>
        <div className='space-y-8'>
            <h1 className="text-2xl md:text-4xl font-bold ml-3">
            Welcome !🙏 Let's explore something {" "}
            <span style={{ color: 'rgb(138, 88, 204)' }}>new every day!!!</span>
            </h1>
            <p className="text-sm md:text-xl ml-3">
              Discover a world of stories and knowledge. Whether you're seeking knowledge, inspiration, or a break from studies, our books are here to guide, motivate, and refresh your mind. Explore, learn, and get lost in the pages of your favorite books 📒!
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <Link to="/course">
        <button className="btn mt-6 btn-secondary">Get Started</button>
      </Link>
        </div>

        <div className='order-1 w-full md:w-1/2'>
          <img
            src={book}
            className="w-[340px] mt-28 md:mt-40 ml-6 md:w-[450px] md:h-[350px] md:ml-20"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
