import React from "react";
import BestSellerSection from "../components/pages/home/BestSellerSection";
import ForBeginners from "../components/pages/home/ForBeginners";
import ProductSection from "../components/pages/product/ProductInfoSection";

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
