import {createContext, useState} from 'react'
import DummyData from '../DummyData/DummyData.json'

export const rangeContext = createContext(null);
const Data = DummyData;

export const RangeProvider = (props) => {

  const [calculatedData, setcalculatedData] = useState({});
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");

  const [selectedTab, setSelectedTab ] = useState("");
  const [activeTab, setActiveTab] = useState('Day');


  return (
    <rangeContext.Provider value={{calculatedData, setcalculatedData, startDate, setstartDate, endDate, setendDate, selectedTab, setSelectedTab,activeTab, setActiveTab}}>
      {props.children}
    </rangeContext.Provider>
  );
};