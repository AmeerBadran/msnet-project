import SectionTitle from "../../ui/SectionTitle";
import ProductCard from "../../features/ProductCard";
import ProductCarousel from "../../features/ProductCarousel";
import { productDataBsetSeller } from "../../../constants/productDataBsetSeller";
const ForBeginners = () => {
  return (
    <section>
      <SectionTitle title="لجميع المبتدئين" />
      <ProductCarousel
        title="Featured Products"
        products={productDataBsetSeller}
        renderCard={(product) => <ProductCard {...product} />}
      />
    </section>
  );
};

export default ForBeginners;
