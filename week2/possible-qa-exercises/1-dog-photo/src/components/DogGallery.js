import { useState } from "react";
import Button from "./Button";
import DogPhoto from "./DogPhoto";
const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);
  const addOneDog = (url) => setDogPhotos([...dogPhotos, url]);
  const getDogPhotos = async () => {
    try {
      const data = await fetch("https://dog.ceo/api/breeds/image/random");
      const dataJSON = await data.json();
      addOneDog(dataJSON.message);
    } catch (error) {
      console.error(error);
    }
  };
  const areDogPhotosExist = dogPhotos && dogPhotos.length !== 0;
  return (
    <>
      <Button onClick={getDogPhotos} />
      {!areDogPhotosExist && (
        <div>Get your first dog by clicking the button!</div>
      )}

      {areDogPhotosExist && (
        <div className="photos">
          {dogPhotos.map((url) => (
            <DogPhoto src={url} />
          ))}
        </div>
      )}
    </>
  );
};

export default DogGallery;
