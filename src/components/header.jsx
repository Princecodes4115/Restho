import { AiOutlineMail } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-[#04090C] w-full">
      <div className="container mx-auto w-80">
        <div className="flex justify-between py-2">
          <div className="">
            <p className="text-[#BF9444]">
              Opening hours:{" "}
              <span className="text-white">9:00 am to 10:00 pm</span>
            </p>
          </div>
          <div className="hidden lg:flex flex-row items-center space-x-4">
            <p className="text-white hover:text-[#BF9444] flex items-center">
              <AiOutlineMail className="mr-1" />
              info@example.com
            </p>
            <p className="text-white hover:text-[#BF9444] flex items-center">
              <MdLocationPin className="mr-1" />
              Road-01, Block-B, West London City
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
