import SectionTitle from "../../ui/SectionTitle";
import ProductCard from "../../features/ProductCard";
import ProductCarousel from "../../features/ProductCarousel";
import { productDataBsetSeller } from "../../../constants/productDataBsetSeller";
const BestSellerSection = () => {
  return (
    <section className="py-10 relative">
      <SectionTitle title="أفضل البائعين لدينا" />
      <ProductCarousel
        title="Featured Products"
        products={productDataBsetSeller}
        renderCard={(product) => <ProductCard {...product} />}
      />
    </section>
  );
};

export default BestSellerSection;
