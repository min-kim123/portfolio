import lumbar from "../assets/guitar/lumbar.jpeg";
import triangle from "../assets/guitar/triangle.jpeg";
import glue from "../assets/guitar/glue.jpeg";
import pickupcad from "../assets/guitar/pickupcad.jpg";
import allwood from "../assets/guitar/allwood.jpeg";
import body from "../assets/guitar/body.jpeg";
import shaper from "../assets/guitar/shaper_optimized.jpeg";
import radiussander from "../assets/guitar/radius-sander_optimized.jpeg";
import jig from "../assets/guitar/jig.jpeg";
import fretcad from "../assets/guitar/fretcad_optimized.jpeg";
import kapton from "../assets/guitar/kapton.jpg";
import magnets from "../assets/guitar/magnets.jpg";
import pickups from "../assets/guitar/pickups.jpg";

import angle from "../assets/guitar/angle.jpg";
import hole from "../assets/guitar/holes.jpg";
import insertnuts from "../assets/guitar/insertnuts.jpg";
import plate from "../assets/guitar/plate.jpg";

import clampglue from "../assets/guitar/clampglue.jpg";
import truss from "../assets/guitar/truss.jpg";
import inlayholes from "../assets/guitar/inlayholes.jpg";
import neckpocket from "../assets/guitar/neckpocket.jpg";
import bridgedistance from "../assets/guitar/bridgedistance.jpg";
import bodyholes from "../assets/guitar/bodyholes.jpg";
import papercavity from "../assets/guitar/papercavity.jpg";
import cavitycad from "../assets/guitar/cavitycad.jpg";
import cavity from "../assets/guitar/cavity.jpg";
import frets from "../assets/guitar/frets.jpg";
import neckholes from "../assets/guitar/neckholes.jpeg";
import platehole from "../assets/guitar/platehole.jpeg";
import neckplateholes from "../assets/guitar/neckplateholes.jpeg";

// Sidebar section titles
const sections = [
  { id: "reflections", label: "Reflections" },
  { id: "overview", label: "Overview" },
  { id: "woodworking", label: "Woodworking & CAD" },
  { id: "pickups", label: "Pickups" },
  { id: "electronics", label: "Electronics" },
  { id: "finishing", label: "Finishing" },
];

// Woodworking steps
const woodworkingSteps = [
  {
    title: "Go to local lumber store",
    images: [lumbar],
    text: "Try not to buy a body blank online for $50. I got the wood for my neck and body all for $26 from Bohnhoff Lumber in Vernon, California.",
  },
  {
    title: "Assemble Wood Blanks",
    images: [triangle, glue, allwood],
  },
  {
    title: "Cut out body",
    images: [shaper, body],
    text: "Cut the body with tools like a shaper and bandsaw. You can also make templates, stick them onto the wood, then use a router.Sand the sides to get rid of the burn marks.  ",
  },
  {
    title: "Make fretboard",
    images: [fretcad],
    text: "I laser cut the fretboard on the slab of walnut. I could have just imported the template picture to laser cut but I decided to CAD it using values Stewmac's fretboard calculator for accuracy. I did 21 frets and a scale length of 25.5. https://www.stewmac.com/fret-calculator/?srsltid=AfmBOooj5Vi9g_eHLs7uxXJpO9WaYuiCeAF41d-Q_gqojX1eLGHv4ZUu",
  },
  {
    title: "Radius the fretboard",
    images: [radiussander, jig],
    text: "I found a fretboard radius maker on Printables and glued sandpaper to the bottom. I used a 9.5 inch radius, which is most common, but you can do anywhere from 9.5-12 inches depending on what's most comfortable for you.",
  },
  {
    title: "Cut out truss rod cavity with a router",
    images: [truss],
    text: "All truss rods are different, so you will have to measure the dimensions of your truss rod. ",
  },
  {
    title: "Trim back of neck, glue fretboard",
    images: [clampglue],
    text: "Before gluing the fretboard to the neck, I used a band saw to roughly cut out the shape of the neck, though this can be done after gluing. MAKE SURE you don't apply too thin of a layer because it will dry out quick before you can get the fretboard onto the neck. I did this and I literally had to restart the neck from scratch so be careful!!! ",
  },
  {
    title: "Drill inlay holes & insert inlays",
    images: [inlayholes],
    text: "I used a forstner bit to drill inlay holes on the fretboard. The [3, 5, 7, 9, 15, 17, 19] frets have one inlay, and the 12th fret has two. Insert the inlays then sand until flush.",
  },
  {
    title: "Drill tuning peg holes",
    images: [neckholes],
    text: "Print out the template, measure diameter of your tuning pegs, then drill the holes.",
  },
  {
    title: "Insert frets & trim",
    images: [frets],
    text: "Make sure that your holes are big enough and deep enough for the frets. Use a thin saw to make the slots the correct size. If you don't make them the correct size, you will have an extremely hard time getting the frets to lay in the slots correctly, and no amount of hammering will help. Trim the ends with a wire cutter, and sand the sharp edges.",
  },
  {
    title: "Route neck pocket",
    images: [neckpocket],
    text: "Trace the bottom of the neck onto a template and band saw/sand it out. Route the neck pocket until the neck (excluding frets) sticks out __.",
  },
  {
    title: "Mark bridge distance",
    images: [bridgedistance],
    text: "Make sure the part where the string leaves the saddle is 25.5 inches away from the bottom edge of the nut. I had a hard time telling where the string left the nut, so I literally went to a guitar store, found a telecaster with the same bridge, and measured the distance from the top edge of the bridge to the nut. That distance turned out to be __. ",
  },
  {
    title: "Drill body holes",
    images: [bodyholes],
    text: "Measure the width of your pots and your string holes in your bridge with a digital caliper to find the correct size drill bits. Use a drill press to drill the holes for the pots and guitar string holes. ",
  },
  {
    title: "Create electronics cavity",
    images: [papercavity, cavitycad, cavity],
    text: "I cut out the shape i wanted for the cavity. I made it longer than necessary so that I would have less trouble drilling the pathway from the neck pocket all the way to the electronics cavity. I then imported the image into NX, sketched the shape in CAD, created another smaller drawing for the actual deep cavity with places for the screws. I then laser cut the templates, routed out both templates, and also used forstner bits to drill out the spots where the pots and the switch went. The hole on the far left was made to unearth the pathway from the neck pocket, through the neck pickup, and to the electronics cavity, since I drilled it a bit too deep. (I also messed up on drilling the bigger holes for the neck ferrules in the back, so I created a maple insert and redid it. ",
  },
  {
    title: "Output jack hole",
    images: [platehole],
    text: "Use a forstner bit to drill a hole for your output jack",
  },
  {
    title: "Neck plate holes",
    images: [neckplateholes],
    text: "Now we start thinking about attaching the neck onto the body. You can either use wood screws or you can use insert nuts with regular screws.",
  },
  {
    title: "",
    images: [],
    text: "",
  },
  {
    title: "",
    images: [],
    text: "",
  },
  {
    title: "",
    images: [],
    text: "",
  },
];

// Pickups steps
const pickupSteps = [
  {
    title: "Design Pickup Bobbins in CAD",
    images: [pickupcad],
    text: "I used acrylic sheets for the bobbin top and bottom and laser cut them to match my CAD design.",
  },
  {
    title: "Wrap magnets in Kapton tape",
    images: [kapton],
    text: "Wrap the magnets in kapton tape to prevent it from corroding the thin copper wire that will be wrapped around them.",
  },
  {
    title: "Design k Bobbins in CAD",
    images: [pickups],
    text: "I used acrylic sheets for the bobbin top and bottom and laser cut them to match my CAD design.",
  },
  {
    title: "Design Pickup Bobbins in CAD",
    images: [magnets],
    text: "I taped the neodymium bar magnets to blocks of food then passed the pickups through them. I just played a youtube video of the same process and copied how they passed the magnets through.",
  },
];

// Pickups steps
const electronicsSteps = [
  {
    title: "Design Pickup Bobbins in CAD",
    images: [pickupcad],
    text: "I used acrylic sheets for the bobbin top and bottom and laser cut them to match my CAD design.",
  },
  {
    title: "Design Pickup Bobbins in CAD",
    images: [kapton],
    text: "I used acrylic sheets for the bobbin top and bottom and laser cut them to match my CAD design.",
  },
  {
    title: "Design Pickup Bobbins in CAD",
    images: [pickups],
    text: "I used acrylic sheets for the bobbin top and bottom and laser cut them to match my CAD design.",
  },
  {
    title: "Design Pickup Bobbins in CAD",
    images: [magnets],
    text: "I used acrylic sheets for the bobbin top and bottom and laser cut them to match my CAD design.",
  },
];

// Overview content
const overview = {
  wood: [
    'Body (Okoume, 16x13x1.75")',
    "Fretboard (Walnut, 19x2.75x.25)",
    "Neck (Hard Maple)",
  ],
  hardware: [
    "2x 250K potentiometers",
    "0.022 uF Capacitor",
    "3-way pickup selector switch",
    "Output jack",
    "Bridge",
    "String Ferrules",
    "Strap Buttons",
    "Tuning machines",
    "Fret wire",
    "Guitar strings",
    "42mm nut",
    "Dual-action truss rod",
  ],
  pickups: [
    "42 or 43 AWG copper wire",
    'Pickup bobbin material (0.0625" acrylic)',
    "6x Alnico 2 rod magnets for neck pickup (.187 diameter, length)",
    "6x Alnico 5 rod magnets for bridge pickup (.187 diameter, length)",
    "Neodymium bar magnets to magnetize the rod magnets",
  ],
  tools: ["Rasp", "Chisel", "Router", "Band Saw", "Shaper", "Orbital Sander"],
};

function Step({ title, images = [], text }) {
  return (
    <li>
      <div className="mb-2">{title}</div>
      <div className="flex gap-4 mb-2 flex-wrap">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            className="w-full md:w-1/3 h-48 object-cover rounded-sm"
          />
        ))}
      </div>
      {text && <p>{text}</p>}
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

export default function ElectricGuitar() {
  return (
    <div className="mx-6 mt-4">
      <h1 className="text-3xl mb-3 text-left">Electric Guitar</h1>
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
              Building this electric guitar was an incredible journey that
              taught me so much about craftsmanship, patience, and the beauty of
              creating something from scratch. Here are some key takeaways and
              reflections from the process.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Biggest Challenges I Faced</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    The importance of precise measurements and planning in
                    woodworking
                  </li>
                  <li>
                    How CAD can bridge the gap between design and execution
                  </li>
                  <li>
                    The patience required for proper glue drying and finishing
                  </li>
                  <li>
                    Why tool quality and sharpness matters more than I initially
                    thought
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Challenges & Solutions
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    Truss rod cavity routing - learned to measure twice, cut
                    once
                  </li>
                  <li>
                    Fret installation - discovered the importance of proper slot
                    sizing
                  </li>
                  <li>
                    Electronics cavity - CAD helped me plan the routing paths
                    perfectly
                  </li>
                  <li>
                    Neck attachment - insert nuts vs. wood screws decision
                    making
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  What I'd Do Differently
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Invest in better quality router bits from the start</li>
                  <li>Create more detailed templates before cutting</li>
                  <li>Take more progress photos throughout the build</li>
                  <li>Test electronics before final assembly</li>
                </ul>
              </div>
            </div>
            <hr className="my-6" />
          </section>

          {/* Overview */}
          <section id="overview" className="section-anchor">
            <h2 className="text-2xl mb-2">Overview</h2>
            <p className="mb-4">
              To make this guitar I had to piece together a lot of information
              from a variety of sources, so I thought I'd make a super detailed
              guide.
            </p>
            <ListSection title="Wood" items={overview.wood} />
            <ListSection title="Hardware" items={overview.hardware} />
            <ListSection title="Pickups" items={overview.pickups} />
            <ListSection title="Tools I Used" items={overview.tools} />
            <p className="font-semibold mb-2">Templates</p>
            <p className="mb-4">
              Here are the templates I used. I just found them online.
            </p>
            <hr className="my-6" />
          </section>

          {/* Woodworking & CAD */}
          <section id="woodworking" className="section-anchor">
            <h2 className="text-2xl mb-2">Woodworking & CAD</h2>
            <ol className="list-decimal list-inside space-y-6">
              {woodworkingSteps.map((step, i) => (
                <Step key={i} {...step} />
              ))}
            </ol>
            <hr className="my-6" />
          </section>

          {/* Pickups */}
          <section id="pickups" className="section-anchor">
            <h2 className="text-2xl mb-2">Pickups</h2>
            <ol className="list-decimal list-inside space-y-6">
              {pickupSteps.map((step, i) => (
                <Step key={i} {...step} />
              ))}
            </ol>
            <hr className="my-6" />
          </section>

          {/* Electronics */}
          <section id="electronics" className="section-anchor">
            <h2 className="text-2xl mb-2">Electronics</h2>
            <ol className="list-decimal list-inside space-y-6">
              {electronicsSteps.map((step, i) => (
                <Step key={i} {...step} />
              ))}
            </ol>
            <hr className="my-6" />
          </section>

          {/* Finishing */}
          <section id="finishing" className="section-anchor">
            <h2 className="text-2xl mb-2">Finishing</h2>
            <p>
              Share takeaways, techniques used, and what you would improve next
              time.
            </p>
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
