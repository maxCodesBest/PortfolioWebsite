import React from "react";
import { Image } from "antd";
import { Carousel } from "antd";
import "./Gallery.css";

export default function Gallery() {
  const images = [];
  for (let index = 1; index < 10; index++) {
    // i know, super amateur, working with directories in a frontend-only project is a pain in the ass and its an home\hobby project so yea i solved it in the easiest way possible
    const highUrl = `images/albumHighQuality/image${index}.webp`;
    const lowUrl = `images/albumLowQuality/image${index}.webp`;
    const image = (
      <Image
        className="imageItem"
        src={lowUrl}
        preview={{
          destroyOnClose: true,
          imageRender: () => (
            <Image className="highImageItem" src={highUrl} preview={false} />
          ),
          toolbarRender: () => null,
        }}
      />
    );
    images.push(image);
  }

  return (
    <div className="gallery">
      <Carousel arrows infinite={true} autoplay={false} className="carousel">
        {images}
      </Carousel>
    </div>
  );
}
