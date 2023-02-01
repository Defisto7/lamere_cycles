import product1 from "../assets/img/product1.png";
import product2 from "../assets/img/product2.png";
import product3 from "../assets/img/product3.png";
import product4 from "../assets/img/product4.png";

const Product = () => {
  return (
    <div>
      <div className="lg:flex justify-between font-butler px-[25px] lg:px-[79px]">
        <div>
          <h3 className="text-[30px] lg:text-[64px] lg:max-w-[530px] text-center lg:text-left pb-[20px]">
            Explore Our Product
          </h3>
        </div>
        <div>
          <p className="max-w-[480px] text-[22px] lg:pr-[30px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-[20px] lg:gap-[40px] lg:justify-center xl:justify-end lg:pr-[90px]">
        <div className="relative">
          <img className="max-h-none lg:max-w-none relative" src={product1} alt="" />
          <p className="absolute bottom-[24px] xl:bottom-[264px] left-[20px]">Road helmet</p>
          <p className="absolute bottom-[5px] xl:bottom-[235px] left-[20px]">$60</p>
        </div>
        <div className="relative">
          <img src={product3} alt="" />
          <p className="absolute bottom-[24px] left-[20px]">Road helmet</p>
          <p className="absolute bottom-[5px] left-[20px]">$60</p>
        </div>
        <div className="relative">
          <img src={product2} alt="" />
          <p className="absolute bottom-[24px] left-[20px]">Road helmet</p>
          <p className="absolute bottom-[5px] left-[20px]">$60</p>
        </div>
        <div className="relative">
          <img src={product4} alt="" />
          <p className="absolute bottom-[24px] left-[20px]">Road helmet</p>
          <p className="absolute bottom-[5px] left-[20px]">$60</p>
        </div>
      </div>
      <div className="flex justify-center py-[60px]">
        <button className="text-[20px] border-2 py-4 px-8 border-black">Explore All</button>
      </div>
    </div>
  );
};

export default Product;
