import { Images } from "../images";

 const Salon = [
    {
      src: Images.salon1,
      name: 'Le Spa by Jan',
      rating: '4.5',
      str: Images.star,
      pin: Images.pin,
      km: '2.5 km',
    },
    {
      src: Images.salon2,
      name: 'Sala Raj Thai Traditional Massage',
      rating: '4.5',
      str: Images.star,
      pin: Images.pin,
      km: '2.5 km',
    },
    {
      src: Images.salon3,
      name: 'Sandy Spa',
      rating: '4.5',
      str: Images.star,
      pin: Images.pin,
      km: '2.5 km',
    },
    {
      src:Images.salon4,
      name: 'Tony Spa by TonyJan',
      rating: '4.5',
      str: Images.star,
      pin: Images.pin,
      km: '2.5 km',
    },
  ];


 const Services = [
    {
      src:Images.beauty_1,
      name: 'Beauty',
      place: 28 ,
      selected:true
    },
    {
        src: Images.facewash,
        name: 'Face wash',
        place: 4,
        selected:false
    },
    {
        src: Images.facemassage,
        name: 'Face massage',
        place: 5,
        selected:false
    },
    {
        src: Images.legmassage,
        name: 'Leg massage',
        place: 10,
        selected:false
    },
    {
        src: Images.faceglow,
        name: 'Face glow',
        place: 15,
        selected:false
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
      name:'Face washes',
    },
  ];
  export {products,Salon,Services,images}