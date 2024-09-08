import { Link } from "react-router-dom";
import StatsMaterial from "../Components/StatsMaterial";
import { useContext, useEffect, useState } from "react";
import { rangeContext } from "../Context/Range";
import { AlertTriangle,Cpu} from 'lucide-react'


const Stats = () => {
  const range = useContext(rangeContext);
  const data = range.calculatedData;
  const [performance, setPerformance] = useState("text-red-700 ml-4`");

  useEffect(() => {
    if(data.score>0 && data.score<=40){
      setPerformance("text-red-700 ml-4");
    }
    else if(data.score>40 && data.score<=70){
      setPerformance("text-orange-500 ml-4");
    }
    else if(data.score>70 && data.score<=90){
      setPerformance("text-blue-400 ml-4");
    }
    else{
      setPerformance("text-blue-600 ml-4");
    }
  }, [data.score]);

  if (data.distance != 0) {
    return (
      <div className="container mx-auto p-4 md:p-6 lg:p-12 flex flex-col items-center justify-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-center text-gray-800 my-10">
          Statistics
        </h1>
        <Link to={'/range'}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full shadow-lg transition duration-300 ease-in-out">
            Select Range
          </button>
        </Link>
        <h3 className="text-2xl lg:text-2xl font-bold text-center text-gray-800 my-10">
          Selected Range: {range.selectedTab}
        </h3>
        <div className="flex items-center">
          <h1 className="text-2xl lg:text-2xl font-bold text-center text-gray-800 my-10">performance: {Math.round(data.score * 10) / 10}%</h1>
          <Cpu size={40} className={performance} />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 my-10">
          <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 lg:p-8">
            <h2 className="text-2xl font-bold">Journey</h2>
            <StatsMaterial title={"Distance Travelled"} num={Math.trunc(data.distance / 1000)} time={""} unit={"km"} />
            <StatsMaterial title={"Time Duration"} num={0} time={Math.trunc(data.duration / 60)} unit={"hours"} />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 lg:p-8">
            <h2 className="text-2xl font-bold">Speed</h2>
            <StatsMaterial title={"Average Speed"} num={Math.trunc(data.averageSpeed)} time={""} unit={"km/hr"} />
            <StatsMaterial title={"Top Speed"} num={Math.trunc(data.topSpeed)} time={""} unit={"km/hr"} />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 lg:p-8">
            <h2 className="text-2xl font-bold">Fuel</h2>
            <StatsMaterial title={"Fuel Consumed"} num={85.19} time={""} unit={"L"} />
            <StatsMaterial title={"Fuel Cost"} num={85.19} time={""} unit={"Rupees"} />
          </div>
        </div>
      </div>
    )
   }
  else {
    return (
      <div className="rounded-md border-l-4 border-red-500 bg-red-100 p-4">
        <div className="flex items-center justify-between space-x-4">
          <div>
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-red-600">
              The data is not available in the dummy data provided
            </p>
            
          </div>
          <Link to={'/range'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out">Change Range</Link>
        </div>
      </div>
    )

  }
}

export default Stats
