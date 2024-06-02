import { Suspense } from "react";
import AccordionComponent from "@/Components/Accordion/Accordion";
import ColorGenerator from "@/Components/RandomColorGenerator/ColorGenrator";
import StarRatingComponnet from "@/Components/StarRating/StarRating";
import ImageSlider from "@/Components/ImageSlider/ImageSlider";
import { getData } from "@/lib/dataFetch";
import ProductsList from "@/Components/LoadMore/Products";
import NavComponent from "@/Components/TreeView/NavComponent";
import menus from "@/Components/TreeView/data";
import QrGenerator from "@/Components/QRgenerator/QrGenerator";
import Scroll_Indicator from "@/Components/Scroll_Indicator/Scroll_Indicator";
import Autocomplete from "@/Components/AutoComplete/Autocomplete";
import Scroll from "@/Components/Scroll_To_Button/Scroll";
import Index from "@/Components/Scroll_To_Container/Index";
import App from "@/Components/FoodReciepe/App";
// import { App } from "@/Components/WeatherApp/App";

const url = "https://picsum.photos/v2/list?page=1&limit=5";
const productsUrl = `https://dummyjson.com/products?limit=20&select=title,price,thumbnail`;
const p_url = `https://dummyjson.com/products?limit=100`;

export default async function Home() {
  // const imageData = await getData(url);
  // const { products } = await getData(productsUrl);

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        {/* <AccordionComponent />
      <ColorGenerator />
      <StarRatingComponnet totalStars={5} />
      <ImageSlider data={imageData} /> */}
        {/* {products && <ProductsList products={products} />} */}
        {/* <NavComponent menus={menus} /> */}
        {/* <QrGenerator /> */}
        {/* <Scroll_Indicator /> */}
        {/* <Autocomplete /> */}
        {/* <Scroll /> */}
        {/* <Index /> */}
        {/* <App />
         */}
        <App />
      </Suspense>
    </>
  );
}
