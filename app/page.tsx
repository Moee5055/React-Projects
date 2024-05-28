import { Suspense } from "react";
import AccordionComponent from "@/Components/Accordion/Accordion";
import ColorGenerator from "@/Components/RandomColorGenerator/ColorGenrator";
import StarRatingComponnet from "@/Components/StarRating/StarRating";
import ImageSlider from "@/Components/ImageSlider/ImageSlider";
import { getData } from "@/lib/dataFetch";
import ProductsList from "@/Components/LoadMore/Products";

const url = "https://picsum.photos/v2/list?page=1&limit=5";
const productsUrl = `https://dummyjson.com/products?limit=20&select=title,price,thumbnail`;

export default async function Home() {
  const imageData = await getData(url);
  const { products } = await getData(productsUrl);

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        {/* <AccordionComponent />
      <ColorGenerator />
      <StarRatingComponnet totalStars={5} />
      <ImageSlider data={imageData} /> */}
        {products && <ProductsList products={products} />}
      </Suspense>
    </>
  );
}
