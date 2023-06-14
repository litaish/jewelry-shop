import uniqid from 'uniqid';
import fallbackImg from '../assets/images/products/fallback.png';
import bracelet1 from '../assets/images/products/webp/bracelet1.webp';
import bracelet2 from '../assets/images/products/webp/bracelet2.webp';
import bracelet3 from '../assets/images/products/webp/bracelet3.webp';
import earrings1 from '../assets/images/products/webp/earrings1.webp';
import necklace1 from '../assets/images/products/webp/necklace1.webp';
import necklace2 from '../assets/images/products/webp/necklace2.webp';
import ring1 from '../assets/images/products/webp/ring1.webp';
import ring2 from '../assets/images/products/webp/ring2.webp';
import ring3 from '../assets/images/products/webp/ring3.webp';
import ring4 from '../assets/images/products/webp/ring4.webp';
import ring5 from '../assets/images/products/webp/ring5.webp';
import ring6 from '../assets/images/products/webp/ring6.webp';

const products = [
    {
      id: uniqid(),
      name: 'Eternal Charm Bracelet',
      desc: 'Exquisite bracelet adorned with intricate charms, a symbol of everlasting beauty.',
      price: '€199',
      img: bracelet1,
      fallback: fallbackImg,
    },
    {
      id: uniqid(),
      name: 'Enchanting Crystal Bracelet',
      desc: 'Captivating bracelet featuring shimmering crystals, perfect for adding a touch of elegance.',
      price: '€149',
      img: bracelet2,
      fallback: fallbackImg,
    },
    {
      id: uniqid(),
      name: 'Whispering Winds Bracelet',
      desc: 'Graceful bracelet inspired by gentle winds, crafted with delicate silver filigree.',
      price: '€179',
      img: bracelet3,
      fallback: fallbackImg,
    },
    {
      id: uniqid(),
      name: 'Radiant Blossom Earrings',
      desc: 'Dazzling earrings that bloom like a radiant flower, sparkling with every movement.',
      price: '€99',
      img: earrings1,
      fallback: fallbackImg,
    },
    {
      id: uniqid(),
      name: 'Ethereal Moonlight Necklace',
      desc: 'Mesmerizing necklace that reflects the allure of moonlight, enchanting all who gaze upon it.',
      price: '€249',
      img: necklace1,
      fallback: fallbackImg,
    },
    {
      id: uniqid(),
      name: 'Golden Sunrise Necklace',
      desc: 'Glorious necklace adorned with a radiant sunburst, symbolizing new beginnings and prosperity.',
      price: '€299',
      img: necklace2,
      fallback: fallbackImg,
    },
    {
      id: uniqid(),
      name: 'Eternal Love Ring',
      desc: 'Timeless ring representing eternal love, with a brilliant diamond at its center.',
      price: '€599',
      img: ring1,
      fallback: fallbackImg,
    },
    {
      id: uniqid(),
      name: 'Whispering Breeze Ring',
      desc: 'Delicate ring with swirling patterns, evoking the gentle whispers of a cool summer breeze.',
      price: '€199',
      img: ring2,
      fallback: fallbackImg,
    },
    {
      id: uniqid(),
      name: 'Mystic Labyrinth Ring',
      desc: 'Intriguing ring with a labyrinth design, inviting exploration and mystery.',
      price: '€179',
      img: ring3,
      fallback: fallbackImg,
    },
    {
      id: uniqid(),
      name: 'Royal Crown Ring',
      desc: 'Regal ring featuring a majestic crown motif, fit for a queen.',
      price: '€349',
      img: ring4,
      fallback: fallbackImg,
    },
    {
      id: uniqid(),
      name: 'Minimalist Harmony Ring',
      desc: 'Sleek and modern ring with a minimalist design, symbolizing harmony and balance.',
      price: '€129',
      img: ring5,
      fallback: fallbackImg,
    },
    {
      id: uniqid(),
      name: 'Celestial Star Ring',
      desc: 'Elegant ring adorned with celestial stars, embodying dreams and aspirations.',
      price: '€199',
      img: ring6,
      fallback: fallbackImg,
    },
  ];
  
  

export default products;