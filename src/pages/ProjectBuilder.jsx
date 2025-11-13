import { useState } from "react";

function ProjectBuilder() {
  const [projectTitle, setProjectTitle] = useState("");
  const [sections, setSections] = useState([
    {
      id: "overview",
      label: "Overview",
      type: "overview", // 'overview' or 'steps'
      description: "",
      listItems: {
        materials: [],
        tools: [],
      },
      steps: [],
    },
  ]);

  const addSection = () => {
    const newId = `section-${Date.now()}`;
    setSections([
      ...sections,
      {
        id: newId,
        label: "New Section",
        type: "steps",
        description: "",
        listItems: {
          materials: [],
          tools: [],
        },
        steps: [],
      },
    ]);
  };

  const removeSection = (sectionId) => {
    setSections(sections.filter((s) => s.id !== sectionId));
  };

  const updateSection = (sectionId, updates) => {
    setSections(
      sections.map((s) => (s.id === sectionId ? { ...s, ...updates } : s))
    );
  };

  const addStep = (sectionId) => {
    const section = sections.find((s) => s.id === sectionId);
    if (section) {
      updateSection(sectionId, {
        steps: [
          ...section.steps,
          {
            id: `step-${Date.now()}`,
            title: "",
            text: "",
            images: [],
            link: { url: "", text: "" },
          },
        ],
      });
    }
  };

  const removeStep = (sectionId, stepId) => {
    const section = sections.find((s) => s.id === sectionId);
    if (section) {
      updateSection(sectionId, {
        steps: section.steps.filter((s) => s.id !== stepId),
      });
    }
  };

  const updateStep = (sectionId, stepId, updates) => {
    const section = sections.find((s) => s.id === sectionId);
    if (section) {
      updateSection(sectionId, {
        steps: section.steps.map((step) =>
          step.id === stepId ? { ...step, ...updates } : step
        ),
      });
    }
  };

  const addImageToStep = (sectionId, stepId, imageUrl) => {
    const section = sections.find((s) => s.id === sectionId);
    if (section) {
      const step = section.steps.find((s) => s.id === stepId);
      if (step) {
        updateStep(sectionId, stepId, {
          images: [...step.images, imageUrl],
        });
      }
    }
  };

  const removeImageFromStep = (sectionId, stepId, imageIndex) => {
    const section = sections.find((s) => s.id === sectionId);
    if (section) {
      const step = section.steps.find((s) => s.id === stepId);
      if (step) {
        updateStep(sectionId, stepId, {
          images: step.images.filter((_, idx) => idx !== imageIndex),
        });
      }
    }
  };

  const addListItem = (sectionId, listType, item) => {
    const section = sections.find((s) => s.id === sectionId);
    if (section) {
      updateSection(sectionId, {
        listItems: {
          ...section.listItems,
          [listType]: [...section.listItems[listType], item],
        },
      });
    }
  };

  const removeListItem = (sectionId, listType, index) => {
    const section = sections.find((s) => s.id === sectionId);
    if (section) {
      updateSection(sectionId, {
        listItems: {
          ...section.listItems,
          [listType]: section.listItems[listType].filter((_, idx) => idx !== index),
        },
      });
    }
  };

  const generateCode = () => {
    const imports = [];
    const imageMap = {};
    let imageCounter = 1;

    sections.forEach((section) => {
      section.steps.forEach((step) => {
        step.images.forEach((img) => {
          if (img && !imageMap[img]) {
            const varName = `img${imageCounter++}`;
            imageMap[img] = varName;
            imports.push(`import ${varName} from "${img}";`);
          }
        });
      });
    });

    const sectionsCode = sections
      .map((section) => {
        const sectionId = section.id.replace(/\s+/g, "-").toLowerCase();
        return `  { id: "${sectionId}", label: "${section.label}" },`;
      })
      .join("\n");

    // Generate overview if there's an overview section
    const overviewSection = sections.find((s) => s.type === "overview");
    const overviewCode = overviewSection
      ? `const overview = {
  materials: [${overviewSection.listItems.materials.map((item) => `"${item.replace(/"/g, '\\"')}"`).join(", ")}],
  tools: [${overviewSection.listItems.tools.map((item) => `"${item.replace(/"/g, '\\"')}"`).join(", ")}],
};`
      : "";

    // Generate steps for each section
    const stepsCode = sections
      .filter((section) => section.type === "steps" && section.steps.length > 0)
      .map((section) => {
        const stepVarName = `${section.id.replace(/[^a-zA-Z0-9]/g, "")}Steps`;
        const steps = section.steps
          .map((step) => {
            const images = step.images
              .map((img) => {
                if (!img) return "";
                return imageMap[img] || `"${img}"`;
              })
              .filter(Boolean)
              .join(", ");
            const linkCode = step.link?.url
              ? `,\n    link: {\n      url: "${step.link.url.replace(/"/g, '\\"')}",\n      text: "${step.link.text.replace(/"/g, '\\"')}",\n    }`
              : "";
            return `  {\n    title: "${step.title.replace(/"/g, '\\"').replace(/\n/g, " ")}",\n    images: [${images || ""}],\n    text: "${step.text.replace(/"/g, '\\"').replace(/\n/g, " ")}"${linkCode}\n  },`;
          })
          .join("\n");
        return `const ${stepVarName} = [\n${steps}\n];`;
      })
      .join("\n\n");

    const allStepsCode = [overviewCode, stepsCode].filter(Boolean).join("\n\n");

    const sectionsRender = sections
      .map((section) => {
        const sectionId = section.id.replace(/\s+/g, "-").toLowerCase();
        if (section.type === "overview") {
          const hasMaterials = section.listItems.materials.length > 0;
          const hasTools = section.listItems.tools.length > 0;
          return `          <section id="${sectionId}" className="section-anchor">
            <h2 className="text-2xl mb-2">${section.label}</h2>
            <p className="mb-4">${section.description.replace(/"/g, '\\"')}</p>
            ${hasMaterials ? `<ListSection title="Materials" items={overview.materials} />` : ""}
            ${hasTools ? `<ListSection title="Tools Used" items={overview.tools} />` : ""}
            <hr className="my-6" />
          </section>`;
        } else {
          const stepVarName = `${section.id.replace(/[^a-zA-Z0-9]/g, "")}Steps`;
          return `          <section id="${sectionId}" className="section-anchor">
            <h2 className="text-2xl mb-2">${section.label}</h2>
            <ul className="list-none space-y-6">
              {${stepVarName}.map((step, i) => (
                <Step key={i} {...step} />
              ))}
            </ul>
            <hr className="my-6" />
          </section>`;
        }
      })
      .join("\n\n");

    const fullCode = `${imports.length > 0 ? imports.join("\n") + "\n" : ""}
// Sidebar section titles
const sections = [
${sectionsCode}
];

${allStepsCode}

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

export default function ${projectTitle.replace(/\s+/g, "") || "NewProject"}() {
  return (
    <div className="mx-6 mt-4">
      <h1 className="text-3xl mb-3 text-left">${projectTitle}</h1>
      <div className="flex p-6">
        {/* Sidebar */}
        <div className="hidden md:block w-1/4 pr-4 sticky top-6 h-fit">
          <nav className="flex flex-col space-y-2 text-left">
            {sections.map((section) => (
              <a
                key={section.id}
                href={\`#\${section.id}\`}
                className="hover:underline"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 space-y-12 text-left default-p-font">
${sectionsRender}
        </div>
      </div>
      <style jsx>{\`
        .default-p-font p {
          font-size: 1rem !important;
          line-height: 1.5 !important;
        }
        .section-anchor {
          scroll-margin-top: 40px;
        }
      \`}</style>
    </div>
  );
}`;

    return fullCode;
  };

  const copyToClipboard = () => {
    const code = generateCode();
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  const downloadCode = () => {
    const code = generateCode();
    const blob = new Blob([code], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${projectTitle.replace(/\s+/g, "")}.jsx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-6 mt-4 mb-8">
      <h1 className="text-3xl mb-6 text-left">Project Page Builder</h1>

      {/* Project Title */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <label className="block text-sm font-semibold mb-2">
          Project Title
        </label>
        <input
          type="text"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
          placeholder="Enter project title"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {sections.map((section, sectionIdx) => (
          <div
            key={section.id}
            className="border border-gray-300 rounded-lg p-6 bg-white"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                Section {sectionIdx + 1}: {section.label}
              </h2>
              <button
                onClick={() => removeSection(section.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove Section
              </button>
            </div>

            {/* Section Label */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Section Label
              </label>
              <input
                type="text"
                value={section.label}
                onChange={(e) =>
                  updateSection(section.id, { label: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Section Type */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Section Type
              </label>
              <select
                value={section.type}
                onChange={(e) =>
                  updateSection(section.id, { type: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="overview">Overview</option>
                <option value="steps">Steps</option>
              </select>
            </div>

            {/* Overview Section */}
            {section.type === "overview" && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">
                    Description
                  </label>
                  <textarea
                    value={section.description}
                    onChange={(e) =>
                      updateSection(section.id, { description: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    rows="3"
                  />
                </div>

                {/* Materials List */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">
                    Materials
                  </label>
                  {section.listItems.materials.map((item, idx) => (
                    <div key={idx} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => {
                          const newItems = [...section.listItems.materials];
                          newItems[idx] = e.target.value;
                          updateSection(section.id, {
                            listItems: { ...section.listItems, materials: newItems },
                          });
                        }}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
                      />
                      <button
                        onClick={() => removeListItem(section.id, "materials", idx)}
                        className="px-3 py-1 bg-red-500 text-white rounded"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => addListItem(section.id, "materials", "")}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    + Add Material
                  </button>
                </div>

                {/* Tools List */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">
                    Tools
                  </label>
                  {section.listItems.tools.map((item, idx) => (
                    <div key={idx} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => {
                          const newItems = [...section.listItems.tools];
                          newItems[idx] = e.target.value;
                          updateSection(section.id, {
                            listItems: { ...section.listItems, tools: newItems },
                          });
                        }}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
                      />
                      <button
                        onClick={() => removeListItem(section.id, "tools", idx)}
                        className="px-3 py-1 bg-red-500 text-white rounded"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => addListItem(section.id, "tools", "")}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    + Add Tool
                  </button>
                </div>
              </>
            )}

            {/* Steps Section */}
            {section.type === "steps" && (
              <div className="space-y-4">
                {section.steps.map((step, stepIdx) => (
                  <div
                    key={step.id}
                    className="border border-gray-200 rounded-lg p-4 bg-gray-50"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold">Step {stepIdx + 1}</h3>
                      <button
                        onClick={() => removeStep(section.id, step.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded text-sm"
                      >
                        Remove Step
                      </button>
                    </div>

                    <div className="mb-3">
                      <label className="block text-sm font-semibold mb-1">
                        Step Title
                      </label>
                      <input
                        type="text"
                        value={step.title}
                        onChange={(e) =>
                          updateStep(section.id, step.id, { title: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="block text-sm font-semibold mb-1">
                        Step Text
                      </label>
                      <textarea
                        value={step.text}
                        onChange={(e) =>
                          updateStep(section.id, step.id, { text: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        rows="3"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="block text-sm font-semibold mb-1">
                        Images (enter image paths, e.g., "../assets/image.png")
                      </label>
                      {step.images.map((img, imgIdx) => (
                        <div key={imgIdx} className="flex gap-2 mb-2">
                          <input
                            type="text"
                            value={img}
                            onChange={(e) => {
                              const newImages = [...step.images];
                              newImages[imgIdx] = e.target.value;
                              updateStep(section.id, step.id, { images: newImages });
                            }}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
                            placeholder="../assets/image.png"
                          />
                          <button
                            onClick={() =>
                              removeImageFromStep(section.id, step.id, imgIdx)
                            }
                            className="px-3 py-1 bg-red-500 text-white rounded"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      <button
                        onClick={() => addImageToStep(section.id, step.id, "")}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        + Add Image
                      </button>
                    </div>

                    <div className="mb-3">
                      <label className="block text-sm font-semibold mb-1">
                        Link (optional)
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={step.link?.url || ""}
                          onChange={(e) =>
                            updateStep(section.id, step.id, {
                              link: { ...step.link, url: e.target.value },
                            })
                          }
                          placeholder="URL"
                          className="px-4 py-2 border border-gray-300 rounded-md"
                        />
                        <input
                          type="text"
                          value={step.link?.text || ""}
                          onChange={(e) =>
                            updateStep(section.id, step.id, {
                              link: { ...step.link, text: e.target.value },
                            })
                          }
                          placeholder="Link Text"
                          className="px-4 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => addStep(section.id)}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  + Add Step
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add Section Button */}
      <div className="mt-6">
        <button
          onClick={addSection}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold"
        >
          + Add New Section
        </button>
      </div>

      {/* Export Buttons */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Export Project</h2>
        <div className="flex gap-4">
          <button
            onClick={copyToClipboard}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Copy Code to Clipboard
          </button>
          <button
            onClick={downloadCode}
            className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
          >
            Download as .jsx File
          </button>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          After generating the code, you'll need to:
          <br />
          1. Save it as a new file in src/pages/
          <br />
          2. Add the route to App.jsx
          <br />
          3. Add the project card to Projects.jsx
          <br />
          4. Make sure all image paths are correct
        </p>
      </div>
    </div>
  );
}

export default ProjectBuilder;

