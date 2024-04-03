"use client";
import Image from "next/image";
import "./Image.css";
import useAxios from "../../hooks/useAxios";

const ProfileImage = () => {
  const { data } = useAxios();

  const alternateAvatars = data?.user?.about?.alternateAvatars || [];
  
  return (
    <div>
      <div class="gallery">
        <Image
          src={data?.user?.about?.avatar?.url}
          height={500}
          width={500}
          alt="Archer"
        />
        {alternateAvatars.map((avatar, index) => (
          <Image
            key={index}
            src={avatar.url}
            height={500}
            width={500}
            alt={`Alternate Avatar ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileImage;
