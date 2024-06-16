interface Props {
  data: Destination[];
}
interface Destination {
  name: string;
  description: string;
  image: string;

}

const CardSection: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
      {data.map((item, index) => (
        <div key={index}>
          <div className="rounded-lg overflow-hidden shadow-lg h-full">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="px-4 py-4 bg-white">
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <div className="flex justify-between items-center mt-2">
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
