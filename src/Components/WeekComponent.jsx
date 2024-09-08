import { useContext } from 'react'
import { Link } from 'react-router-dom';
import DummyData from '../DummyData/DummyData.json'
import { rangeContext } from '../Context/Range'

const Data = DummyData;


const WeekComponent = () => {

  const range = useContext(rangeContext);

  const thisWeekFun = () => {
    range.setSelectedTab("This Week");
    const currentDay = new Date(Data[0].startDate).getDay();

    let thisObject = {
      distance: 0,
      duration: 0,
      averageSpeed: 0,
      topSpeed: 0,
      score: 0
    }

    const thisWeekData = Data.slice(0, currentDay);

    let iteration = 0;

    thisWeekData.map((item) => {
        thisObject.distance += item.distance;
        thisObject.duration += item.duration;
        thisObject.averageSpeed += item.averageSpeed;
        if(thisObject.topSpeed<item.topSpeed){
          thisObject.topSpeed = item.topSpeed
        }
        thisObject.score += item.score;
        iteration++;
    })

    thisObject.averageSpeed = thisObject.averageSpeed / iteration;
    thisObject.score = thisObject.score/iteration;
    range.setcalculatedData(thisObject);
    console.log(range.calculatedData);

  }

  const lastWeekFun = () => {
    range.setSelectedTab("Last Week");
    const currentDay = new Date(Data[0].startDate).getDay();

    let thisObject = {
      distance: 0,
      duration: 0,
      averageSpeed: 0,
      topSpeed: 0,
      score: 0
    }

    const lastWeekData = Data.slice(currentDay, 7);
    let iteration = 0;

    lastWeekData.map((item) => {
        thisObject.distance += item.distance;
        thisObject.duration += item.duration;
        thisObject.averageSpeed += item.averageSpeed;
        if(thisObject.topSpeed<item.topSpeed){
          thisObject.topSpeed = item.topSpeed
        }
        thisObject.score += item.score;
        iteration++;
    })

    thisObject.averageSpeed = thisObject.averageSpeed / iteration;
    thisObject.score = thisObject.score/iteration;
    range.setcalculatedData(thisObject);
    console.log(range.calculatedData);
  }

  const last7Fun = () => {
    range.setSelectedTab("Last 7 Days");

    let thisObject = {
      distance: 0,
      duration: 0,
      averageSpeed: 0,
      topSpeed: 0,
      score: 0
    }

    const previousWeekData = Data.slice(0, 7);
    let iteration = 0;

    previousWeekData.map((item) => {
        thisObject.distance += item.distance;
        thisObject.duration += item.duration;
        thisObject.averageSpeed += item.averageSpeed;
        if(thisObject.topSpeed<item.topSpeed){
          thisObject.topSpeed = item.topSpeed
        }
        thisObject.score += item.score;
        iteration++;
    })
    
    thisObject.averageSpeed = thisObject.averageSpeed / iteration;
    thisObject.score = thisObject.score/iteration;
    range.setcalculatedData(thisObject);
    console.log(range.calculatedData);
  }


  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <div className="min-w-full leading-normal">
            <div className='flex flex-col'>

            <button onClick={thisWeekFun} className={range.selectedTab === 'This Week' ? 'bg-blue-500 text-white' : 'bg-white'}>
                <div className={range.selectedTab === 'This Week' ? 'border-b border-blue-500' : 'border-b'}>
                  <div className="px-5 py-5">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <h2 className={range.selectedTab === 'This Week' ?"text-white-900 font-bold":"text-gray-900 font-bold"}>
                        This Week
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              <button onClick={lastWeekFun} className={range.selectedTab === 'Last Week' ? 'bg-blue-500 text-white' : 'bg-white'}>
                <div className={range.selectedTab === 'Last Week' ? 'border-b border-blue-500' : 'border-b'}>
                  <div className="px-5 py-5">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <h2 className={range.selectedTab === 'Last Week' ?"text-white-900 font-bold":"text-gray-900 font-bold"}>
                        Last Week
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              <button onClick={last7Fun} className={range.selectedTab === 'Last 7 Days' ? 'bg-blue-500 text-white' : 'bg-white'}>
                <div className={range.selectedTab === 'Last 7 Days' ? 'border-b border-blue-500' : 'border-b'}>
                  <div className="px-5 py-5">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <h2 className={range.selectedTab === 'Last 7 Days' ?"text-white-900 font-bold":"text-gray-900 font-bold"}>
                        Last 7 days
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </button>

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

export default WeekComponent