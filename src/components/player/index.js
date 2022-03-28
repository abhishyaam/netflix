import React, { useState, useContext, createContext } from 'react';

import { Container, Button, Overlay, Inner, Close } from './styles/player';

const PlayerContext = createContext({});

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer ? (
    <Overlay onClick={() => setShowPlayer(false)} data-testid='player'>
      <Inner>
        <video id='netflix-player' controls>
          <source src={src} type='video/mp4' />
        </video>
        <Close />
      </Inner>
    </Overlay>
  ) : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { setShowPlayer } = useContext(PlayerContext);

  return <Button onClick={() => setShowPlayer(true)}>Play</Button>;
};
