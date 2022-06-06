import React, { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function VideoSidebar({likes,comments,shares}) {

    const [liked,setLiked]=useState(false);
    var like=parseInt(likes);
  return (
    <div className="videoSidebar">
        
            {
                liked?(
                    <div className="videoSidebar_icon">
                <FavoriteIcon fontSize="large"
                onClick={(e)=>{setLiked(false);}}></FavoriteIcon>
                <p>{like+1}</p>
                </div>
                ):(
                    <div className="videoSidebar_icon">
                    <FavoriteBorderIcon 
                    fontSize="large"
                    onClick={(e)=>{setLiked(true);}}></FavoriteBorderIcon>
                    <p>{like}</p>
                    </div>
                )
            }
            
            
        
        <div className="videoSidebar_icon">
            <CommentIcon fontSize="large"></CommentIcon>
            <p>{comments}</p>
        </div>
        <div className="videoSidebar_icon">
            <ShareIcon fontSize="large"></ShareIcon>
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSidebar;