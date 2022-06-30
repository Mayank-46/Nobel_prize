import React, { useEffect, useState } from 'react'
import JSONDATA from './../details.json'
// import filter1 from './filter1';
let lst=[]

export default function Dropdown() {

    // Filter part

    const [searchTerm,setSearchTerm] = useState('')
    function check(name){
        //     for(let i=0;i<658;i++){
        //        for(let j=0;j<name.laureates.length;j++){
        //         lst.push(name[0].laureates[0].firstname)
                   return(name.laureates ? name.laureates.map((details,ind)=>{
                    return(
                        (details.firstname +' '+ details.surname+',')
                 )
                 }) : "")
        //      }

        // }
        console.log(lst)
        
            
       }



    const mySet1 = new Set()
    let mySet2;
    const years = [];
    let year= 1900;
    for (var i =0; i < 119; i++) {
            years[i]=(year+i)
            // console.log(year+i)
        }
        
        for (let i = 0; i < JSONDATA.prizes.length; i++) {
            mySet1.add(JSONDATA.prizes[i].category)
          }
        //   console.log(mySet1)
        //   console.log(typeof(mySet1))
          mySet2 = Array.from(mySet1)
        //   console.log(typeof(mySet2))
        //   console.log(mySet2[0])



  return (

    <>
    {/* Dropdown Part */}
    <h2 className='Heading'>Nobel Prize Winners List</h2>

    <div className='header'>
    <div className='box' >
    <div class="input-group mb-3 ">
    <button class="button btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Category</button>
    <ul class="dropdown-menu ">
        {/* <li><a class="dropdown-item" href="#">{mySet2[0]}</a></li> */}
    {mySet2.map((value)=>{
        return (
            <><li><a class="dropdown-item" href="#"  onClick={()=>setSearchTerm(value)}>{value}</a></li><li><hr class="dropdown-divider" /></li></>)
    }
    )}
      
    </ul>
  </div>
  
  <div class="input-group mb-3 ">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Year</button>
    <ul class="dropdown-menu yearList">
    {years.map((value)=>{
        return (
            <><li><a class="dropdown-item" href="#"  onClick={()=>setSearchTerm(value)}>{value}</a></li><li><hr class="dropdown-divider" /></li></>)
    }
    )}
    </ul>
  </div>
  <div class="input-group mb-3">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={()=>setSearchTerm("")}>All</button>
  </div>
  </div>
  </div>


{/* Filter Part */}

        {/* {filter} */}
        {JSONDATA.prizes.filter((val,key)=>{
            if(searchTerm === ""){
              return val
            }
            else if(typeof(searchTerm)=="string" && val.category.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            }
            else if(typeof(searchTerm)=="number" && val.year.includes(searchTerm)){
                return val;
            }
          }).map((name,key)=>{
            return <div>
            <div className="card">
            <h2 className="mx-2 my-2">Prize Category : {name.category} </h2> 
            <h2 className="my-2 py-2">Year : {name.year} </h2>
            <h2> Name : {check(name)} </h2>
            </div>
        </div>
          })}
          

  </>        

  )

}