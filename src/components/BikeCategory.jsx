import bikeCategory from "../assets/img/bike-category.png";
import bikeCategory2 from "../assets/img/bike-category2.png";

const BikeCategory = () => {
  return (
    <div className="font-butler mt-[30px] lg:mt-[109px] px-[20px] lg:px-[97px] lg:flex justify-between gap-[50px]">
      <div>
        <h2 className="text-[30px] lg:text-[64px] lg:max-w-[530px] text-center pb-[20px]">
          Our Most Popular bike category
        </h2>
        <img className="m-auto" src={bikeCategory} alt="" />
      </div>
      <div>
        <div className="lg:pb-[50px] text-center lg:text-right lg:pr-[180px]">
          <h4 className="border-b-[4px] border-[#EB4C56] lg:ml-[50%] text-[28px]">
            Category
          </h4>
          <p className="pt-[24px]">Mountain Bikes</p>
          <p className="pt-[15px]">Road Bikes</p>
          <p className="pt-[15px]">Hybrid Bikes</p>
          <p className="pt-[15px]">Kids Bikes</p>
        </div>
        <img className='py-[30px] lg:py-0 lg:pb-[135px]' src={bikeCategory2} alt="" />
      </div>
    </div>
  );
};

export default BikeCategory;
