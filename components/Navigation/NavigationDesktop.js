import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";

const NavigationDesktop = ({ links }) => {
  console.log("Links: ", links);
  return (
    <div className="hidden sm:flex justify-between">
      <ul className="flex gap-12 w-full items-center">
        {links.map((link) => (
          <Link key={link.slug} href={`/${link.slug}`}>
            <li className="cursor-pointer">{link.name}</li>
          </Link>
        ))}
      </ul>
      <div className="flex items-center">
        <BsFillMoonStarsFill className="cursor-pointer" />
      </div>
    </div>
  );
};

export default NavigationDesktop;
