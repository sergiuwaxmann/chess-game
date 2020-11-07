import React from "react";

export default function Piece({ piece: { type, color } }) {
  const pieceImage = require(`./assets/${type}_${color}.png`);

  return (
    <div className="piece-container">
      <img src={pieceImage} alt="" className="piece" />
    </div>
  );
}
