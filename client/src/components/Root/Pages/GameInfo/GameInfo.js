import React from 'react';
import { useParams } from 'react-router-dom';
const GameInfo = () => {
  const { gameId } = useParams();

  return (
    <div>
      <h3>gameID: {gameId}</h3>
    </div>
  );
};

export default GameInfo;
