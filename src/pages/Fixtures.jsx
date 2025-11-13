// import overviewImg from "../assets/a-arm/overview.jpg";
import tabsPdf from "../assets/a-arm/Tabs Presentation.pdf";

// Sidebar section titles
const sections = [
  { id: "overview", label: "Overview" },
  { id: "inboard-brackets", label: "Inboard Brackets / Tabs" },
  { id: "tabs-jig", label: "Tabs Jig" },
  { id: "a-arm-tubes", label: "A-arm Tubes" },
  { id: "weld-cups", label: "Weld Cups" },
  { id: "hand-calculations", label: "Hand Calculations" },
];

// Section content with image and description
const sectionContent = {
  "inboard-brackets": {
    image: null,
    pdf: tabsPdf,
    description: "",
  },
  "tabs-jig": {
    image: null,
    pdf: null,
    description: "",
  },
  "a-arm-tubes": {
    image: null,
    pdf: null,
    description: "",
  },
  "weld-cups": {
    image: null,
    pdf: null,
    description: "",
  },
  "hand-calculations": {
    image: null,
    pdf: null,
    description: "",
  },
};

// Overview content
const overview = {
  materials: ["Aluminum", "Steel"],
  tools: ["CNC Mill", "Lathe", "CAD Software"],
  components: [
    "A-arm Tubes x16",
    "Weld Cups x28",
    "Inboard Brackets x3",
    "Tabs x8",
    "Tabs Jig x2",
    "Gussets x8",
    "A-arm welding jig x1",
  ],
};

function SectionContent({ image, description, pdf }) {
  return (
    <div className="space-y-4">
      {image && (
        <div className="mb-4">
          <img
            src={image}
            alt=""
            className="w-full md:w-2/3 h-auto object-cover rounded-sm"
          />
        </div>
      )}
      {pdf && (
        <div className="mb-4 w-full">
          <iframe
            src={pdf}
            className="w-full h-[calc(100vh-200px)] rounded-sm border"
            title="PDF Viewer"
          />
        </div>
      )}
      {description && <p>{description}</p>}
    </div>
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

export default function Fixtures() {
  return (
    <div className="mx-6 mt-4">
      <h1 className="text-3xl mb-3 text-left">Formula SAE Suspension </h1>
      <div className="flex p-6">
        {/* Sidebar */}
        {/* <div className="hidden md:block w-1/4 pr-4 sticky top-6 h-fit">
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
        </div> */}

        {/* Main Content */}
        <div className="w-full space-y-12 text-left default-p-font">
          {/* Overview */}
          <section id="overview" className="section-anchor">
            {/* <h2 className="text-2xl mb-2">Overview</h2> */}
            <p className="mb-4">
              I was tasked with designing and/or machining various components for the suspension A-arms, including 16 A-arm tubes, 28 weld cups, 3 inboard brackets, 8 tabs, 2 tab jigs, 8 gussets, and an a-arm welding jig.

            </p>
            {/* <div className="mb-4">
              <img
                src={overviewImg}
                alt="A-arm fixtures overview"
                className="w-full md:w-2/3 h-auto object-cover rounded-sm mb-4"
              />
            </div>
            <ListSection title="Components" items={overview.components} />
            <ListSection title="Materials" items={overview.materials} />
            <ListSection title="Tools Used" items={overview.tools} />
            <hr className="my-6" /> */}
          </section>

          {/* Inboard Brackets / Tabs */}
          <section id="inboard-brackets" className="section-anchor">
            {/* <h2 className="text-2xl mb-2">Inboard Brackets / Tabs</h2> */}
            <SectionContent
              image={sectionContent["inboard-brackets"].image}
              pdf={sectionContent["inboard-brackets"].pdf}
              description={sectionContent["inboard-brackets"].description}
            />
            {/* <hr className="my-6" /> */}
          </section>

          {/* Tabs Jig */}
          {/* <section id="tabs-jig" className="section-anchor">
            <h2 className="text-2xl mb-2">Tabs Jig</h2>
            <SectionContent
              image={sectionContent["tabs-jig"].image}
              pdf={sectionContent["tabs-jig"].pdf}
              description={sectionContent["tabs-jig"].description}
            />
            <hr className="my-6" />
          </section> */}

          {/* A-arm Tubes */}
          {/* <section id="a-arm-tubes" className="section-anchor">
            <h2 className="text-2xl mb-2">A-arm Tubes</h2>
            <SectionContent
              image={sectionContent["a-arm-tubes"].image}
              pdf={sectionContent["a-arm-tubes"].pdf}
              description={sectionContent["a-arm-tubes"].description}
            />
            <hr className="my-6" />
          </section> */}

          {/* Weld Cups */}
          {/* <section id="weld-cups" className="section-anchor">
            <h2 className="text-2xl mb-2">Weld Cups</h2>
            <SectionContent
              image={sectionContent["weld-cups"].image}
              pdf={sectionContent["weld-cups"].pdf}
              description={sectionContent["weld-cups"].description}
            />
            <hr className="my-6" />
          </section> */}

          {/* Hand Calculations */}
          {/* <section id="hand-calculations" className="section-anchor">
            <h2 className="text-2xl mb-2">Hand Calculations</h2>
            <SectionContent
              image={sectionContent["hand-calculations"].image}
              pdf={sectionContent["hand-calculations"].pdf}
              description={sectionContent["hand-calculations"].description}
            />
            <hr className="my-6" />
          </section> */}
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


