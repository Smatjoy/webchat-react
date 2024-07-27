import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Appleseed</h2>
        <p>Lorem ipsum, dolor sit amet</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Impostazioni Chat</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Aiuto</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Foto Condivise</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://www.italia.it/content/dam/tdh/it/destinations/campania/media/20210326095016-napoli-shutterstock-1616075848.jpg"
                  alt=""
                />
                <span>photo_2024_napoli.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://www.italia.it/content/dam/tdh/it/destinations/campania/media/20210326095016-napoli-shutterstock-1616075848.jpg"
                  alt=""
                />
                <span>photo_2024_napoli.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://www.italia.it/content/dam/tdh/it/destinations/campania/media/20210326095016-napoli-shutterstock-1616075848.jpg"
                  alt=""
                />
                <span>photo_2024_napoli.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://www.italia.it/content/dam/tdh/it/destinations/campania/media/20210326095016-napoli-shutterstock-1616075848.jpg"
                  alt=""
                />
                <span>photo_2024_napoli.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>File Condivisi</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Blocca Utente</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};

export default Detail;
