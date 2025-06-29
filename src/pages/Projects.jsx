import ProjectCard from "../components/ProjectCard";
import advocareImg from "../assets/advocare.png";
import netlypicImg from "../assets/netlypic.png";
import memtilesImg from "../assets/memtiles.png";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Electric Guitar",
    description:
      "Platform to connect patients with the best match medical bill advocate who can get their bills lowered. ",
    link: "/electric-guitar",
    picture: advocareImg,
    guide: true,
  },
  {
    title: "Amplifier",
    description:
      "Social media for college clubs. Schedule coffee chats, apply to clubs, share fun events.",
    link: "/amplifier",
    picture: netlypicImg,
    guide: false,
  },
  {
    title: "Electric Guitar Pickup Winder",
    description: "Fun little memory game!",
    link: "/pickup-winder",
    picture: memtilesImg,
    guide: true,
  },
  {
    title: "Advocare",
    description:
      "Social media for college clubs. Schedule coffee chats, apply to clubs, share fun events.",
    link: "/advocare",
    picture: netlypicImg,
    guide: false,
  },
  {
    title: "Netly",
    description: "Fun little memory game!",
    link: "/netly",
    picture: memtilesImg,
    guide: true,
  },
  {
    title: "Memory Tiles",
    description:
      "Platform to connect patients with the best match medical bill advocate who can get their bills lowered. ",
    link: "/memtiles",
    picture: advocareImg,
    guide: false,
  },
];

export default function Projects() {
  return (
    <>
      <div>
        <div className="mx-6 mt-8">
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
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
