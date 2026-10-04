import React from "react";
import Post from "./components/Post";

import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
 import image3 from "./assets/image3.jpg";
 import "./App.css";

  function App() {
    return(
      <div className="posts">
        <h1>
          mini Image Feed
        </h1>
        <Post image ={image1}
        name ="Gayathri"/>
<Post image={image2} name="john"/>
<Post image={image3} name="anjali"/>
      </div>
        
    );
  }

  export default App;