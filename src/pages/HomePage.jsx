import myPhoto from "../assets/pic.png";
import ExpCard from "../components/ExpCard";
import aspen from "../assets/aspen.png";
import { Link } from "react-router-dom";

const experiences = [
  {
    image: "",
    company: "USC Baum Family Makerspace",
    role: "Machinist",
    start: "May 2025",
    end: "Present",
    description: "",
  },
  {
    image: "aspen",
    company: "Advanced Spacecraft Propulsion and Energy Laboratory",
    role: "Researcher",
    start: "May 2025",
    end: "Present",
    description: "",
  },
  {
    image: "",
    company: "Formula SAE Electric",
    role: "Team Member",
    start: "May 2025",
    end: "Present",
    description: ["Performed Finite Element Analysis in NX to validate drivetrain components, ensuring stresses remained within acceptable Factor of Safety limits", "", ""],
  },
  {
    image: "",
    company: "SEP @ USC",
    role: "Cohort Member",
    start: "May 2025",
    end: "Present",
    description: "",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-6">
      <div className="w-full md:w-1/3">
        <img
          src={myPhoto}
          alt="Min Kim"
          className="rounded-md w-full object-cover"
        />
      </div>

      {/* Right: Text */}
      <div className="w-full md:w-2/3 text-left space-y-4">
        <h1 className="text-2xl ">Hey, I'm Min!</h1>
        <p>
          I'm a third year Mechanical Engineering student at the University of
          Southern California.
        </p>
        <h2 className="text-xl">Experiences</h2>
        <div className="divide-y divide-gray-300">
          {experiences.map((experience, index) => (
            <div key={index}>
              {" "}
              {/* This wrapper enables divide-y to work */}
              <ExpCard
                image={experience.image}
                company={experience.company}
                role={experience.role}
                start={experience.start}
                end={experience.end}
                description={experience.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
