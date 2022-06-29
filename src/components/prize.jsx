import React from 'react'
// import { useState } from 'react';
// import JSONDATA from "../JSONDATA.json"
// import JSONDATA from "../"
import JSONDATA from "../details.json"
import "./prize.css"
import Filter from './filter'
import {Dropdown} from './dropdown'







export default function Prize() {

    // function check(name){
    //     // return "hello"
    //     return(name.laureates ? name.laureates.map((details,ind)=>{
    //         // console.log(details.firstname)
    //         return(
    //             details.firstname
    //         )
    //     }) : "")
    // }

    // const content = JSONDATA.prizes
  return (
    <div>
    <Dropdown />
    <Filter />
    {/* {content.map((name, ind)=>{
        return(
            <>
            <div className="card">


            <h2 className="mx-2 my-2">Prize : {name.category} </h2> 
            <h2 className="my-2 py-2">Year : {name.year} </h2>
            <h2> firstName : {check(name)} </h2>
            </div>
            </>
        )
    })} */}
    
    </div>
  )
}
