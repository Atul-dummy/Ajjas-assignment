import { useContext } from 'react'
import { Link } from 'react-router-dom';
import DummyData from '../DummyData/DummyData.json'
import { rangeContext } from '../Context/Range'

const Data = DummyData;


const MonthComponent = () => {

  const range = useContext(rangeContext);
  
  const thisMonthFun = () => {
    range.setSelectedTab("This Month");
    const currentMonth = new Date(Data[0].startDate).getMonth();
    
    let thisObject = {
      distance: 0,
      duration: 0,
      averageSpeed: 0,
      topSpeed: 0,
      score: 0
    }

    let iteration = 0;
    Data.map((item) => {
      if (new Date(item.startDate).getMonth() === currentMonth) {
        thisObject.distance += item.distance;
        thisObject.duration += item.duration;
        thisObject.averageSpeed += item.averageSpeed;
        if(thisObject.topSpeed<item.topSpeed){
          thisObject.topSpeed = item.topSpeed
        }
        thisObject.score += item.score;
        iteration++;
      }
    })

    thisObject.averageSpeed = thisObject.averageSpeed / iteration;
    thisObject.score = thisObject.score / iteration;
    range.setcalculatedData(thisObject);
    console.log(range.calculatedData);
    
  }

  const lastMonthFun = () => {
    range.setSelectedTab("Last Month");
    const previousMonth = new Date(Data[0].startDate).getMonth() - 1;
    let thisObject = {
      distance: 0,
      duration: 0,
      averageSpeed: 0,
      topSpeed: 0,
      score: 0
    }

    let iteration = 0;
    Data.map((item) => {
      if (new Date(item.startDate).getMonth() === previousMonth) {
        thisObject.distance += item.distance;
        thisObject.duration += item.duration;
        thisObject.averageSpeed += item.averageSpeed;
        if(thisObject.topSpeed<item.topSpeed){
          thisObject.topSpeed = item.topSpeed
        }
        thisObject.score += item.score;
        iteration++;
      }
    })

    thisObject.averageSpeed = thisObject.averageSpeed / iteration;
    thisObject.score = thisObject.score/iteration;
    range.setcalculatedData(thisObject);
    console.log(range.calculatedData);
  }

  const last30Fun = () => {
    range.setSelectedTab("Last 30 Days");
    const last30data = Data.slice(0, 30);
    let thisObject = {
      distance: 0,
      duration: 0,
      averageSpeed: 0,
      topSpeed: 0,
      score: 0
    }

    let iteration = 0;
    last30data.map((item) => {
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

            <button onClick={thisMonthFun} className={range.selectedTab === 'This Month' ? 'bg-blue-500 text-white' : 'bg-white'}>
                <div className={range.selectedTab === 'This Month' ? 'border-b border-blue-500' : 'border-b'}>
                  <div className="px-5 py-5">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <h2 className={range.selectedTab === 'This Month' ?"text-white-900 font-bold":"text-gray-900 font-bold"}>
                          This Month
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              <button onClick={lastMonthFun} className={range.selectedTab === 'Last Month' ? 'bg-blue-500 text-white' : 'bg-white'}>
                <div className={range.selectedTab === 'Last Month' ? 'border-b border-blue-500' : 'border-b'}>
                  <div className="px-5 py-5">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <h2 className={range.selectedTab === 'Last Month' ?"text-white-900 font-bold":"text-gray-900 font-bold"}>
                        Last Month
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              <button onClick={last30Fun} className={range.selectedTab === 'Last 30 Days' ? 'bg-blue-500 text-white' : 'bg-white'}>
                <div className={range.selectedTab === 'Last 30 Days' ? 'border-b border-blue-500' : 'border-b'}>
                  <div className="px-5 py-5">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <h2 className={range.selectedTab === 'Last 30 Days' ?"text-white-900 font-bold":"text-gray-900 font-bold"}>
                        Last 30 days
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

export default MonthComponent