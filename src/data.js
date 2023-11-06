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

// Static data for image gallery
export const DATA = [
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