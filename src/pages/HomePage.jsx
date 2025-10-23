import myPhoto from "../assets/pic.png";
import ExpCard from "../components/ExpCard";
import usc from "../assets/logos/usc.png";
import sep from "../assets/logos/sep.png";
import fe from "../assets/logos/fe.png";
// import aspen from "../assets/logos/aspen.png";
import nyu from "../assets/logos/nyu.png";

import { Link } from "react-router-dom";

const experiences = [
  {
    image: usc,
    company: "USC Baum Family Makerspace",
    role: "Machinist",
    start: "May 2025",
    end: "Present",
    description: [
      "Manufactured precision parts for various USC design teams using Bridgeport & Haas CNC mill and lathe",
      "Ensured precision as high as ±0.0005 in (0.0127 mm); used bore gauges, micrometers, test indicators, and edge finders",
    ],
  },
  {
    image: fe,
    company: "Formula SAE Electric",
    role: "Engineer",
    start: "Aug 2024",
    end: "Present",
    description: [
      "Designed and machined full suspension subassembly, including A-arm tubes, A-arm jig, weld cups, inboard brackets, and gussets, using NX (CAD/DFM), MasterCAM for G-code, and ANSYS for FEA",
      "Optimized process for manufacturing a-arm tubes, removing steps and cutting down machining time by 30%",
      "Created 20+ part drawings in NX, fully defining geometry and ensuring clarity for manufacturing",
      "Integrated and routed brake lines, manufactured carbon fiber parts, assembled drivetrain components, including the motor, motor differential mounts, and eccentric rings, ensuring proper alignment and secure fit",
      "Generated material cost report and ensured optimal material selection for performance and safety",
    ],
  },
  {
    image: sep,
    company: "SEP @ USC",
    role: "Software & Product Engineer",
    start: "Aug 2024",
    end: "Present",
    description: [
      "Led a 3-person team to develop a platform to connect patients with professional medical bill advocates with the ultimate goal of automating the entire medical bill negotiation process",
      "Communicated with potential customers to validate product-market fit and improve user experience",
    ],
  },
  {
    image: nyu,
    company: "New York University",
    role: "Computer Science & Business",
    start: "Aug 2023",
    end: "May 2024",
    description: [
      "Studied Computer Science and Business fundamentals",
      "Transferred out after freshman year because I realized hardware was way cooler",
    ],
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
          Southern California. I have experience in hardware, software,
          machining, and electronics. Feel free to reach out about anything!
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
