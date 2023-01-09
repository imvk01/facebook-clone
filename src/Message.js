import React, { useState } from 'react';
import "./Message.css";
import {Avatar} from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import {useStateValue} from "./StateProvider";
import firebase from 'firebase';
import db from "./firebase";

function Message() {

    const[{user}, dispatch] = useStateValue();

    const[input, setInput] = useState("");

    const [imageUrl, setImageUrl] = useState("");
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        // we use some DB here to post anything in the feed (here we programmatically push all data to DB)
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        });
        
        setInput("");
        setImageUrl("");
    };
    
    return (
        <div className="message">
            <div className="message_top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input value={input} onChange= {(e)=> setInput(e.target.value)} className="message_input" placeholder={`What's on your mind, ${user.displayName}?`}/>
                    
                    <input value={imageUrl} onChange= {(e)=> setImageUrl(e.target.value)} placeholder="Image URL (Optioanl)"/>
                
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>


            <div className="message_bottom">
                <div className="message_option">
                    <VideocamIcon style={{color:"red"}}/>
                    <h4>Live Video</h4>
                </div>

                <div className="message_option">
                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <h4>Photo/Video</h4>
                </div>

                <div className="message_option">
                    <InsertEmoticonIcon style={{color:"orange"}}/>
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
            
        </div>
    )
}

export default Message ;
