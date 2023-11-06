import { useCallback, useMemo, useState, useRef } from 'react'

import img1 from './assets/images/image-1.webp'
import img2 from './assets/images/image-2.webp'
import img3 from './assets/images/image-3.webp'
import img4 from './assets/images/image-4.webp'
import img5 from './assets/images/image-5.webp'
import img6 from './assets/images/image-6.webp'
import img7 from './assets/images/image-7.webp'
import img8 from './assets/images/image-8.webp'
import img9 from './assets/images/image-9.webp'
import img10 from './assets/images/image-10.jpeg'
import img11 from './assets/images/image-11.jpeg'

import Header from './components/Header'
import classes from './App.module.css';
import Gallery from './components/Gallery'

// Static data for image gallery
const DATA = [
  {
    id: 'i1',
    image: img1,
    isSelected: false
  },
  {
    id: 'i2',
    image: img2,
    isSelected: false
  },
  {
    id: 'i3',
    image: img3,
    isSelected: false
  },
  {
    id: 'i4',
    image: img4,
    isSelected: false
  },
  {
    id: 'i5',
    image: img5,
    isSelected: false
  },
  {
    id: 'i6',
    image: img6,
    isSelected: false
  },
  {
    id: 'i7',
    image: img7,
    isSelected: false
  },
  {
    id: 'i8',
    image: img8,
    isSelected: false
  },
  {
    id: 'i9',
    image: img9,
    isSelected: false
  },
  {
    id: 'i10',
    image: img10,
    isSelected: false,
  },
  {
    id: 'i11',
    image: img11,
    isSelected: true,
    isFeatured: true
  },
].sort((a, b) => {
  if (a.isFeatured) return -1;
  if (b.isFeatured) return 1;
  return 0;
});

const App = () => {
  const [imageStore, setImageStore] = useState(DATA);

    const dragItem = useRef(0);
    const draggedItem = useRef(0);

  // implement drag and drop functionality here
  const dragEndHandler = () => {
    const data = [...imageStore]
    const temp = data[dragItem.current];
    data[dragItem.current] = data[draggedItem.current];
    data[draggedItem.current] = temp;
    console.log(data)
    setImageStore(data)
    console.log(dragItem.current, draggedItem.current);
  };

    // delete images handler
    const deleteImagesHandler = useCallback(() => {
      const updatedImageStore = imageStore.filter(image => !image.isSelected);
      setImageStore(updatedImageStore);
    }, [imageStore]);

    // select image handler
    const selectImageHandler = useCallback((id) => {
      const updatedImageStore = imageStore.map(image => {
        if (image.id === id) {
          return {
            ...image,
            isSelected: !image.isSelected
          }
        }
        return image;
      });
      setImageStore(updatedImageStore);
    }, [imageStore]);

    // get selected images length
    const selectedImagesCount = useMemo(() => {
      return imageStore.filter(image => image.isSelected).length
    }, [imageStore]);

    return (
      <div className={classes.container}>
        <Header count={selectedImagesCount} onDeleteImages={deleteImagesHandler} />
        <Gallery data={imageStore} onSelectImage={selectImageHandler} dragItem={dragItem} draggedItem={draggedItem} onDragEndHandler={dragEndHandler}  />
      </div>
    );
  }

export default App;