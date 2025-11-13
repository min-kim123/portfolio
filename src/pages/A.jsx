// Sidebar section titles
const sections = [
  { id: "overview", label: "Section Label" },
  { id: "section-1762713724835", label: "New Section" },
];

// Define the steps arrays
const overviewSteps = [];
const section1762713724835Steps = [];

function Step({ title, images = [], text, link }) {
    return (
      <li className="flex items-start gap-3">
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
  
export default function A() {
    return (
      <div className="mx-6 mt-4">
        <h1 className="text-3xl mb-3 text-left">a</h1>
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
            <section id="overview" className="section-anchor">
              <h2 className="text-2xl mb-2">Section Label</h2>
              <ul className="list-none space-y-6">
                {overviewSteps.map((step, i) => (
                  <Step key={i} {...step} />
                ))}
              </ul>
              <hr className="my-6" />
            </section>
  
            <section id="section-1762713724835" className="section-anchor">
              <h2 className="text-2xl mb-2">New Section</h2>
              <ul className="list-none space-y-6">
                {section1762713724835Steps.map((step, i) => (
                  <Step key={i} {...step} />
                ))}
              </ul>
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