import { EmojiEmotions, Label, Room } from "@mui/icons-material";
import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';

export default function Share() {
  return (
        <div className="share">
           <div className="shareWrapper">
             <div className="shareTop">
                <img className="shareProfileImg" src="assets/person/1.jpg" alt=""/>
                <input placeholder="Whats in your mind?" type="text" className="shareInput"/>
                <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo/video</span>
           </div>
           <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
           </div>
           <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
           </div>
           <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod"className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
           </div>
                  <button className="shareButton">Share</button>
        </div>
       </div>
     </div>
   </div>
  </div>
           
  );
  }