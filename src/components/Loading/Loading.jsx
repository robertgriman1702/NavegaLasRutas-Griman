import { PacmanLoader } from "react-spinners";
import "./loading.css"; 

const Loading =  () => {
  return (
    <div className="loading-container">
      <PacmanLoader color="black"/>
    </div>
  );
}

export default Loading;