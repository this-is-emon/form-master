import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

function Grandpa() {
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <div className="flex">
        <Dad></Dad>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </div>
    </div>
  );
}

export default Grandpa;
