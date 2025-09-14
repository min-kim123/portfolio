import React from "react";
import pcbschematic from "../assets/amp/pcbschematic.png";
import pcb from "../assets/pcb.png";

// Sidebar section titles
const sections = [
  { id: "overview", label: "Overview" },
  { id: "design", label: "Design" },
];

// Design steps
const designSteps = [
  {
    title: "Circuit Design",
    images: [pcbschematic],
    text: "I used KiCAD to create the schematic for the power amp.",
  },
  {
    title: "PCB Design",
    images: [pcb],
    text: "Create the PCB design and layout considering signal integrity, power distribution, and thermal management.",
  },
];

// Overview content
const overview = {
  components: [
    "Nelson Pass Amp Camp components",
    "PCB (that we will make and order)",
    "Heat sink",
    "Wood for chassis",
  ],
  tools: ["Soldering iron", "Multimeter", "Drill and bits"],
};

function Step({ title, images = [], text, link, index }) {
  return (
    <li className="flex items-start gap-3">
      <span className="font-bold text-lg min-w-[2rem]">{index + 1}.</span>
      <div className="flex-1">
        <div className="mb-2 font-bold">{title}</div>
        <div className="flex gap-4 mb-2 flex-wrap">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              className="w-full md:w-1/3 h-48 object-cover rounded-sm"
            />
          ))}
        </div>
        {text && (
          <p>
            {text}
            {link && (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline ml-1"
              >
                {link.text}
              </a>
            )}
          </p>
        )}
      </div>
    </li>
  );
}

function ListSection({ title, items }) {
  return (
    <>
      <p className="font-semibold mb-2">{title}</p>
      <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default function Amplifier() {
  return (
    <div className="mx-6 mt-4">
      <h1 className="text-3xl mb-3 text-left">Amplifier</h1>
      <div className="flex p-6">
        {/* Sidebar */}
        <div className="hidden md:block w-1/4 pr-4 sticky top-6 h-fit">
          <nav className="flex flex-col space-y-2 text-left">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="hover:underline"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 space-y-12 text-left default-p-font">
          {/* Overview */}
          <section id="overview" className="section-anchor">
            <h2 className="text-2xl mb-2">Overview</h2>
            <p className="mb-4">
              My main goal with making this amplifier was to gain experience in
              electronics, especially with designing and ordering PCBs. I also
              didn't have an amp for the electric guitar I built, so I thought
              it would be the perfect electronics project.
              <br />
              After consulting my audiophile friend, I decided to go with the
              Nelson Pass Amp Camp circuit design for the power amp (
              <a
                href="https://www.firstwatt.com/wp-content/uploads/2023/12/art_amp_camp_1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                https://www.firstwatt.com/wp-content/uploads/2023/12/art_amp_camp_1.pdf
              </a>
              ), and this circuit design by Rod Elliot for the preamp (
              <a
                href="https://www.firstwatt.com/wp-content/uploads/2023/12/art_amp_camp_1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                https://sound-au.com/project213.htm
              </a>
              ).
            </p>
            <ListSection title="Key Components" items={overview.components} />
            <ListSection title="Tools Needed" items={overview.tools} />
            <hr className="my-6" />
          </section>

          {/* Design */}
          <section id="design" className="section-anchor">
            <h2 className="text-2xl mb-2">Design</h2>
            <ol className="list-none space-y-6">
              {designSteps.map((step, i) => (
                <Step key={i} {...step} index={i} />
              ))}
            </ol>
            <hr className="my-6" />
          </section>

          {/* Coming Soon */}
          <div className="text-center py-12">
            <div className="inline-block bg-yellow-100 border-2 border-yellow-300 rounded-lg px-8 py-6">
              <h3 className="text-2xl font-bold text-yellow-800 mb-2">
                🚧 Coming Soon
              </h3>
              <p className="text-yellow-700">
                This project is currently under construction. More detailed
                steps and photos will be added as I continue building!
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .default-p-font p {
          font-size: 1rem !important;
          line-height: 1.5 !important;
        }
        .section-anchor {
          scroll-margin-top: 40px;
        }
      `}</style>
    </div>
  );
}
