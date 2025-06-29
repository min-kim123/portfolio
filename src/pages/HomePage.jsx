import myPhoto from "../assets/pic.png";
import ExpCard from "../components/ExpCard";
import usc from "../assets/logos/usc.png"
import sep from "../assets/logos/sep.png"
import fe from "../assets/logos/fe.png"
import aspen from "../assets/logos/aspen.png";
import nyu from "../assets/logos/nyu.png";

import { Link } from "react-router-dom";

const experiences = [
  {
    image: usc,
    company: "USC Baum Family Makerspace",
    role: "Machinist",
    start: "May 2025",
    end: "Present",
    description: "Manufactured precision parts for the machine shop and USC FSAE using Bridgeport mills, including vise jaws, inboard brackets, clamps, and vise jaw stop plates. Used micrometers, test indicators, and edge finders to ensure precision in the thousandths",
  },
  {
    image: aspen,
    company: "Advanced Spacecraft Propulsion and Energy Laboratory",
    role: "Researcher",
    start: "May 2025",
    end: "Present",
    description: "",
  },
  {
    image: fe,
    company: "Formula SAE Electric",
    role: "Engineer",
    start: "Aug 2024",
    end: "Present",
    description: ["Performed Finite Element Analysis in NX to validate drivetrain components, ensuring stresses remained within acceptable Factor of Safety limits", "", ""],
  },
  {
    image: sep,
    company: "SEP @ USC",
    role: "Cohort Member",
    start: "Aug 2024",
    end: "Present",
    description: "",
  },
  {
    image: nyu,
    company: "New York University",
    role: "Computer Science & Business",
    start: "Aug 2023",
    end: "May 2024",
    description: "Transferred out after freshman year because I realized hardware was way cooler",
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
          I'm a third year Mechanical Engineering student at the University of Southern California. My interests lie in sustainable energy, neurotech, and aerospace.
        </p>
        <h2 className="text-xl"></h2>
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
