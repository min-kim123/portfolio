export default function ManCard({ name, image, description }) {
  return (
    <div className="py-6">
      <div className="flex flex-col md:flex-row gap-4 transform transition duration-200 hover:scale-[0.99] cursor-pointer">
        {/* Image */}
        <img
          src={image}
          className="w-full md:w-1/3 h-48 object-cover rounded-md"
        />

        {/* Text */}
        <div className="flex-1 text-left">
          <h2 className="text-xl mb-1">{name}</h2>
          <p className="text-gray-600 mb-2">{description}</p>
        </div>
      </div>
    </div>
  );
}
