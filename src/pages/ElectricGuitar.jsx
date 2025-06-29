import lumbar from '../assets/guitar/lumbar.png'
export default function ElectricGuitar() {
  return (
    <>
      <div className="text-left">Electric Guitar</div>
      <div className="text-left">
        Here is a step by step on how I made my electric guitar, hopefully it's
        helpful if you want to build your own too!
      </div>
      <img
          src={lumbar}
          className="w-full md:w-1/3 h-48 object-cover"
        />
    </>
  );
}
