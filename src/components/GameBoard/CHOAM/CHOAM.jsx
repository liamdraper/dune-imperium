import SellMelange from "./SellMelange/SellMelange";
import SecureContract from "./SecureContract/SecureContract";
import "./CHOAM.css"

export default function CHOAM() {
    return (
        <>
            <div className="choamGrid">
            <h2>CHOAM</h2>
            <SellMelange />
            <SecureContract />
            </div>
        </>
    )
}