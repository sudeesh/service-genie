import { Link } from '@material-ui/core';
import React from 'react';
import './backtosearch.styles.scss';

function BackToSearchButton() {
  return (
    <div style={{ textAlign: 'right', width: '100%', marginTop: '10px' }}>
      <Link
        variant="contained"
        className="cursor-pointer back-search__button back-search__button--brand-button"
        color="primary"
        href="/"
      >
        Back to search
      </Link>
    </div>
  );
}

export default BackToSearchButton;
