import { Link } from '@material-ui/core';
import React from 'react';
import './backtosearch.styles.scss';

function BackToSearchButton({ renderedIn }) {
  const setWidth = () => {
    if (renderedIn === 'list-page') {
      return 'calc(100% - 15px)';
    }
    return '100%';
  };

  return (
    <div style={{ textAlign: 'right', width: setWidth(), marginTop: '10px' }}>
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
