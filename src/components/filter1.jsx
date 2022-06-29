import React,{useState} from 'react'
import './../../src/components/prize.css';
import JSONDATA from './../details.json'
import mango  from './dropdown';
export default function filter1(value) {

    const [searchTerm,setSearchTerm] = useState('')
    function check(name){
      // return "hello"
      return(name.laureates ? name.laureates.map((details,ind)=>{
          // console.log(details.firstname)
          return(
              details.firstname
          )
      }) : "")
  }


  return (

    <div className="App">
      <input type="text" placeholder="search..." onChange={e=>setSearchTerm(e.target.value)} />
      {/* {console.log(JSONDATA)} */}
      {JSONDATA.prizes.filter((val)=>{
        if(searchTerm === ""){
          return val
        }
        else if(val.category.toLowerCase().includes(searchTerm.toLowerCase())){
          return val;
        }
      }).map((name,key)=>{
        return <div>
        <div className="card">
        <h2 className="mx-2 my-2">Prize : {name.category} </h2> 
        <h2 className="my-2 py-2">Year : {name.year} </h2>
        <h2> firstName : {check(name)} </h2>
        </div>
    </div>
      })}
    </div>
  );
    
  
}
