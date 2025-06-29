import lumbar from "../assets/guitar/lumbar.png";
import triangle from "../assets/guitar/triangle.png";
import glue from "../assets/guitar/glue.png";
import pickupcad from "../assets/guitar/pickupcad.png";

export default function ElectricGuitar() {
  return (
    <div className="mx-6 mt-4">
      <h1 className="text-3xl mb-3 text-left">Electric Guitar (Telecaster)</h1>
      <div className="flex p-6">
        {/* Sidebar */}
        <div className="w-1/4 pr-4 sticky top-6 h-fit">
          <nav className="flex flex-col space-y-2 text-left">
            <a href="#overview" className=" hover:underline">
              Overview
            </a>
            <a href="#wiring" className=" hover:underline">
              Woodworking & CAD
            </a>
            <a href="#pickups" className=" hover:underline">
              Pickups
            </a>
            <a href="#electronics" className=" hover:underline">
              Electronics
            </a>
            <a href="#finishing" className=" hover:underline">
              Finishing
            </a>
          </nav>
        </div>

        {/* Article */}
        <div className="w-3/4 space-y-12 text-left">
          <div>
            To make this guitar I had to piece together a lot of information
            from a variety of sources, so I thought I'd make a super detailed
            guide for anyone
          </div>
          <section id="overview">
            <h2 className="text-2xl mb-2">Overview</h2>
            <p className="font-semibold mb-2">Wood</p>
            <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
              <li>Body wood (Okoume, 16x13x1.75")</li>
              <li>Fretboard wood (Walnut, 19x2.75x.25)</li>
              <li>Neck wood (Hard Maple)</li>
            </ul>

            <p className="font-semibold mb-2">Hardware</p>
            <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
              <li>2x 250K potentiometers</li>
              <li>0.022 uF Capacitor</li>
              <li>3-way pickup selector switch</li>
              <li>Output jack</li>
              <li>Bridge</li>
              <li>String Ferrules</li>
              <li>Strap Buttons</li>
              <li>Tuning machines</li>
              <li>Fret wire</li>
              <li>Guitar strings</li>
              <li>42mm nut</li>
              <li>Dual-action truss rod</li>
            </ul>
            <p className="font-semibold mb-2">Pickups</p>
            <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
              <li>42 or 43 AWG copper wire</li>
              <li>Pickup bobbin material (0.0625" acrylic)</li>
              <li>
                Alnico 2 rod magnets for neck pickup (.187 diameter, length)
              </li>
              <li>
                Alnico 5 rod magnets for neck pickup (.187 diameter, length)
              </li>
              <li>Neodymium bar magnets to magnetize the rod magnets</li>
            </ul>
            <p className="font-semibold mb-2">Tools I Used</p>
            <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
              <li>Rasp</li>
              <li>Chisel</li>
              <li>Router</li>
              <li>Band Saw</li>
              <li>Shaper</li>
            </ul>
            <p className="font-semibold mb-2">Templates</p>
            <p>Here are the templates I used. I just found them online.</p>
            <ul className="list-disc list-inside space-y-1 mb-4 ml-4"></ul>
            <hr className="my-6" />
          </section>
          <ol className="list-decimal text-3xl list-inside space-y-6 default-p-font">
            <section id="wiring">
              <h2 className="text-2xl mb-2">Woodworking & CAD</h2>

              <li>
                <div className="mb-2">Go to local lumbar store</div>
                <img
                  src={lumbar}
                  className="w-full md:w-1/3 h-48 object-cover rounded-sm mb-2"
                />
                <p>
                  Try not to buy a body blank online for $50. I got the wood for
                  my neck and body all for $26 from Bohnhoff Lumber in Vernon,
                  California.
                </p>
              </li>
              <li>
                <div className="mb-2">Make Body Blank</div>
                <div className="flex gap-4 mb-2">
                  <img
                    src={triangle}
                    className="w-full md:w-1/3 h-48 object-cover rounded-sm"
                  />
                  <img
                    src={glue}
                    className="w-full md:w-1/3 h-48 object-cover rounded-sm"
                  />
                </div>
              </li>
              <li>
                <div className="mb-2">Cut out body</div>
                <img
                  src={lumbar}
                  className="w-full md:w-1/3 h-48 object-cover rounded-sm mb-2"
                />
                <p>
                  Try not to buy a body blank online for $50. I got the wood for
                  my neck and body all for $26 from Bohnhoff Lumber in Vernon,
                  California.
                </p>
              </li>
              <hr className="my-6" />
            </section>
            <section id="pickups">
              <h2 className="text-2xl mb-2">Pickups</h2>
              <li>
                <div className="mb-2">Go to local lumbar store</div>
                <img
                  src={pickupcad}
                  className="w-full md:w-1/3 h-48 object-cover rounded-sm mb-2"
                />
                <p>
                  Try not to buy a body blank online for $50. I got the wood for
                  my neck and body all for $26 from Bohnhoff Lumber in Vernon,
                  California.
                </p>
              </li>
              <hr className="my-6" />
            </section>
            <section id="electronics">
              <h2 className="text-2xl mb-2">Electronics</h2>
              <p>Talk about problems you ran into...</p>
              <hr className="my-6" />
            </section>

            <section id="finishing">
              <h2 className="text-2xl mb-2">Finishing</h2>
              <p>Share takeaways and future improvements...</p>
              <hr className="my-6" />
            </section>
          </ol>
        </div>
      </div>
      <style jsx>{`
        .default-p-font p {
          font-size: 1rem !important;
          line-height: 1.5 !important;
        }
      `}</style>
    </div>
  );
}

//<li>
{
  /* <div className="text-3xl mb-2">Go to local lumbar store</div>
<img
  src={lumbar}
  className="w-full md:w-1/3 h-48 object-cover rounded-sm mb-2"
/>
<>
  Try not to buy a body blank online for $50. I got the wood for
  my neck and body all for $26 from Bohnhoff Lumber in Vernon,
  California.
</p>
</li> */
}
