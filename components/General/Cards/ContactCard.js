import Link from "next/link";
import { ProfileIcon } from "../Icons";

const ContactCard = ({ firstName, lastName, href }) => {
  return (
    <div className="rounded-3xl shadow-xl w-40 bg-white">
      <Link href={href || "/"} passHref>
        <a className="w-full h-full p-5 block">
          <div className="w-full flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-gray-200">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <ProfileIcon />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-lg leading-tight">
              {firstName || "Stan"}
            </h2>
            <p className="text-sm">{lastName || "Lee"}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ContactCard;
