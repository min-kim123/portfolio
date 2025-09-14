import guitar1 from "../assets/guitar1.jpeg";
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
import copper from "../assets/guitar/copper.jpg";
import electronics from "../assets/guitar/electronics.jpeg";
import solder from "../assets/guitar/solder.jpeg";

import cavityplate from "../assets/guitar/cavityplate.jpeg";
// Sidebar section titles
const sections = [
  // { id: "reflections", label: "Reflections" },
  { id: "overview", label: "Overview" },
  { id: "woodworking1", label: "Woodworking Pt. 1" },
  { id: "pickups", label: "Pickups" },
  { id: "woodworking2", label: "Woodworking Pt. 2" },
  { id: "electronics", label: "Electronics" },
  { id: "finishing", label: "Finishing" },
];

// Woodworking Part 1 steps (1-15)
const woodworkingSteps1 = [
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
    text: "Trace the bottom of the neck onto a template and band saw/sand it out. Route out the neck pocket.",
  },
  {
    title: "Mark bridge distance",
    images: [bridgedistance],
    text: "Make sure the part where the string leaves the saddle is 25.5 inches away from the bottom edge of the nut. I had a hard time telling where the string left the nut, so I literally went to a guitar store, found a telecaster with the same bridge, and measured the distance from the top edge of the bridge to the nut. ",
  },
  {
    title: "Drill body holes",
    images: [bodyholes],
    text: "Measure the width of your pots and your string holes in your bridge with a digital caliper to find the correct size drill bits. Use a drill press to drill the holes for the pots and guitar string holes. ",
  },
  {
    title: "Create electronics cavity",
    images: [papercavity, cavitycad, cavity, cavityplate],
    text: "I cut out the shape i wanted for the cavity. I made it longer than necessary so that I would have less trouble drilling the pathway from the neck pocket all the way to the electronics cavity. I then imported the image into NX, sketched the shape in CAD, created another smaller drawing for the actual deep cavity with places for the screws. I then laser cut the templates, routed out both templates, and also used forstner bits to drill out the spots where the pots and the switch went. The hole on the far left was made to unearth the pathway from the neck pocket, through the neck pickup, and to the electronics cavity, since I drilled it a bit too deep. (I also messed up on drilling the bigger holes for the neck ferrules in the back, so I created a maple insert and redid it. ",
  },
  {
    title: "Output jack",
    images: [platehole],
    text: "Use a forstner bit to drill a hole for your output jack. ",
  },
];

// Woodworking Part 2 steps (16+)
const woodworkingSteps2 = [
  {
    title: "Install Pickups",
    images: [],
    text: "Before installing the neck, you must install the bridge so that you know how to position the neck so that the strings line up correctly along the pickup magnets and the neck. And before installing the bridge the bridge pickup must go in. If you want to make your pickups have adjustable height, place springs underneath the bottom acrylic when screwing them in.",
  },
  {
    title: "Install Bridge",
    images: [],
    text: "I got size 8 1/14'' flathead Phillips screws to install the bridge. I drilled smaller holes first, then screwed in the screws. NOTE: you need to have a wire beneath the bridge that goes into the electronics cavity. This grounds your guitar. This will later get soldred to the back of one of your pots.",
  },
  {
    title: "Neck plate holes",
    images: [neckplateholes],
    text: "Now we start thinking about attaching the neck onto the body. Place the neck plate on the back of the body and mark the centers of the circles.You can either use wood screws or you can use insert nuts with regular screws. For the holes in the body, they will be clearance holes where the screws will pass without catching on the wood. Measure the threaded part of your screws with a caliper, then drill holes slightly bigger than that diameter. Try to make holes that allow for wood screws to slide in easily but not move around. This will help a lot for marking precisely where to drill the neck holes so that they actually align with the holes in the body.",
  },
  {
    title: "Neck holes",
    images: [angle, hole, insertnuts],
    text: "I decided to use insert nuts so that I could take the neck off without having to worry about stripping the wood. I used a digital angle guage to make sure I wasn't drilling holes at an angle, checking both axes.",
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
    text: "I used acrylic sheets for the bobbin top and bottom and laser cut them to match my CAD design. To make sure that my strings aligned with the centers of the magnets, I placed a long ruler with one end at the center of the bridge saddle and the other at the same string nut, marked that position, did so on another string saddle/nut position, then calculated the distance I should have between the magnets of my pickups.",
  },
  {
    title: "Wrap magnets in Kapton tape",
    images: [kapton],
    text: "Wrap the magnets in kapton tape to prevent it from corroding the thin copper wire that will be wrapped around them.",
  },
  {
    title: "Wind & Solder",
    images: [pickups],
    text: "Step by step tutorial is on my pickup winder tutorial page.",
  },
  {
    title: "Magnetize",
    images: [magnets],
    text: "I taped the neodymium bar magnets to blocks of food then passed the pickups through them. I just played a youtube video of the same process and copied how they passed the magnets through.",
  },
];

// Pickups steps
const electronicsSteps = [
  {
    title: "Cover the electronics cavity with copper tape",
    images: [copper],
    text: "We want to shield the electronics with a faraday cage so that electromagnetic noise from nearby electronics and devices. Make sure that the copper is continuous—they must be all connected together for this to work. Gaps let high frequency noise in. ",
  },
  {
    title: "Install output jack",
    images: [plate],
    text: "Solder the wires onto your output jack, place it in the cavity, then install the output jack palte. Use two pliers to bend the plate to the radius that matches your guitar. Screw them in. I didn't drill smaller holes before doing this and it was fine.",
  },
  {
    title: "Attach wires to components",
    images: [solder],
    text: "I followed this website's instructions for wiring an electric guitar: ",
    link: {
      url: "https://sixstringsupplies.co.uk/pages/telecaster-wiring?srsltid=AfmBOop0yeSBzusikUm2DydEdNerhBsBA6nsly741F8FKBl3y9IRjc3i",
      text: "Telecaster wiring guide",
    },
  },
  {
    title: "Result",
    images: [electronics],
    text: "This is how mine turned out! Make sure you cover the underside of the plate with copper tape as well.",
  },
];

// Finishing steps
const finishingSteps = [
  {
    title: "Sand and prepare surfaces",
    images: [],
    text: "Sand all surfaces to prepare for finishing. Start with coarser grits and work your way up to fine grits.",
  },
  {
    title: "Apply finish",
    images: [],
    text: "Apply your chosen finish (stain, paint, or clear coat)!",
  },
  {
    title: "Final assembly",
    images: [],
    text: "Once the finish is dry, it's time for final assembly! Screw in the tuning pegs, electronics cavity plate, and reinstall the neck!.",
  },
  {
    title: "Setup and intonation",
    images: [],
    text: "Set up the guitar with proper string height, intonation, and truss rod adjustment for optimal playability.",
  },
  {
    title: "You're done!!",
    images: [guitar1],
    text: "Congratulations! You've successfully built your own electric guitar from scratch. Happy playing:)",
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
          {/* <section id="reflections" className="section-anchor">
            <h2 className="text-2xl mb-2">Reflections & Lessons Learned</h2>
            <p className="mb-4"></p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Biggest Challenges I Faced
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
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
                  <li></li>
                </ul>
              </div>
            </div>
            <hr className="my-6" />
          </section> */}

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

          {/* Woodworking Part 1 */}
          <section id="woodworking1" className="section-anchor">
            <h2 className="text-2xl mb-2">Woodworking Pt. 1</h2>
            <ol className="list-none space-y-6">
              {woodworkingSteps1.map((step, i) => (
                <Step key={i} {...step} index={i} />
              ))}
            </ol>
            <hr className="my-6" />
          </section>

          {/* Pickups */}
          <section id="pickups" className="section-anchor">
            <h2 className="text-2xl mb-2">Pickups</h2>
            <ol className="list-none space-y-6">
              {pickupSteps.map((step, i) => (
                <Step key={i} {...step} index={i} />
              ))}
            </ol>
            <hr className="my-6" />
          </section>

          {/* Woodworking Part 2 */}
          <section id="woodworking2" className="section-anchor">
            <h2 className="text-2xl mb-2">Woodworking Pt. 2</h2>
            <ol className="list-none space-y-6">
              {woodworkingSteps2.map((step, i) => (
                <Step key={i} {...step} index={i} />
              ))}
            </ol>
            <hr className="my-6" />
          </section>

          {/* Electronics */}
          <section id="electronics" className="section-anchor">
            <h2 className="text-2xl mb-2">Electronics</h2>
            <ol className="list-none space-y-6">
              {electronicsSteps.map((step, i) => (
                <Step key={i} {...step} index={i} />
              ))}
            </ol>
            <hr className="my-6" />
          </section>

          {/* Finishing */}
          <section id="finishing" className="section-anchor">
            <h2 className="text-2xl mb-2">Finishing</h2>
            <ol className="list-none space-y-6">
              {finishingSteps.map((step, i) => (
                <Step key={i} {...step} index={i} />
              ))}
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
