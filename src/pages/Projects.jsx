import ProjectCard from "../components/ProjectCard";
import advocareImg from "../assets/advocare.png";
import netlypicImg from "../assets/netlypic.png";
import memtilesImg from "../assets/memtiles.png";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Electric Guitar (Telecaster)",
    description:
      "Played a lot in high school & wanted to get back into it so I decided to make one! Made from scratch, including the pickups.",
    link: "/electric-guitar",
    picture: "",
    guide: true,
    ware: "hardware",
  },
  {
    title: "Amplifier",
    description: "Needed an amp for the electric guitar.",
    link: "/amplifier",
    picture: "",
    guide: false,
    ware: "hardware",
  },
  {
    title: "Electric Guitar Pickup Winder",
    description:
      "Needed a way to wind copper coil thousands of times for the pickups.",
    link: "/pickup-winder",
    picture: "",
    guide: true,
    ware: "hardware",
  },
  {
    title: "Advocare",
    description:
      "Social media for college clubs. Schedule coffee chats, apply to clubs, share fun events.",
    link: "/advocare",
    picture: netlypicImg,
    guide: false,
    ware: "software",
  },
  {
    title: "Netly",
    description: "Fun little memory game!",
    link: "/netly",
    picture: memtilesImg,
    guide: false,
    ware: "software",
  },
  {
    title: "Memory Tiles",
    description:
      "Platform to connect patients with the best match medical bill advocate who can get their bills lowered. ",
    link: "/memtiles",
    picture: advocareImg,
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
