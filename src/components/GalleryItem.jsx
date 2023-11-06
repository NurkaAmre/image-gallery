import React from "react";
import classes from "./GalleryItem.module.css";

const GalleryItem = (props) => {
  const { item, onSelectImage, dragItem, draggedItem, onDragEndHandler } =
    props;

  const image_gallery_item_class = item.isFeatured
    ? `${classes.image_gallery__item} ${classes.featured_item}`
    : classes.image_gallery__item;

  // overlay classes
  const overlayClasses = item.isSelected
    ? `${classes.image_gallery__item__overlay} ${classes.selected}`
    : classes.image_gallery__item__overlay;

  return (
    <div
      className={image_gallery_item_class}
      draggable
      onDragStart={() => (dragItem.current = item.index)}
      onDragEnter={() => (draggedItem.current = item.index)}
      onDragEnd={onDragEndHandler}
      onDragOver={(e) => e.preventDefault()}
    >
      <img src={item.image} alt="gallery" />
      <div
        className={overlayClasses}
        draggable={false}
        onDragStart={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <input
          type="checkbox"
          checked={item.isSelected}
          onChange={() => onSelectImage(item.id)}
        />
      </div>
    </div>
  );
};

export default GalleryItem;