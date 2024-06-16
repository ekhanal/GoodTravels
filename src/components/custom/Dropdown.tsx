import Input from "./Input";

const Dropdown = () => {
  const Data = [
    "Tribhuvan International Airport (KTM) - Kathmandu, Nepal",
    "Indira Gandhi International Airport (DEL) - Delhi, India",
    "Chhatrapati Shivaji Maharaj International Airport (BOM) - Mumbai, India",
    "Kempegowda International Airport (BLR) - Bangalore, India",
    "Netaji Subhas Chandra Bose International Airport (CCU) - Kolkata, India",
  ];

  return (
    <div className="flex flex-col justify-center mt-5">
      <Input placeholder={"demo"} className={"text-black"} type={"text"} />
      {Data.map((airport, index) => (
        <button key={index} value={airport} className="text-blue-600 bg-white">
          {airport}
        </button>
      ))}
    </div>
  );
};

export default Dropdown;
