import { useState } from 'react'
import './App.css'


const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
    setLiked(true);
  };

  return (
    <>
    <div>
      <h1>Click on the like!!</h1>
      <button onClick={handleLike}>
      {liked ?(<svg width="24px" height="24px" viewBox="0 -2 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2627 26.9922L29.2549 16C31.085 14.1699 32 11.9607 32 9.37258C32 6.78442 31.085 4.57528 29.2549 2.74517C27.4247 0.915055 25.2155 0 22.6274 0C20.0392 0 17.8301 0.915055 16 2.74517C14.1699 0.915055 11.9607 0 9.37258 0C6.78442 0 4.57528 0.915055 2.74517 2.74517C0.915056 4.57528 0 6.78442 0 9.37258C0 11.9607 0.915056 14.1699 2.74517 16L13.7373 26.9922C14.9869 28.2418 17.0131 28.2418 18.2627 26.9922Z" fill="url(#paint0_radial_103_1602)"/>
      <defs>
      <radialGradient id="paint0_radial_103_1602" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.07998 9.66157) rotate(59.8757) scale(18.7297 20.4872)">
      <stop stop-color="#FFAA00"/>
      <stop offset="1" stop-color="#F05206"/>
      </radialGradient>
      </defs>
      </svg>) : (
         <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 8.6901C22 9.8801 21.81 10.9801 21.48 12.0001H2.52C2.19 10.9801 2 9.8801 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.37 3.1001 10.99 3.9801 12 5.3301C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901Z" fill="#292D32"/>
      <path opacity="0.4" d="M21.4795 12C19.8995 17 15.0295 19.99 12.6195 20.81C12.2795 20.93 11.7195 20.93 11.3795 20.81C8.96953 19.99 4.09953 17 2.51953 12H21.4795Z" fill="#292D32"/>
      </svg>
            )}      
        Like
      </button>
      <span>{likes} {likes === 1 ? 'liked' : 'likes'}</span>
      </div>
      
    </>
  )
};


export default LikeButton;

