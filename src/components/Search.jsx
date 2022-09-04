import React,{useState} from 'react'
import  "./Search.css"
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import Button from '@mui/material/Button'
//  import PeopleIcon from '@mui/material/People'

function Search() {
    const[startDate,setStartDate]=useState(new Date()) //today's date
    const[endDate,setEndDate]=useState(new Date()) //today's date
    
    const selectionRange={
        startDate:startDate,
        endDate:endDate,
        key:"selection",
    };
    function handleSelect(ranges){
        setStartDate(ranges.startDate)
        setEndDate(ranges.endDate)
    }
  return (
    <div className='search'>
      <DateRangePicker ranges={[selectionRange]}
      onChange={handleSelect}/>
    <h2>Number of Guests
        {/* <PeopleIcon/> */}
    </h2>
  <input min={0} defaultValue={2}  type="number" />
  <Button>Search AIRBNB</Button>

    </div>
  )
}

export default Search

//install npm i react-date-range
//npm i date-fns