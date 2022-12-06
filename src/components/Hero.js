import React, { useState } from "react";
import {BsSearch} from 'react-icons/bs'

export const Hero = ({ setQuery }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setQuery(text);
    console.log(text)
    setText('')
  };

  return (
    <>
      <div className='hero-bg bg-[url("/public/images/heroImage.jpg")]  shadow-lg bg-no-repeat bg-cover bg-center bg-opacity-25 mb-10 grid place-items-center'>
        <div className="w-full max-w-3xl px-4">
          <form onSubmit={onSubmit}>
            <div class="relative">
              <input
                type="search"
                placeholder="Search images..."
                value={text}
                onChange={e => setText(e.target.value)}
                required
              />
              {/* <svg
                aria-hidden="true"
                className="w-5 h-5 right-10  bottom-5 absolute text-gray-500 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={onSubmit}
              >
                <path
                  strokelinecap="round"
                  strokelinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg> */}
              <BsSearch onClick={onSubmit} className="w-5 h-5 right-10  bottom-5 absolute text-gray-500 cursor-pointer" />
            </div>
          </form>
          <p className="text-center mt-3 text-white">
            Popular Images: halloween, wallpaper, nature, diwali, background,
            christmas, sky, cat, flowers, dog, money, food, iphone wallpaper
          </p>
        </div>
      </div>
    </>
  );
};
