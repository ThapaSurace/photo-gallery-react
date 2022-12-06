import React from "react";
import {AiFillEye,AiFillHeart} from 'react-icons/ai'
import {RiDownloadCloudFill} from 'react-icons/ri'
export const Gallery = ({photo}) => {
  return (
    <>
      <>
        <div className="gallery bg-gray-200">
          <img
            src={photo.webformatURL}
            alt={photo.id}
            className='w-full object-cover rounded-sm shadow-sm'
          />
          <div className="tags p-4">
           <div className="flex gap-x-2 justify-center mb-2">
           {photo.tags.split(',').map((tag,index)=>(
              <ul key={index} className='gap-x-2'>
                <li className="cursor-pointer tag-list px-1 rounded" >{tag}</li>
              </ul>
            ))}
           </div>
           <div className="flex gap-x-3 justify-center">
           <span className="flex items-center gap-x-1"><AiFillEye size={20} className=' hover:text-indigo-500 cursor-pointer'  />{photo.views}</span>
           <span className="flex items-center gap-x-1"><AiFillHeart size={20} className=' hover:text-pink-500 cursor-pointer'  />{photo.likes}</span>
           <span className="flex items-center gap-x-1"><RiDownloadCloudFill size={20} className=' hover:text-blue-500 cursor-pointer' />{photo.downloads}</span>
           </div>
          </div>
        </div>
        
      </>
    </>
  );
};
