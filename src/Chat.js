import React, {useEffect,useState} from 'react'
import "./Chat.css"
import { Avatar, IconButton } from "@material-ui/core"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from "@material-ui/icons/MoreVert"
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import { useParams } from "react-router-dom"
import db from './firebase';


const Chat = () => {
    const [seed, setSeed]=useState('')
    const [input, setInput]=useState('')
    const [roomName, setRoomName]=useState('')
    const { roomId } = useParams()
    

    
    useEffect(()=>{
       if(roomId){
           db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
               setRoomName(snapshot.data().name)
           ))
       }
    }, [roomId])

    useEffect(()=>{
     setSeed(Math.floor(Math.random() * 5000))
    }, [])

const sendMessage=(e)=>{
e.preventDefault();
setInput("")
}

    return (
        <div className="chat">
            <div className="chat__header">
             <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chat__headerInfo">
                <h3>{roomName}</h3>
                <p>Last seen at ....</p>
            </div>
            <div className="chat__headerRight">
            <IconButton><DonutLargeIcon /></IconButton>
                  <IconButton><AttachFileIcon /></IconButton>
                  <IconButton> <MoreVertIcon /></IconButton>
            </div>
            </div>
            
            <div className="chat__body">
            <p className={`chat__message ${ true && 'chat__receiver'}`}>
                <span className="chat__name">
                      ChequeKoluoch
                </span>
               
                Hey Guys
                <span className="chat__timestamp">
                  3:52pm
                </span>
                </p> 

            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input type="text" 
                    value={input}
                    onChange={e=>setInput(e.target.value)}
                    placeholder="Type a message"/>
                    <button 
                    onClick={sendMessage}
                    type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat

