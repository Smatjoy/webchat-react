import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const imgUrl = await upload(avatar.file);

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });

      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });
      
      toast.success("Account creato con successo! Puoi eseguire il login ora.");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Bentornato,</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Accedi</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Crea un Account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            Carica immagine
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Accedi</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
