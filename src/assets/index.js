
import user from './user.png'
import  cart from './cart.png'
import cart2 from './cart-svgrepo-com.svg'
import logo from './logo.png'
import  name from './name1.png'
import latest from './latest.png'
import line1 from './Line 2.png'
import img from './img.jpg'
import left from './left.png'
import right from './right.png'
import burger from './burger.png'
import home from './home.png'
import collection from './collection.png'
import about from './about.png'
import contact from './contact.png'
import order from './order.png'
import singout from './singout.png'
import img2 from './astoria-ecommerce-product-carousel-section-banner-I8itR7y.webp'
import img3 from './online-delivery-service-home-office-260nw-1879675792.webp'
import image_1 from './download (3).jpg'
import image_11 from './download (2).jpg'
import image_2 from './download (4).jpg'
import image_3 from './download (5).jpg'
import image_4 from './download (2).jpg'
import image_5 from './download (6).jpg'
import image_6 from './imagefirst.jpg'
import image_7 from './images (2).jpg'
import image_8 from './images (4).jpg'
import image_9 from './images (6).jpg'
import image_10 from './imagesecond.jpg'
import imgage_12 from './imagefourth.jpg'
import imgage_13 from './imagesthird.jpg'
import bestseller from './BEST SELLER.png'
import dropdown from './dropdown.png'
import allcollection from './allcollection.png'
import closed from './Icon-Close-O.png'
import related from './related.png'
import yourcart from './Your Cart.png'
import bin from './bin.png'
import total from './Cart Totals.png'
import deliveryinfo from './DELIVERY INFO.png'
import myorders from './My Orders.png'
import aboutus from './About Us.png'
import aboutimage from './52787850466_00f47ecef5_b.jpg'
import contactus from  './Contact Us.png'
import constactimage from './it-professional.png'
import glass from './glass (1).svg'
import bascket from './glass (2).svg'
import  burgers from './glass (3).svg'
import usersvg from './user.svg'
import homesvg from './homesvg.svg'
import collectionsvg from './collection.svg'
import aboutsvg from './about.svg'
export const assets={
    
    bestseller,
    user,
    myorders,
    contactus,
    aboutimage,
    constactimage,
    aboutus,
    total,
    bin,
    cart,
    logo,
    name,
    related,
    latest,
    closed,
    line1,
    img,
    left,
    right,
    burger,
    home,
    collection,
    deliveryinfo,
    about,
    contact,
    order,
    singout,
    dropdown,
    allcollection,
    yourcart,
    img2,
    img3,
    cart2,
    glass,
    burgers,
    bascket,
    usersvg,
    homesvg,
    collectionsvg,
    aboutsvg


}

export const products = [
  {
    id: "aaab",
    name: "Full Sleeve T-Shirt",
    category: "Men",
    subcategory: "Topwear",
    bestseller: true,
    date: "12.11.2025",
    price:300,
    description: "A comfortable and stylish full sleeve t-shirt, perfect for casual outings.",
    img: [
      image_1,
      image_5,
      image_3,
      image_4,
      
    ],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id:"aaac",
    name: "Casual Summer Dress",
    category: "Women",
    subcategory: "Dresses",
    bestseller: false,
    date: "05.07.2025",
    description: "A lightweight and breezy dress, ideal for summer days.",
    img: [
      image_2,
      image_3,
      image_11,
      image_10,
      
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    price:300,
  },

    {
      id: "aaad",
      name: "Kids Cartoon Hoodie",
      category: "Kids",
      subcategory: "Winterwear",
      bestseller: true,
      date: "15.10.2025",
      description: "Warm and cozy hoodie with fun cartoon prints for kids.",
      img: [
        image_3,
        image_4,
        image_5,
        image_2,
        
      ],
      sizes: ["2T", "4T", "6", "8", "10"],
      price:305,
    },
    {
      id: 'aaaf',
      name: "Formal Shirt",
      category: "Men",
      subcategory: "Shirts",
      bestseller: true,
      date: "21.06.2025",
      description: "A premium cotton formal shirt suitable for office wear.",
      img: [
        image_4,
        image_5,
        image_2,
        image_1,
        
      ],
      sizes: ["S", "M", "L", "XL"],
      price:3004,
    },
    {
      id: 'aaag',
      name: "Elegant Party Gown",
      category: "Women",
      subcategory: "Dresses",
      bestseller: true,
      date: "18.12.2025",
      description: "An elegant evening gown with stunning embellishments.",
      img: [
        image_2,
        image_3,
        image_4,
        image_1,
      ],
      sizes: ["S", "M", "L", "XL"],
      price:3045,
    },
    {
      id: 'aaah',
      name: "Casual Sneakers",
      category: "Men",
      subcategory: "Bottomwear",
      bestseller: true,
      date: "10.03.2025",
      description: "Trendy and comfortable sneakers for everyday wear.",
      img: [
        image_6,
        image_6,
        image_6,
        image_6,
      
      ],
      sizes: ["7", "8", "9", "10", "11"],
      price:3045,
    },
    {
      id: 'aaak',
      name: "Floral Printed Skirt",
      category: "Women",
      subcategory: "Bottomwear",
      bestseller: false,
      date: "22.04.2025",
      description: "A fashionable floral skirt to enhance your casual look.",
      img: [
        image_7,
        image_7,
        image_7,
        image_7,

      ],
      sizes: ["XS", "S", "M", "L"],
      price:3045,
    },
    {
      id: 'aaal',
      name: "Kids Denim Jacket",
      category: "Kids",
      subcategory: "Jackets",
      bestseller: true,
      date: "30.08.2025",
      description: "A stylish denim jacket for kids, perfect for all seasons.",
      img: [
        image_8,
        image_8,
        image_8,
        image_8,
       
      ],
      sizes: ["2T", "4T", "6", "8", "10"],
      price:3047,
    },
    {
      id: 'aaaz',
      name: "Sports Running Shoes",
      category: "Men",
      subcategory: "Footwear",
      bestseller: false,
      date: "05.05.2025",
      description: "High-performance running shoes designed for comfort and speed.",
      img: [
        image_9,
        image_9,
        image_9,
        image_9,
       
      ],
      sizes: ["7", "8", "9", "10", "11"],
      price:3069,
    },
    {
      id: 'aaax',
      name: "Women’s Handbag",
      category: "Women",
      subcategory: "Accessories",
      bestseller: true,
      date: "15.06.2025",
      description: "A stylish handbag with ample storage space for daily use.",
      img: [
        image_10,
        image_10,
        image_10,
        image_10,
       
      ],
      sizes: ['xl','m','l','xxl' ],
      price:3009,
    },
    {
      id: 'aaax',
      name: "Boys Cargo Pants",
      category: "Kids",
      subcategory: "Bottomwear",
      bestseller: false,
      date: "02.09.2025",
      description: "Comfortable and durable cargo pants for boys.",
      img: [
        image_5,
        image_5,
        image_5,
        image_5,
      
      ],
      sizes: ["2T", "4T", "6", "8", "10"],
      price:3034,
    },
    {
      id: 'aaav',
      name: "Men’s Leather Jacket",
      category: "Men",
      subcategory: "Jackets",
      bestseller: true,
      date: "25.11.2025",
      description: "A classic leather jacket to complete your rugged look.",
      img: [
       image_11,
       image_11,
       image_11,
       image_11,

      ],
      sizes: ["S", "M", "L", "XL"],
      price:3034,
    },
    {
      id: 'aaab',
      name: "Women’s Workout Leggings",
      category: "Women",
      subcategory: "Activewear",
      bestseller: false,
      date: "07.07.2025",
      description: "Stretchable and breathable leggings for workouts.",
      img: [
       imgage_12,
       imgage_12,
       imgage_12,
       imgage_12,
     
      ],
      sizes: ["S", "M", "L", "XL"],
      price:3450,
    },
    {
      id: 'aaan',
      name: "Baby Romper",
      category: "Kids",
      subcategory: "Newborn",
      bestseller: true,
      date: "01.01.2025",
      description: "Soft and comfy romper for newborns.",
      img: [
       imgage_13,
       imgage_13,
       imgage_13,
       imgage_13,
   
      ],
      sizes: ["0-3M", "3-6M", "6-9M", "9-12M"],
      price:3670,
    },
    {
      id:'aaam',
      name: "Women’s Woolen Scarf",
      category: "Women",
      subcategory: "Accessories",
      bestseller: true,
      date: "20.10.2025",
      description: "A warm and stylish woolen scarf for winter.",
      img: [
        image_5,
        image_5,
        image_5,
        image_5,
     
      ],
      sizes: ['xl','l','xxl','m'],
      price:300,
    }
  ];
  