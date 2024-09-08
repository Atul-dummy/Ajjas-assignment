import { useContext } from 'react'
import { Link } from 'react-router-dom';
import DummyData from '../DummyData/DummyData.json'
import { rangeContext } from '../Context/Range'

const Data = DummyData;

const OthersComponent = () => {
  const range = useContext(rangeContext);

  const thisYearFun = () => {
    range.setSelectedTab("This Year");
    const currentYear = new Date(Data[0].startDate).getFullYear();

    let thisObject = {
      distance: 0,
      duration: 0,
      averageSpeed: 0,
      topSpeed: 0,
      score: 0
    }

    let iteration = 0;
    Data.map((item) => {
      if (new Date(item.startDate).getFullYear() === currentYear) {
        thisObject.distance += item.distance;
        thisObject.duration += item.duration;
        thisObject.averageSpeed += item.averageSpeed;
        if (thisObject.topSpeed < item.topSpeed) {
          thisObject.topSpeed = item.topSpeed
        }
        console.log(item.score);
        if (item.score != undefined) {
          thisObject.score += item.score;
        }
        iteration++;
      }
    })

    thisObject.averageSpeed = thisObject.averageSpeed / iteration;
    thisObject.score = thisObject.score / iteration;
    range.setcalculatedData(thisObject);
    console.log(range.calculatedData);

  }

  const lastYearFun = () => {
    range.setSelectedTab("Last Year");
    const previousYear = new Date(Data[0].startDate).getFullYear() - 1;

    let thisObject = {
      distance: 0,
      duration: 0,
      averageSpeed: 0,
      topSpeed: 0,
      score: 0
    }
    // in the provided dummydata the last year data is not present so it will give default values
    let iteration = 0;
    Data.map((item) => {
      if (new Date(item.startDate).getFullYear() === previousYear) {
        thisObject.distance += item.distance;
        thisObject.duration += item.duration;
        thisObject.averageSpeed += item.averageSpeed;
        if (thisObject.topSpeed < item.topSpeed) {
          thisObject.topSpeed = item.topSpeed
        }
        if (item.score != undefined) {
          thisObject.score += item.score;
        }
        iteration++;
      }
    })

    thisObject.averageSpeed = thisObject.averageSpeed / iteration;
    thisObject.score = thisObject.score / iteration;
    range.setcalculatedData(thisObject);
    console.log(range.calculatedData);
  }

  const LifetimeFun = () => {
    range.setSelectedTab("Lifetime");

    let thisObject = {
      distance: 0,
      duration: 0,
      averageSpeed: 0,
      topSpeed: 0,
      score: 0
    }

    let iteration = 0;

    Data.map((item) => {
      thisObject.distance += item.distance;
      thisObject.duration += item.duration;
      thisObject.averageSpeed += item.averageSpeed;
      if (thisObject.topSpeed < item.topSpeed) {
        thisObject.topSpeed = item.topSpeed
      }
      if (item.score != undefined) {
        thisObject.score += item.score;
      }
      iteration++;
    })

    thisObject.averageSpeed = thisObject.averageSpeed / iteration;
    thisObject.score = thisObject.score / iteration;
    range.setcalculatedData(thisObject);
    console.log(range.calculatedData);
  }


  // in the provided dummydata if the custom data is not present it will give default values
  const Custom = () => {
    range.setSelectedTab("Custom");

    const start = Date.parse(range.startDate);
    const end = Date.parse(range.endDate);

    let thisObject = {
      distance: 0,
      duration: 0,
      averageSpeed: 0,
      topSpeed: 0,
      score: 0
    }

    let iteration = 0;
    Data.map((item) => {
      if (item.startDate >= start && item.startDate <= end) {
        thisObject.distance += item.distance;
        thisObject.duration += item.duration;
        thisObject.averageSpeed += item.averageSpeed;
        if (thisObject.topSpeed < item.topSpeed) {
          thisObject.topSpeed = item.topSpeed
        }
        if (item.score != undefined) {
          thisObject.score += item.score;
        }
        iteration++;
      }

    })

    thisObject.averageSpeed = thisObject.averageSpeed / iteration;
    thisObject.score = thisObject.score / iteration;
    range.setcalculatedData(thisObject);
    console.log(range.calculatedData);
  }

  return (
    <div className="bg-white p-6 rounded-md w-full">
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <div className="min-w-full leading-normal">
            <div className='flex flex-col'>

              <button onClick={thisYearFun} className={range.selectedTab === 'This Year' ? 'bg-blue-500 text-white' : 'bg-white'}>
                <div className={range.selectedTab === 'This Year' ? 'border-b border-blue-500' : 'border-b'}>
                  <div className="px-5 py-5">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <h2 className={range.selectedTab === 'This Year' ? "text-white-900 font-bold" : "text-gray-900 font-bold"}>
                          This Year
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              <button onClick={lastYearFun} className={range.selectedTab === 'Last Year' ? 'bg-blue-500 text-white' : 'bg-white'}>
                <div className={range.selectedTab === 'Last Year' ? 'border-b border-blue-500' : 'border-b'}>
                  <div className="px-5 py-5">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <h2 className={range.selectedTab === 'Last Year' ? "text-white-900 font-bold" : "text-gray-900 font-bold"}>
                          Previous Year
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              <button onClick={LifetimeFun} className={range.selectedTab === 'Lifetime' ? 'bg-blue-500 text-white' : 'bg-white'}>
                <div className={range.selectedTab === 'Lifetime' ? 'border-b border-blue-500' : 'border-b'}>
                  <div className="px-5 py-5">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <h2 className={range.selectedTab === 'Lifetime' ? "text-white-900 font-bold" : "text-gray-900 font-bold"}>
                          Lifetime
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              <div className="bg-white border-b">
                <div className="px-5 py-5">
                  <h2 className="text-gray-900 mb-5 font-bold">
                    Custom
                  </h2>
                  <div className="flex items-center">
                    <div className="ml-3 flex flex-col">
                      <label className="mb-2" htmlFor="startDate">Start Date</label>
                      <input className="rounded-md bg-white px-3 py-2 text-sm text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" type="date" id="startDate" name="startDate" onChange={(e) => range.setstartDate(e.target.value)} />
                    </div>
                    <div className="ml-3 flex flex-col">
                      <label className="mb-2" htmlFor="endDate">End Date</label>
                      <input className="rounded-md bg-white px-3 py-2 text-sm text-black shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" type="date" id="endDate" name="endDate" onChange={(e) => range.setendDate(e.target.value)} />
                    </div>
                  </div>
                  <Link to={"/"}>
                    <button onClick={Custom} className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Save</button>
                  </Link>
                </div>
              </div>
              <Link to={'/'} className="flex justify-center text-blue-500 my-10 hover:text-blue-700 font-bold">
                <button className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Show Stats</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default OthersComponent