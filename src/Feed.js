import React, {useEffect, useState} from 'react';
import "./Feed.css";
import story_Reels from './Story_Reels';
import Message from './Message';
import Posts from './Posts';
import db from './firebase';

function Feed() {

    const[posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot(snapshot => {
          setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
        })
      }, [])

    return (
        <div className="feed">
            <story_Reels/>
            <Message/>
            {posts.map((post) => (
            <Posts
            key={post.data.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
            />
        ))}
        </div>
    )
}

export default Feed
