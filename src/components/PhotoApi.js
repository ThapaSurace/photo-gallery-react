import axios from "axios";
import React, { useEffect, useState } from "react";
import { Gallery } from "./Gallery";
import ClipLoader from "react-spinners/ClipLoader";
import { Hero } from "./Hero";

export const PhotoApi = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query,setQuery] = useState('')

  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_GALLERY_API_KEY }&q=${query}&image_type=photo&pretty=true`
      )
      .then((res) => {
        setPhotos(res.data.hits);
        console.log(res.data.hits);
        setIsLoading(false);
      });
  }, [query]);
  return (
    <>
    <Hero setQuery={setQuery} />
    <div className="flex justify-center mb-5">
    <h1 className="text-4xl font-extrabold text-center text-rose-500 inline-block border-b-8  border-blue-400">PHOTO GALLERY</h1>
    </div>
    <div className="container mx-auto p-3">
      {isLoading ? (
        <div className="loader-container">
          <ClipLoader color={"#fff"} size={150} />
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
          {photos.map((photo) => (
            <Gallery key={photo.id} photo={photo} />
          ))}
        </div>
      )}
    </div>
    </>
  );
};
