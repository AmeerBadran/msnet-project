import React from "react";
import ProductSection from "../components/pages/product/productInfoSection";
import BestSellerSection from "../components/pages/home/BestSellerSection";
import ForBeginners from "../components/pages/home/ForBeginners";

const Product = () => {
  return (
    <div>
      <ProductSection />
      <BestSellerSection />
      <ForBeginners />
    </div>
  );
};

export default Product;
