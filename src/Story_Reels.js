import React from 'react';
import "./Story_Reels.css";
import Story from './Story';

function Story_Reels() {
    return (
        <div className="storyReel">
            
           {/* Story */}
           <Story 
            image="https://cdn2.momjunction.com/wp-content/uploads/2015/03/100-Most-Popular-And-Funny-Baby-Names-Of-2018-Revealed.jpg"
            profileSrc="https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?s=612x612"
            title="Vikash"
            />

           {/* Story */}
           <Story
            image="https://expertphotography.b-cdn.net/wp-content/uploads/2011/06/how-to-take-good-pictures-model-shoot.jpg"
            profileSrc="https://images.unsplash.com/photo-1615022702095-ff2c036f3360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80"
            title="Harshita"
            />

            {/* Story */}
            <Story 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ29WBfIwEqIdTycOP40sCwyZEVAQpYHRNxLDqeDck8BO_LjtGvXMZr-QQdiGYRu7VxuU&usqp=CAU"
            profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
            title="Sumit Soni"
            />

            {/* Story */}
            <Story
            image="https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo.jpg.landing-big_2x.jpg"
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT49lVeJq2QAD6w6c-tmzAg31hHmiyrRMrcXw&usqp=CAU"
            title="Yuvraj"
            />

            {/* Story */}
            <Story
            image="https://quicklearncomputer.com/wp-content/uploads/2021/10/Disadvantages-of-Mobile-Phone.webp"
            profileSrc="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200326191711/How-to-Think-Like-a-Programmer.png"
            title="Raushan"
            />


        </div>
    )
}

export default Story_Reels
