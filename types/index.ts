 type ProductProps ={
      id: number;
      title: string;
      price: number;
      discount: number;
     
      points: number;
      img: string;
      percentage: number;
 }
 type ProductImgProps ={
  id:number;
  img: string;
 }
 export type ElementState =
  | undefined
  | "loading"
  | "disable"
  | "error"
  | "success"
    
  
  | null;
   

  export type {
    ProductProps,
   ProductImgProps
  };

