"use client";
import Image from "next/image";
import "./Image.css";
import myImage from '../../../../public/myImage.JPG';


const ProfileImage = () => {


  return (
    <div>
      <div class="gallery">
        <Image
          src={myImage}
          height={500}
          width={500}
          alt="Archer"
        />
          <Image
          
            src={myImage}
            height={500}
            width={500}
            alt={`Alternate Avatar `}
          />
      </div>
    </div>
  );
};

export default ProfileImage;
