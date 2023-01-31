import bikeCategory from "../assets/img/bike-category.png";
import bikeCategory2 from "../assets/img/bike-category2.png";

const BikeCategory = () => {
  return (
    <div className="font-butler mt-[109px] px-[97px] flex justify-between gap-[50px]">
      <div>
        <h2 className="text-[64px] max-w-[530px]">
          Our Most Popular bike category
        </h2>
        <img src={bikeCategory} alt="" />
      </div>
      <div>
        <div className="pb-[50px] text-right pr-[180px]">
          <h4 className="border-b-[4px] border-[#EB4C56] ml-[75%] text-[28px]">
            Category
          </h4>
          <p className="pt-[24px]">Mountain Bikes</p>
          <p className="pt-[15px]">Road Bikes</p>
          <p className="pt-[15px]">Hybrid Bikes</p>
          <p className="pt-[15px]">Kids Bikes</p>
        </div>
        <img className='pb-[135px]' src={bikeCategory2} alt="" />
      </div>
    </div>
  );
};

export default BikeCategory;
