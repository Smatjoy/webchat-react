import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({behaviour: "smooth"});
  },[])

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  console.log(text);
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Appleseed</span>
            <p>Lorem, ipsum dolor sit amet consectetur</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              voluptas voluptatibus ipsa, recusandae corrupti maxime repudiandae
              nulla sed quisquam ducimus harum iure a.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              voluptas voluptatibus ipsa, recusandae corrupti maxime repudiandae
              nulla sed quisquam ducimus harum iure a.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              voluptas voluptatibus ipsa, recusandae corrupti maxime repudiandae
              nulla sed quisquam ducimus harum iure a.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              voluptas voluptatibus ipsa, recusandae corrupti maxime repudiandae
              nulla sed quisquam ducimus harum iure a.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              voluptas voluptatibus ipsa, recusandae corrupti maxime repudiandae
              nulla sed quisquam ducimus harum iure a.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              voluptas voluptatibus ipsa, recusandae corrupti maxime repudiandae
              nulla sed quisquam ducimus harum iure a.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              voluptas voluptatibus ipsa, recusandae corrupti maxime repudiandae
              nulla sed quisquam ducimus harum iure a.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              voluptas voluptatibus ipsa, recusandae corrupti maxime repudiandae
              nulla sed quisquam ducimus harum iure a.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              voluptas voluptatibus ipsa, recusandae corrupti maxime repudiandae
              nulla sed quisquam ducimus harum iure a.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://www.italia.it/content/dam/tdh/it/destinations/campania/media/20210326095016-napoli-shutterstock-1616075848.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              voluptas voluptatibus ipsa, recusandae corrupti maxime repudiandae
              nulla sed quisquam ducimus harum iure a.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Scrivi un messaggio..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Invia</button>
      </div>
    </div>
  );
};

export default Chat;
