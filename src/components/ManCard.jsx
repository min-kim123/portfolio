export default function ManCard({ name, image, description }) {
  return (
    <div className="py-4">
      <div className="flex flex-col gap-2 transform transition duration-200">
        <img src={image} className="w-full h-48 object-cover rounded-md" />
        <div className="text-left">
          <h2 className="text-lg mb-1">{name}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
