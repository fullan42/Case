import Link from "next/link";
import Image from "next/image";
import { BsJustify } from "react-icons/bs";

const NavigationMobile = () => {
  return (
    <div className="sm:hidden flex justify-between">
      <div className="flex items-center">
        <BsJustify className="cursor-pointer text-2xl" />
      </div>
    </div>
  );
};

export default NavigationMobile;
