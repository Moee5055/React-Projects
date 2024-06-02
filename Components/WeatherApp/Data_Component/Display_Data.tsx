"use client";

const Display_Data = () => {
  return (
    <section className="max-w-sm mx-auto space-y-3 tracking-wider">
      <div className="space-y-3 text-center">
        <p className="font-bold text-xl">London, GB</p>
        <p>
          Sunday, <i>December 17</i>, 2023
        </p>
      </div>
      <div className="text-center">
        <h2 className="text-5xl font-extrabold">283.83</h2>
        <p className="">overcast clouds</p>
      </div>
      <div>
        <div className="flex justify-between">
          <p>4.63</p>
          <p>88%</p>
        </div>
        <div className="flex justify-between">
          <p>Wind Speed</p>
          <p>Humidity</p>
        </div>
      </div>
    </section>
  );
};

export default Display_Data;
