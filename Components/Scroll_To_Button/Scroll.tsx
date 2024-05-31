import { getData } from "@/lib/dataFetch";
import DisplayList from "./DisplayList";

const url = "https://dummyjson.com/products?limit=50&select=title,price";

const Scroll = async () => {
  const { products } = await getData(url);
  return (
    <div className="grid place-content-center py-[3rem] gap-3">
      Scroll To Top and Bottom Features
      <p>This is the top section</p>
      <DisplayList data={products} />
    </div>
  );
};

export default Scroll;
