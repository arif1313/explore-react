import { useEffect, useState } from "react"
import Friend from "./friend"
import './friends.css'

export default function Friends(){
const [Friends, setFriends]= useState([])
useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(Friends => setFriends(Friends))
},[])
    return(

        <div className="box">
            <h2>Friends:{Friends.length} </h2>
            {
                Friends.map(friend=><Friend frd={friend}></Friend>)
            }
        </div>
    )
}