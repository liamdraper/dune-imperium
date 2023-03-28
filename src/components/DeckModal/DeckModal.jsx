import './DeckModal.css';

export default function DeckModal({ showModal, setShowModal }) {
    return (
        <div style={{display:showModal}} className={"deck-modal"}>
            <button onClick={setShowModal('none')}></button>
        </div>
    )
}