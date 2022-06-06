import {useEffect,useState} from "react";
import "./App.css";
import Video from "./components/Video";
import axios from "./components/axios";

function App() {

  const [videos,setVideos]=useState([]);
  useEffect(() => {
    async function fetchData()
    {
      const req= await axios.get("v2/posts");
      setVideos(req.data);
      return req;
    }
    fetchData(); 
    
  },[]);
  console.log(videos);
  return (
    <div className="App">
      
      <div className="video_container">
        {
          videos.map(({url,channel,description,song,likes,comments,shares})=>(
            <Video
            key={channel}
             url={url}
             channel={channel}
             description={description}
             song={song}
             likes={likes}
             comments={comments}
             shares={shares}
             
             >
            </Video>
            
          ))
        }

      </div>
    </div>
  );
}


export default App;
