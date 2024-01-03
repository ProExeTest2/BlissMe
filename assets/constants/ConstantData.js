import {Images} from '../images';

const Poster = [
  {
    src: Images.salonPoster,
    name: 'salon',
    discountPR: '12%',
  },
  {
    src: Images.spa,
    name: 'spa',
    discountPR: '10%',
  },
  {
    src: Images.salonPoster02,
    name: 'salon',
    discountPR: '7%',
  },
];
const Salon = [
  {
    src: Images.salon1,
    name: 'Le Spa by Jan',
    rating: '4.5',
    str: Images.star,
    pin: Images.pin,
    km: '2.5 km',
    time: '10:00 AM - 2:00 PM',
  },
  {
    src: Images.salon2,
    name: 'Sala Raj Thai Traditional Massage',
    rating: '4.5',
    str: Images.star,
    pin: Images.pin,
    km: '2.5 km',
    time: '10:00 AM - 2:00 PM',
  },
  {
    src: Images.salon3,
    name: 'Sandy Spa',
    rating: '4.5',
    str: Images.star,
    pin: Images.pin,
    km: '2.5 km',
    time: '10:00 AM - 2:00 PM',
  },
  {
    src: Images.salon4,
    name: 'Tony Spa by TonyJan',
    rating: '4.5',
    str: Images.star,
    pin: Images.pin,
    km: '2.5 km',
    time: '10:00 AM - 2:00 PM',
  },
];

const Services = [
  {
    id: 0,
    src: Images.beauty_1,
    name: 'Beauty',
    place: 28,
    selected: false,
  },
  {id: 1, 
    src: Images.facewash, 
    name: 'Face wash', 
    place: 4, 
    selected: false
  },
  {
    id: 2,
    src: Images.facemassage,
    name: 'Face massage',
    place: 5,
    selected: false,
  },
  {
    id: 3,
    src: Images.legmassage,
    name: 'Leg massage',
    place: 10,
    selected: false,
  },
  {
    id: 4,
    src: Images.faceglow, 
    name: 'Face glow', 
    place: 15, 
    selected: false
  },
];

const images = [
  {
    src: Images.headMassage,
    name: 'Head Massage',
    discountPR: '5%',
  },
  {
    src: Images.massage,
    name: 'Body Massage',
    discountPR: '10%',
  },
];

const products = [
  {
    src: Images.massage_oil,
    name: 'Massage oil',
  },
  {
    src: Images.face_cream,
    name: 'Face cream',
  },
  {
    src: Images.face_wash_cream,
    name: 'Face washes',
  },
];

const FaceMassage = [
  {
    src: Images.facemassage01,
    name: 'The Ritz-Carlton Spa, Hong Kong',
    rating: '4.5',
    str: Images.star,
    pin: Images.pin,
    km: '2.5 km',
    time: '10:00 AM - 2:00 PM',
    price: 500,
  },
  {
    src: Images.facemassage02,
    name: 'The Right Spot Urban Spa ',
    rating: '4.5',
    str: Images.star,
    pin: Images.pin,
    km: '2.5 km',
    time: '10:00 AM - 2:00 PM',
  },
  {
    src: Images.facemassage03,
    name: 'FLOAX Floatation Therapy Spa',
    rating: '4.5',
    str: Images.star,
    pin: Images.pin,
    km: '2.5 km',
    time: '10:00 AM - 2:00 PM',
  },
  {
    src: Images.facemassage04,
    name: 'YogaUP',
    rating: '4.5',
    str: Images.star,
    pin: Images.pin,
    km: '2.5 km',
    time: '10:00 AM - 2:00 PM',
  },
];

const SalonServices = [
  {
    id:0,
    name: 'Skin Radiance Facial',
    src: Images.checked_Box,
    price: 588,
    minutes: '60min',
    checked:false,
  },
  {
    id:1,
    name: 'Oily, Combination, Sensitive or Acne Prone skin Ainhoa Vitaminal Facial',
    src: Images.checked_Box,
    price: 888,
    minutes: '60min',
    checked:false,

  },
  {
    id:2,
    name: 'Neem & Tulsi Back Treatment',
    src: Images.notChecked_Box,
    price: 10,
    minutes: '10min',
    checked:false,

  },
  {
    id:3,
    name: 'Lotus and Barley Back Treatment',
    src: Images.notChecked_Box,
    price: 30,
    minutes: '20min',
    checked:false,

  },
  {
    id:4,
    name: 'Ainhoa Oxygen Facial',
    src: Images.notChecked_Box,
    price: 58,
    minutes: '18min',
    checked:false,

  },
  {
    id:5,
    name: 'Tan removal - Brightening Facial',
    src: Images.notChecked_Box,
    price: 80,
    minutes: '60min',
    checked:false,

  },
];
const about = [
  {
      id:0,
      name:'Service',
      selected:true,
  },
  {
      id:1,
      name:'Product',
      selected:false,
  },
  {
      id:2,
      name:'About',
      selected:false,
  },
  {
      id:3,
      name:'Gallery',
      selected:false,
  },
];
const salonProduct = [
  {
    id:0,
    name:'Oil Mask',
    src:Images.oilMask,
    fullName:'Kerastase Elixir Ultime Oleo Complexe Beautifying Oil Mask',
    price: 16,
    selected:false,
    count:0
  },
  {
    id:1,
    name:'Creambath',
    src:Images.crembath,
    fullName:"L'Oreal Paris Hair Spa Deep Nourishing Creambath For Dry",
    price: 16,
    selected:false,
    count:0

  },
  {
    id:2,
    name:'Moisturizing',
    src:Images.Moisturizing,
    fullName:"Wella Professional Enrich Moisturizing Treatment For Dry And Damaged Hair",
    price: 16,
    selected:false,
    count:0

  },
  {
    id:3,
    name:'Cream Masque',
    src:Images.creamMask,
    fullName:"Schwarzkopf Spa Essence Hydrating Cream Masque",
    price: 16,
    selected:false,
    count:0

  },

]
export {products, Salon, Services, images, Poster, FaceMassage, SalonServices, about, salonProduct};
