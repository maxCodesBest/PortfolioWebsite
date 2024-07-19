import React from "react";
import "./Gallery.css";
import { Image } from "antd";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

export default function Gallery() {
  const images = [];
  for (let index = 1; index < 10; index++) {
    const url = `images/album/image${index}.jpg`;
    const image = (
      <Image className="imageItem" width={435} height={327} src={url} />
    );
    images.push(image);
  }

  return (
    <div className="gallery">
      <ScrollToTop />
      <div className="imageContainer">
        <div className="imageWrapper">
          <Image.PreviewGroup className="images">{images}</Image.PreviewGroup>
        </div>
      </div>
    </div>
  );
}
