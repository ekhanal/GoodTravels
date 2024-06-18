interface Destination {
  name: string;
  description: string;
  image: string;
}

interface Props {
  data: Destination[];
  // icon?: boolean;
}

const CardSection: React.FC<Props> = ({ data }) => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
      {data.map((item, index) => (
        <div key={index}>
          <div className="group rounded-lg overflow-hidden shadow-lg h-full">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 transform "
            />

            <div className="px-4 py-4 bg-white">
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <div className="flex justify-between items-center mt-2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
