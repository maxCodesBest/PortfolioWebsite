import React from "react";
import "./Gallery.css";
import { Image } from "antd";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

export default function Gallery() {
  //TODO- holyshit do this dynamic theres no fucking way you keep each image hardcoded WTF
  return (
    <div className="gallery">
      <ScrollToTop />
      <div className="imageContainer">
        <div className="imageWrapper">
          <Image.PreviewGroup className="images">
            <Image
              className="imageItem"
              width={435}
              height={327}
              src="images/album/image1.jpg"
            />
            <Image
              className="imageItem"
              width={435}
              height={327}
              src="images/album/image2.jpg"
            />
            <Image
              className="imageItem"
              width={435}
              height={327}
              src="images/album/image3.jpg"
            />
            <Image
              className="imageItem"
              width={435}
              height={327}
              src="images/album/image4.jpg"
            />
            <Image
              className="imageItem"
              width={435}
              height={327}
              src="images/album/image5.jpg"
            />
            <Image
              className="imageItem"
              width={435}
              height={327}
              src="images/album/image6.jpg"
            />
            <Image
              className="imageItem"
              width={435}
              height={327}
              src="images/album/image7.jpg"
            />
            <Image
              className="imageItem"
              width={435}
              height={327}
              src="images/album/image8.jpg"
            />
            <Image
              className="imageItem"
              width={435}
              height={327}
              src="images/album/image9.jpg"
            />
          </Image.PreviewGroup>
        </div>
      </div>
    </div>
  );
}
