import Image from "next/image";
import React from "react";

import imageOne from "../../public/img/image1.png";
import imageTwo from "../../public/img/image2.png";
import imageThree from "../../public/img/image3.png";
import imageFour from "../../public/img/image4.png";

export const ImageGrid = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <Image
              src={imageOne}
              alt="Galaxy"
              width={400}
              height={300}
              className="h-full object-bottom"
            />
          </div>

          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <Image
              src={imageTwo}
              alt="Nebula"
              width={400}
              height={300}
              className="h-full object-bottom"
            />
          </div>

          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <Image
              src={imageThree}
              alt="Stars"
              width={400}
              height={300}
              className="h-full object-bottom"
            />
          </div>

          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <Image
              src={imageFour}
              alt="Planet"
              width={400}
              height={300}
              className="h-full object-bottom"
            />
          </div>
        </div>
      </div>
    </>
  );
};
