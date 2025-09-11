import React from "react";

// Sidebar section titles
const sections = [
  { id: "reflections", label: "Reflections" },
  { id: "overview", label: "Overview" },
  { id: "design", label: "Design & CAD" },
  { id: "machining", label: "Machining" },
  { id: "electronics", label: "Electronics" },
  { id: "testing", label: "Testing & Calibration" },
];

// Overview content - customize these arrays with your own materials and tools
const overview = {
  materials: [
    "Material 1",
    "Material 2",
    "Material 3",
    "Material 4",
    "Material 5",
  ],
  tools: ["Tool 1", "Tool 2", "Tool 3", "Tool 4", "Tool 5"],
};

function ListSection({ title, items }) {
  return (
    <>
      <p className="font-semibold mb-2">{title}</p>
      <ul className="list-decimal list-inside space-y-1 mb-4 ml-4">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default function PickupWinder() {
  return (
    <div className="mx-6 mt-4">
      <h1 className="text-3xl mb-3 text-left">Pickup Winder</h1>
      <div className="flex p-6">
        {/* Sidebar */}
        <div className="w-1/4 pr-4 sticky top-6 h-fit">
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
        <div className="w-3/4 space-y-12 text-left default-p-font">
          {/* Reflections */}
          <section id="reflections" className="section-anchor">
            <h2 className="text-2xl mb-2">Reflections & Lessons Learned</h2>
            <p className="mb-4">
              [Add your reflections about building the pickup winder here]
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Biggest Challenges I Faced
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>[Challenge 1]</li>
                  <li>[Challenge 2]</li>
                  <li>[Challenge 3]</li>
                  <li>[Challenge 4]</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Challenges & Solutions
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>[Challenge - Solution 1]</li>
                  <li>[Challenge - Solution 2]</li>
                  <li>[Challenge - Solution 3]</li>
                  <li>[Challenge - Solution 4]</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  What I'd Do Differently
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>[Improvement 1]</li>
                  <li>[Improvement 2]</li>
                  <li>[Improvement 3]</li>
                  <li>[Improvement 4]</li>
                </ul>
              </div>
            </div>
            <hr className="my-6" />
          </section>

          {/* Overview */}
          <section id="overview" className="section-anchor">
            <h2 className="text-2xl mb-2">Overview</h2>
            <p className="mb-4">[Add your project description here]</p>
            <ListSection title="Materials Used" items={overview.materials} />
            <ListSection title="Tools Required" items={overview.tools} />
            <p className="font-semibold mb-2">Key Features</p>
            <p className="mb-4">
              [Describe the key features of your pickup winder]
            </p>
            <hr className="my-6" />
          </section>

          {/* Design & CAD */}
          <section id="design" className="section-anchor">
            <h2 className="text-2xl mb-2">Design & CAD</h2>
            <p className="mb-4">[Describe your design process here]</p>
            <ol className="list-decimal list-inside space-y-6">
              <li>
                <div className="mb-2">[Step 1 Title]</div>
                <p>[Step 1 description]</p>
              </li>
              <li>
                <div className="mb-2">[Step 2 Title]</div>
                <p>[Step 2 description]</p>
              </li>
              <li>
                <div className="mb-2">[Step 3 Title]</div>
                <p>[Step 3 description]</p>
              </li>
            </ol>
            <hr className="my-6" />
          </section>

          {/* Machining */}
          <section id="machining" className="section-anchor">
            <h2 className="text-2xl mb-2">Machining</h2>
            <p className="mb-4">[Describe your machining process here]</p>
            <ol className="list-decimal list-inside space-y-6">
              <li>
                <div className="mb-2">[Step 1 Title]</div>
                <p>[Step 1 description]</p>
              </li>
              <li>
                <div className="mb-2">[Step 2 Title]</div>
                <p>[Step 2 description]</p>
              </li>
              <li>
                <div className="mb-2">[Step 3 Title]</div>
                <p>[Step 3 description]</p>
              </li>
            </ol>
            <hr className="my-6" />
          </section>

          {/* Electronics */}
          <section id="electronics" className="section-anchor">
            <h2 className="text-2xl mb-2">Electronics</h2>
            <p className="mb-4">[Describe your electronics setup here]</p>
            <ol className="list-decimal list-inside space-y-6">
              <li>
                <div className="mb-2">[Step 1 Title]</div>
                <p>[Step 1 description]</p>
              </li>
              <li>
                <div className="mb-2">[Step 2 Title]</div>
                <p>[Step 2 description]</p>
              </li>
              <li>
                <div className="mb-2">[Step 3 Title]</div>
                <p>[Step 3 description]</p>
              </li>
            </ol>
            <hr className="my-6" />
          </section>

          {/* Testing & Calibration */}
          <section id="testing" className="section-anchor">
            <h2 className="text-2xl mb-2">Testing & Calibration</h2>
            <p className="mb-4">[Describe your testing process here]</p>
            <ol className="list-decimal list-inside space-y-6">
              <li>
                <div className="mb-2">[Step 1 Title]</div>
                <p>[Step 1 description]</p>
              </li>
              <li>
                <div className="mb-2">[Step 2 Title]</div>
                <p>[Step 2 description]</p>
              </li>
              <li>
                <div className="mb-2">[Step 3 Title]</div>
                <p>[Step 3 description]</p>
              </li>
            </ol>
            <hr className="my-6" />
          </section>
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
