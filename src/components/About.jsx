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
    <div className="bg-[#1B1A1F] pt-[117px] flex  text-white relative">
      <div className="px-[80px]">
        <div className="px-[50px]">
          <div className="font-realityHyper uppercase">
            <h1 className="text-[105px]">Lamere</h1>
            <p className="text-[50px] text-right pb-[20px]">Cycles</p>
          </div>
          <div className="font-labGrotesque max-w-[388px]">
            <p className="text-[22px]">
              We build only the best, customized to your exacting demands
            </p>
            <button className="mt-[40px] py-[12px] px-[32px] bg-[#EB4C56]">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between pr-[79px]">
          <div className="py-[98px] flex flex-col max-w-[16px] gap-[28px]">
            <img className="cursor-pointer" src={google} alt="google" />
            <img className="cursor-pointer" src={twitter} alt="twitter" />
            <img className="cursor-pointer" src={linkendin} alt="linkendin" />
            <img className="cursor-pointer" src={instagram} alt="instagram" />
          </div>
          <img className="h-[152px] cursor-pointer" src={video} alt="video" />
        </div>
      </div>

      <div className=" bg-[#2F2E30] h-[576px]">
        <img className="absolute right-[0px] top-[40px] z-10" src={bike} alt="bike" />
        <img className="absolute right-[0px] top-[140px]" src={bgBike} alt="bg" />
        <img className="absolute right-[2px] bottom-[60px]" src={polygon} alt="" />
        <img className="absolute right-[2px] bottom-[80px]" src={polygon} alt="" />
        <img className="absolute right-[2px] bottom-[100px]" src={polygon} alt="" />
        <img className="absolute right-[2px] bottom-[120px]" src={polygon} alt="" />
        <img className="absolute right-[22px] bottom-[60px]" src={polygon} alt="" />
        <img className="absolute right-[22px] bottom-[80px]" src={polygon} alt="" />
        <img className="absolute right-[22px] bottom-[100px]" src={polygon} alt="" />
        <img className="absolute right-[22px] bottom-[120px]" src={polygon} alt="" />
        <img className="absolute right-[42px] bottom-[60px]" src={polygon} alt="" />
        <img className="absolute right-[42px] bottom-[80px]" src={polygon} alt="" />
        <img className="absolute right-[42px] bottom-[100px]" src={polygon} alt="" />
        <img className="absolute right-[42px] bottom-[120px]" src={polygon} alt="" />
        <img className="absolute right-[62px] bottom-[60px]" src={polygon} alt="" />
        <img className="absolute right-[62px] bottom-[80px]" src={polygon} alt="" />
        <img className="absolute right-[62px] bottom-[100px]" src={polygon} alt="" />
        <img className="absolute right-[62px] bottom-[120px]" src={polygon} alt="" />
        <img className="absolute right-[82px] bottom-[60px]" src={polygon} alt="" />
        <img className="absolute right-[82px] bottom-[80px]" src={polygon} alt="" />
        <img className="absolute right-[82px] bottom-[100px]" src={polygon} alt="" />
        <img className="absolute right-[82px] bottom-[120px]" src={polygon} alt="" />
        <img className="absolute right-[102px] bottom-[60px]" src={polygon} alt="" />
        <img className="absolute right-[102px] bottom-[80px]" src={polygon} alt="" />
        <img className="absolute right-[102px] bottom-[100px]" src={polygon} alt="" />
        <img className="absolute right-[102px] bottom-[120px]" src={polygon} alt="" />
        <img className="absolute right-[122px] bottom-[60px]" src={polygon} alt="" />
        <img className="absolute right-[122px] bottom-[80px]" src={polygon} alt="" />
        <img className="absolute right-[122px] bottom-[100px]" src={polygon} alt="" />
        <img className="absolute right-[122px] bottom-[120px]" src={polygon} alt="" />
      </div>
    </div>
  );
};

export default About;
