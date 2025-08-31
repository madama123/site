import React from 'react';

interface CarteProps {
  image: string;
  titre: string;
  description: string;
  altImage: string;
}

const AboutCarte: React.FC<CarteProps> = ({ image, titre, description, altImage }) => {
  return (
    <div className="relative">
      <div className="bg-[#DBEAFF] w-[350px] h-[200px] lt:max-sm:w-[290px] rounded-lg text-left flex justify-center">
        <div className="bg-[#134888] rounded-md w-[15%] h-12 p-3 relative top-4 place-items-center">
          <img src={image} alt={altImage} className="w-7 h-7" />
        </div>
        <div className="w-[75%] ml-2">
          <p className="text-[#134888] font-semibold mt-3 mb-2 lt:max-sm:text-[14px]">
            {titre}
          </p>
          <p className="font-medium text-left text-[12px]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCarte;