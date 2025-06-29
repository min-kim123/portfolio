export default function ExpCard({ image, company, role, start, end, description }) {
  return (
    <div className="py-6">
      <div className="flex flex-col md:flex-row gap-4 transform transition duration-200 hover:scale-[0.99] cursor-pointer">
        {/* Image */}
        <img
          src={image}
          className="w-12 h-12 object-cover rounded-md"
        />

        {/* Text */}
        <div className="flex-1 text-left">
          <h2 className="text-lg mb-1">
            {role} <span className="text-gray-600">| {company}</span>
          </h2>
          <p className="text-gray-600 mb-2">{start} - {end}</p>
          <p className="text-gray-600 mb-2">{description}</p>
        </div>
      </div>
    </div>
  );
}
