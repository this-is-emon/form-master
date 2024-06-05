import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

function Dad() {
  return (
    <div>
      <h2>Dad</h2>
      <section className="flex">
        <Myself></Myself>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
}

export default Dad;
