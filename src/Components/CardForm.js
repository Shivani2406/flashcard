import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../utils/api/index";

function CardForm ({onSubmit, deck, handleChange, handleDone, newCard}){
return (
    <form onSubmit={onSubmit}>
                <h2>{deck.name}: Add Card</h2>
                <div className="form-group">
                    <label>Front</label>
                    <textarea
                        id="front"
                        name="front"
                        className="form-control"
                        onChange={handleChange}
                        type="text"
                        value={newCard.front}
                    />
                </div>
                <div className="form-group">
                    <label>Back</label>
                    <textarea
                        id="back"
                        name="back"
                        className="form-control"
                        onChange={handleChange}
                        type="text"
                        value={newCard.back}
                    />
                </div>
                <button
                    className="btn btn-secondary mx-1"
                    onClick={() => handleDone()}
                >
                    Done
                </button>
                <button className="btn btn-primary mx-1" type="submit">
                    Save
                </button>
            </form>
)}

export default CardForm;