import google from "../assets/icons/google.svg";
import twitter from "../assets/icons/twitter.svg";
import linkendin from "../assets/icons/linkendin.svg";
import instagram from "../assets/icons/instagram.svg";
import video from "../assets/img/video.jpg";
import bike from "../assets/img/bike.png";
import bgBike from "../assets/img/bgBike.png";
import polygon from "../assets/img/polygon.svg";


const About = () => {
  return (
    <div className="bg-[#1B1A1F] pt-[50px] md:pt-[117px] sm:flex  text-white relative">
      <div className="px=[40px] md:px-[80px]">
        <div className="px-[50px]">
          <div className="font-realityHyper uppercase">
            <h1 className="xl:text-[105px] lg:text-[70px] md:text-right sm:text-[60px] text-[50px]">Lamere</h1>
            <p className="xl:text-[50px] text-[30px] lg:text-right sm:text-center pb-[20px]">Cycles</p>
          </div>
          <div className="font-labGrotesque max-w-[388px]">
            <p className="xl:text-[22px] s,:text-[18px] sm-w-[10px]">
              We build only the best, customized to your exacting demands
            </p>
            <button className="mt-[40px] py-[12px] px-[32px] bg-[#EB4C56]">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between pr-[30px] md:pr-[79px]">
          <div className="pl-[20px] py-[85px] flex flex-col gap-[28px]">
            <img className="w-[16px]cursor-pointer" src={google} alt="google" />
            <img className="w-[16px] cursor-pointer" src={twitter} alt="twitter" />
            <img className="w-[16px] cursor-pointer" src={linkendin} alt="linkendin" />
            <img className="w-[16px] cursor-pointer" src={instagram} alt="instagram" />
          </div>
          <img className="h-[152px] cursor-pointer" src={video} alt="video" />
        </div>
      </div>

      <div className=" bg-[#2F2E30] md:h-[576px]">
        <img className="sm:absolute right-[0px] top-[40px] z-10 xl:w-[55%] lg:w-[50%] sm:w-[35%]" src={bike} alt="bike" />
        <img className="sm:absolute right-[0px] top-[140px] xl:w-[45%] lg:w-[35%] md:w-[30%] w-[20%]" src={bgBike} alt="bg" />
        <img className="sm:block hidden sm:absolute sm:right-[2px] bsm:ottom-[50px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[2px] bsm:ottom-[30px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[2px] bsm:ottom-[70px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[2px] bsm:ottom-[90px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[22px] sm:bottom-[30px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[22px] sm:bottom-[50px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[22px] sm:bottom-[70px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[22px] sm:bottom-[90px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[42px] sm:bottom-[30px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[42px] sm:bottom-[50px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[42px] sm:bottom-[70px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[42px] sm:bottom-[90px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[62px] sm:bottom-[30px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[62px] sm:bottom-[50px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[62px] sm:bottom-[70px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[62px] sm:bottom-[90px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[82px] sm:bottom-[30px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[82px] sm:bottom-[50px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[82px] sm:bottom-[70px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[82px] sm:bottom-[90px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[102px] sm:bottom-[30px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[102px] sm:bottom-[50px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[102px] sm:bottom-[70px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[102px] sm:bottom-[90px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[122px] sm:bottom-[30px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[122px] sm:bottom-[50px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[122px] sm:bottom-[70px]" src={polygon} alt="" />
        <img className="sm:block hidden sm:absolute sm:right-[122px] sm:bottom-[90px]" src={polygon} alt="" />
      </div>
    </div>
  );
};

export default About;
