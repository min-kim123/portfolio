import { Link } from "react-router-dom";

export default function ProjectCard({
  title,
  description,
  link,
  picture,
  guide,
  ware,
}) {
  return (
    <Link to={link}>
      <div className="py-6">
        <div className="flex flex-col md:flex-row gap-4 transform transition duration-200 hover:scale-[0.99] cursor-pointer">
          {/* Image */}
          <img
            src={picture}
            alt={title}
            className="w-full md:w-1/3 h-48 object-cover rounded-md"
          />

          {/* Text */}
          <div className="flex-1 text-left">
            <h2 className="text-xl mb-1">{title}</h2>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-2">
              {guide && (
                <span className="inline-block text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                  Guide
                </span>
              )}
              {/* {ware && (
                <span
                  className={`inline-block text-xs px-2 py-1 rounded ${
                    ware === "hardware"
                      ? "bg-green-100 text-green-600"
                      : ware === "software"
                      ? "bg-purple-100 text-purple-600"
                      : ""
                  }`}
                >
                  {ware.charAt(0).toUpperCase() + ware.slice(1)}
                </span>
              )} */}
            </div>

            <p className="text-gray-600 mb-2">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
