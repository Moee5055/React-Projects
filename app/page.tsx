import { Suspense } from "react";
import AccordionComponent from "@/Components/Accordion/Accordion";
import ColorGenerator from "@/Components/RandomColorGenerator/ColorGenrator";
import StarRatingComponnet from "@/Components/StarRating/StarRating";

export default function Home() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}></Suspense>
      {/* <AccordionComponent /> */}
      {/* <ColorGenerator /> */}
      <StarRatingComponnet />
    </>
  );
}
