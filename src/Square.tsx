import React from 'react';

export type SquareProps = {
  position: number;
  onClick: () => void;
  player?: string;
}

export const Square: React.FC<SquareProps> = ({ player, position, onClick }) => {
  const clickHandler = () => {
    if (!player) {
      onClick();
    }
  }

  return <div data-testid={`square-${position}`} onClick={clickHandler}>{player}</div>;
};
