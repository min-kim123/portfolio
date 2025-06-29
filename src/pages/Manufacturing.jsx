import ManCard from "../components/ManCard";
import stop_plates from "../assets/machining/stop_plates.png";
import inboard from "../assets/machining/inboard.png";

const parts = [
  {
    name: "Inboard Brackets",
    image: inboard,
    description: "For USC's Formula SAE team—did three at once!",
  },
  {
    name: "Vise Jaw",
    image: "",
    description: "",
  },
  {
    name: "Vise Jaw Stop Plates",
    image: stop_plates,
    description: "",
  },
];

export default function Manufacturing() {
  return (
    <div className="mx-6 mt-4">
      <h1 className="text-3xl mb-3 text-left">Manufacturing</h1>
      {/* <div className="text-left mb-2">
        Here are some of the parts I've made working as a Machinist at USC
        Makerspace!
      </div> */}
      <div className="text-left mb-2">
        What I've learned about designing for manufacturability:
      </div>
      <ul className="list-disc list-inside mb-2 space-y-2 text-left">
        <li>
          Reduce part complexity as much as possible for faster machining
        </li>
        <li>
          Use standard stock sizes and materials to reduce material waste and cost
        </li>
        <li>
          Avoid thin walls
        </li>
        <li>
          Consider tool access and cutting paths when designing complex
          geometries
        </li>
        <li>
          Avoid sharp internal corners that require special tooling or multiple
          operations
        </li>
      </ul>

      {/* 2-column grid on medium screens and up */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {parts.map((part, index) => (
          <ManCard
            key={index}
            name={part.name}
            image={part.image}
            description={part.description}
          />
        ))}
      </div>
    </div>
  );
}
