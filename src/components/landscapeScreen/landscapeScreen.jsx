import React from 'react';
import { LANDSCAPE_CONTENT, LANDSCAPE_TITLE } from '../../utils/constants';
import './landscapeScreen.styles.scss';

function LandscapeScreen() {
  return (
    <div className="landscape-screen">
      <p>{LANDSCAPE_TITLE}</p>
      <p>{LANDSCAPE_CONTENT}</p>
    </div>
  );
}

export default LandscapeScreen;
