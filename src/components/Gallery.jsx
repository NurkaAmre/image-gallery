import React, { useRef } from "react";
import classes from "./Gallery.module.css";
import GalleryItem from "./GalleryItem";

const Gallery = (props) => {
  const { data, onSelectImage, dragItem, draggedItem, onDragEndHandler } = props;

  // Content of the data store
  const galleryContent = data.map((item, index) => {
    const isFeatured = index === 0 ? true : false;
    return (
      <GalleryItem
        key={item.id}
        item={{ ...item, isFeatured, index }}
        onSelectImage={onSelectImage}
        dragItem={dragItem}
        draggedItem={draggedItem}
        onDragEndHandler={onDragEndHandler}
      />
    );
  });

  return <div className={classes.image_gallery}>{galleryContent}</div>;
};

export default Gallery;
