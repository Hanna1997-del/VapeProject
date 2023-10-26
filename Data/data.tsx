import {
    ProductProps, ProductImgProps
} from "@/types";

import {AiFillStar} from "react-icons/ai"

const products: ProductProps[] =[
    {id:1, title: "Refreshing Mint" , price: 30000 , 
    discount: 45000, points: 600,img:"/images/product.png",percentage: 25},

    {id:2, title: "Refreshing Mint" , price: 30000 , 
    discount: 45000,  points: 600,img:"/images/product.png",percentage: 25},

    {id:3, title: "Refreshing Mint" , price: 30000 , 
    discount: 45000,  points: 600,img:"/images/product.png",percentage: 25},

    {id:4, title: "Refreshing Mint" , price: 30000 , 
    discount: 45000,  points: 600,img:"/images/product.png",percentage: 25},

    {id:5, title: "Refreshing Mint" , price: 30000 , 
    discount: 45000,  points: 600,img:"/images/product.png",percentage: 25},

    {id:6, title: "Refreshing Mint" , price: 30000 , 
    discount: 45000,  points: 600,img:"/images/product.png",percentage: 25},

    {id:7, title: "Refreshing Mint" , price: 30000 , 
    discount: 45000,  points: 600,img:"/images/product.png",percentage: 25},

    {id:8, title: "Refreshing Mint" , price: 30000 , 
    discount: 45000,  points: 600,img:"/images/product.png",percentage: 25},
];

const image: ProductImgProps[] =[
    {id:1, img:"/images/product.png"},
    {id:2, img:"/images/product.png"},
    {id:3, img:"/images/product.png"},
    {id:4, img:"/images/product.png"},
]

export {products,image};