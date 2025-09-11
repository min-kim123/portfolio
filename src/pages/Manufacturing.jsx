import ManCard from "../components/ManCard";
import stop_plates from "../assets/machining/stop_plates.png";
import inboard from "../assets/machining/inboard.png";
import weldcups from "../assets/machining/weldcups.jpeg";
import visejaws from "../assets/machining/visejaws.jpeg";

const parts = [
  {
    name: "Inboard Brackets",
    image: inboard,
    description: "For USC Racing—made three at once!",
  },
  {
    name: "Vise Jaw",
    image: visejaws,
    description: "Pictured being used",
  },
  {
    name: "Vise Jaw Stop Plates",
    image: stop_plates,
    description: "Stop plates to use with the vise jaws I made",
  },
  {
    name: "Weld Cups",
    image: weldcups,
    description: "For the Formula SAE Electric & USC Racing—made 40 of these",
  },
];

export default function Manufacturing() {
  return (
    <div className="mx-6 mt-4">
      <h1 className="text-3xl mb-3 text-left">Manufacturing</h1>
      <div className="text-left mb-2">
        Here are some of the parts I've made working as a Machinist at USC
        Makerspace!
      </div>
      {/* 4-column grid on md+ with image/title/description stacked */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {parts.map((part, index) => (
          <ManCard
            key={index}
            name={part.name}
            image={part.image}
            description={part.description}
          />
        ))}
      </div>

      <h2 className="text-2xl mt-4 mb-2 text-left">Learnings</h2>
      <div className="text-left mb-2">
        Learning how to machine revealed to me the constraints but also
        possibilities that come with CADing physical parts.
      </div>
      <h3 className="text-xl mt-4 mb-2 text-left">Tooling & Process</h3>
      <ul className="list-disc list-inside mb-4 space-y-2 text-left">
        <li>
          Always think of the length of the endmill that is needed to machine
          the part—the longer the endmill, the greater the deflection. Short
          endmill with larger diameter→ fastest machine time → most cost
          effective part
        </li>
        <li>
          Reduce number of setups—this decreases machine time, increases
          accuracy. Try not to reclamp
        </li>
        <li>
          Try to avoid undercuts —may require multiple setups or special
          tools—if necessary, keep undercut amount as small as possible
        </li>
      </ul>

      <h3 className="text-xl mt-4 mb-2 text-left">Design & Geometry</h3>
      <ul className="list-disc list-inside mb-4 space-y-2 text-left">
        <li>
          Make internal fillets as large as possible—allows large diameter
          filets to be used. Radius of the bit should be at least a third of
          the depth
        </li>
        <li>
          Always keep internal filet radius larger than tool size to prevent the
          tool from breaking
        </li>
        <li>
          Keep depth less than 4 times the width, since tall and skinny features
          vibrate a lot during machining and will lead to poor tolerances and
          surface finishes
        </li>
        <li>Try to avoid pocket floor fillets, especially if pocket is deep</li>
        <li>Do not fillet outer edge of a part. Instead do a chamfer</li>
        <li>Try to keep chamfer angle 45 degrees—common tool size</li>
        <li>
          Only model chamfer if specific dimensions are needed, label break edge
          otherwise if u just need sharp edge deburred
        </li>
        <li>Avoid complex 3d surfaces because they’re slow → expensive</li>
        <li>
          If very high flattest tolerances are needed utilize small bosses with
          reduced area
        </li>
      </ul>

      <h3 className="text-xl mt-4 mb-2 text-left">Holes & Threads</h3>
      <ul className="list-disc list-inside mb-4 space-y-2 text-left">
        <li>
          Through hole always preferred to a blind hole, because it allows chips
          to be evacuated from the hole
        </li>
        <li>
          Don’t tap a hole deeper than 3 times the diameter—no increase in
          strength, it just gets harder to manufacture and thread in a fastener
        </li>
        <li>
          For blind holes, always allow a pilot hole to extend past the threads
          by half the diameter
        </li>
        <li>
          Keep drill depths to less than 6 times the diameter—drill from both
          sides to drill extended holes
        </li>
        <li>
          No flat bottom holes unless absolutely necessary since they’re
          difficult to make
        </li>
      </ul>

      <h3 className="text-xl mt-4 mb-2 text-left">
        Workholding, Stock & Marking
      </h3>
      <ul className="list-disc list-inside mb-2 space-y-2 text-left">
        <li>
          Try to make it so that finished part fits into raw stock dimensions
          from suppliers
        </li>
        <li>
          Leave an .125" for vise to clamp and around 40 thou all around so the
          entire part can have a machined finish
        </li>
        <li>Avoid raised text, instead engrave text</li>
      </ul>
    </div>
  );
}
