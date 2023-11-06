import React from "react";
import classes from "./GalleryItem.module.css";

const GalleryItem = (props) => {
  // destructure props
  const { item, onSelectImage, dragItem, draggedItem, onDragEndHandler } =
    props;

  // classes for featured image
  const image_gallery_item_class = item.isFeatured
    ? `${classes.image_gallery__item} ${classes.featured_item}`
    : classes.image_gallery__item;

  // overlay classes
  const overlayClasses = item.isSelected
    ? `${classes.image_gallery__item__overlay} ${classes.selected}`
    : classes.image_gallery__item__overlay;

  return (
    <li
      className={image_gallery_item_class}
      draggable
      onDragStart={() => (dragItem.current = item.index)}
      onDragEnter={() => (draggedItem.current = item.index)}
      onDragEnd={onDragEndHandler}
      onDragOver={(e) => e.preventDefault()}
    >
      <img src={item.image} alt="gallery" />
      <div className={overlayClasses} draggable={false}>
        <input
          type="checkbox"
          checked={item.isSelected}
          onChange={() => onSelectImage(item.id)}
        />
      </div>
    </li>
  );
};

export default GalleryItem;
