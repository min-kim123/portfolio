import ManCard from "../components/ManCard";

const parts = [
  {
    name: "Inboard Brackets for USC Formula SAE",
    image: "",
    description: "Did three at once!",
  },
  {
    name: "Vise Jaw",
    image: "",
    description: "",
  },
  {
    name: "Vise Jaw Stop Plates",
    image: "",
    description: "",
  },
];

export default function Manufacturing() {
  return (
    <div className="mx-6 mt-8">
      <h1 className="text-3xl mb-3 text-left">Manufacturing</h1>
      <div className="text-left mb-6">
        Here are some of the parts I've made working as a Machinist at USC
        Makerspace!
      </div>

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
