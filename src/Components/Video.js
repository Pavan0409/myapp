import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const Video = () => {
  const list = [
    { id: 1, url: "https://www.youtube.com/watch?v=W0-Oa3s0zss" },
    { id: 2, url: "https://www.youtube.com/watch?v=2K_A_UNibAw" },
    { id: 3, url: "https://www.youtube.com/watch?v=cdTy8e7XMxA" },
    { id: 4, url: "https://www.youtube.com/watch?v=3inaW8s8mA4" },
    { id: 5, url: "https://www.youtube.com/watch?v=Ud3uAexKqPc" },
    { id: 6, url: "https://www.youtube.com/watch?v=rD4p1-DRXMs" },
    { id: 7, url: "https://www.youtube.com/watch?v=1wPR5NHxWNI" },
    { id: 8, url: "https://www.youtube.com/watch?v=M1MW5kfW4ms" },
    { id: 9, url: "https://www.youtube.com/watch?v=AtTaxgPc31c" },
    { id: 10, url: "https://www.youtube.com/watch?v=TcaRL8q-YhQ" },
    { id: 11, url: "https://www.youtube.com/watch?v=HpUHaczM4hc" },
  ];
  return (
    <div style={{ backgroundColor: "purple", height: "100%" }}>
      <span style={{ backgroundColor: "green", margin: "7px", width: "100px" }}>
        <Link to="/header" style={{ textDecoration: "none" }}>
          Back
        </Link>
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "155px",
        }}
      >
        <ReactPlayer
          height="480px"
          width="890px"
          controls
          url={"https://www.youtube.com/watch?v=Bz-BuTNoEMk"}
          poster="https://www.example.com/posterImage.png"
        >
          <ul style={{ liststyleTye: "none", height: "100px", width: "100px" }}>
            {list.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.url}>.</a>
                </li>
              );
            })}
          </ul>
        </ReactPlayer>
      </div>
    </div>
  );
};

export default Video;
