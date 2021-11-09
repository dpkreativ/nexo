import { PhoneIcon, ProfileIcon } from "../Icons";

const ContactCard = () => {
  return (
    <div className="rounded-3xl p-5 shadow-md w-40">
      <div className="w-full flex justify-center mb-2">
        <div className="w-16 h-16 rounded-full bg-gray-400">
          <div className="w-full h-full flex items-center justify-center text-gray-200">
            <ProfileIcon />
          </div>
        </div>
      </div>
      <div className="text-center mb-2">
        <h2 className="font-bold text-lg">Lil Wayne</h2>
        <p>Chicken</p>
      </div>
      <div className="w-full flex justify-center">
        <div className="bg-indigo-300 w-10 h-10 rounded-full">
          <div className="h-full w-full flex items-center justify-center text-indigo-200">
            <PhoneIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
