import React from "react";
import "./Gallery.css";
import { Image } from "antd";

export default function Gallery() {
  //TODO- holyshit do this dynamic theres no fucking way you keep each image hardcoded WTF
  return (
    <div className="gallery">
      <div className="imageContainer">
        <div className="imageWrapper">
          <Image.PreviewGroup className="images">
            <Image
              className="imageItem"
              width={490}
              height={325}
              src="images/album/image1.jpg"
            />
            <Image
              className="imageItem"
              width={490}
              height={325}
              src="images/album/image2.jpg"
            />
            <Image
              className="imageItem"
              width={490}
              height={325}
              src="images/album/image3.jpg"
            />
            <Image
              className="imageItem"
              width={490}
              height={325}
              src="images/album/image4.jpg"
            />
            <Image
              className="imageItem"
              width={490}
              height={325}
              src="images/album/image5.jpg"
            />
            <Image
              className="imageItem"
              width={490}
              height={325}
              src="images/album/image6.jpg"
            />
            <Image
              className="imageItem"
              width={490}
              height={325}
              src="images/album/image7.jpg"
            />
            <Image
              className="imageItem"
              width={490}
              height={325}
              src="images/album/image8.jpg"
            />
            <Image
              className="imageItem"
              width={490}
              height={325}
              src="images/album/image9.jpg"
            />
            <Image
              className="imageItem"
              width={490}
              height={325}
              src="images/album/image10.jpg"
            />
          </Image.PreviewGroup>
        </div>
      </div>
    </div>
  );
}
