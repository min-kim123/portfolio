import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import advocareImg from "../assets/advocare.png";
import netlypicImg from "../assets/netlypic.png";
import memtilesImg from "../assets/memtiles.png";
import guitar from "../assets/guitar1.jpeg";
import pcb from "../assets/pcb1.png";
// import schematic from "../assets/schematic.png";
import pickupwinder from "../assets/pickupwinder.png";
// import bracketsImg from "../assets/brackets/bracket1.jpeg";

const projects = [
  {
    title: "Brackets",
    description:
      "Design and manufacturing of custom brackets for Formula SAE Electric.",
    link: "/brackets",
    picture: guitar, // Placeholder - replace with bracketsImg when available
    guide: false,
    blog: false,
    ware: "hardware",
  },
  {
    title: "Electric Guitar",
    description:
      "Played a lot in high school & wanted to get back into it so I decided to make one!",
    link: "/electric-guitar",
    picture: guitar,
    guide: true,
    ware: "hardware",
  },
  {
    title: "Electric Guitar Pickup Winder",
    description:
      "Needed a way to wind copper coil thousands of times for the pickups.",
    link: "/pickup-winder",
    picture: pickupwinder,
    guide: true,
    ware: "hardware",
  },
  {
    title: "Amplifier",
    description: "Currently building an electric guitar amp!",
    link: "/amp",
    picture: pcb,
    guide: true,
    inProgress: false,
    ware: "hardware",
  },
  {
    title: "Netly",
    description:
      "Social media for college clubs. Schedule coffee chats, apply to clubs, share fun events.",
    link: "/netly",
    picture: netlypicImg,
    guide: false,
    blog: false,
    ware: "software",
  },
  // {
  //   title: "Advocare",
  //   description:
  //     "Platform to connect patients with the best match medical bill advocate who can get their bills lowered. ",
  //   link: "/advocare",
  //   picture: advocareImg,
  //   guide: false,
  //   blog: true,
  //   ware: "software",
  // },
  {
    title: "Memory Tiles",
    description:
      "My first ever CS personal project! See what level you can get to:)",
    link: "/memtiles",
    picture: memtilesImg,
    guide: false,
    ware: "software",
  },
];

export default function Projects() {
  return (
    <>
      <div>
        <div className="mx-6 mt-4">
          <h1 className="text-3xl mb-2 text-left">Latest Projects</h1>
          <div className="divide-y divide-gray-300">
            {projects.map((project, index) => (
              <div key={index}>
                {" "}
                {/* This wrapper enables divide-y to work */}
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  picture={project.picture}
                  guide={project.guide}
                  blog={project.blog}
                  inProgress={project.inProgress}
                  ware={project.ware}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
