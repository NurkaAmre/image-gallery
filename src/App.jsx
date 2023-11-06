import { useCallback, useMemo, useState, useRef } from "react";

import { DATA } from "./data";
import Header from "./components/Header";
import GalleryItem from "./components/GalleryItem";
import classes from "./App.module.css";

const App = () => {
  const [imageStore, setImageStore] = useState(DATA);

  // this ref will store the current and previous gallery item indexes
  const dragItem = useRef(0);
  const draggedItem = useRef(0);

  // implement drag and drop functionality here
  const dragEndHandler = () => {
    const data = [...imageStore];
    const temp = data[dragItem.current];
    data[dragItem.current] = data[draggedItem.current];
    data[draggedItem.current] = temp;
    setImageStore(data);
  };

  // delete images handler
  const deleteImagesHandler = useCallback(() => {
    const updatedImageStore = imageStore.filter((image) => !image.isSelected);
    setImageStore(updatedImageStore);
  }, [imageStore]);

  // select image handler
  const selectImageHandler = useCallback(
    (id) => {
      const updatedImageStore = imageStore.map((image) => {
        if (image.id === id) {
          return {
            ...image,
            isSelected: !image.isSelected,
          };
        }
        return image;
      });
      setImageStore(updatedImageStore);
    },
    [imageStore]
  );

  // get selected images length
  const selectedImagesCount = useMemo(() => {
    return imageStore.filter((image) => image.isSelected).length;
  }, [imageStore]);

  // Gallery content
  const galleryContent = imageStore.map((item, index) => {
    const isFeatured = index === 0 ? true : false;
    return (
      <GalleryItem
        key={item.id}
        item={{ ...item, isFeatured, index }}
        onSelectImage={selectImageHandler}
        dragItem={dragItem}
        draggedItem={draggedItem}
        onDragEndHandler={dragEndHandler}
      />
    );
  });

  return (
    <div className={classes.container}>
      <Header
        count={selectedImagesCount}
        onDeleteImages={deleteImagesHandler}
      />
      <ul className={classes.image_gallery}>{galleryContent}</ul>
    </div>
  );
};

export default App;
