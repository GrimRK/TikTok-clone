import React from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({channel,description,song}) {
  return (
    <div className='videoFooter'>
        <div className='videoFooter_text'>
            <h3>{channel}</h3>
            <p>{description}</p>
            <div className='videoFooter_ticker'>
            <MusicNoteIcon className="videoFooter_icon" />
            <marquee>{song}</marquee>
            </div>
        </div>
        <img 
        className="videoFooter_disc"
        src="https://static.thenounproject.com/png/934821-200.png" alt="">
        </img>
    </div>

  )
}

export default VideoFooter;