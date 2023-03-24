import "./Modal.css";
import { leadersArr } from "../../card-data";

export default function Modal() {
    return (
        <div className="modal">
            <h1>Pick Leader</h1>
            <button>{leadersArr[0].name}</button>
        </div>
    )
}