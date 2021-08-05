import React from 'react';
import cx from 'classnames';
import verifiedBadge from '../../images/Verified.png';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
  },
  verifiedBadge: {
    height: '20px',
    width: '20px',
    justifySelf: 'flex-start',
    alignSelf: 'center',
    marginLeft: '5px',
  },
});

export default function VerifiedTile({
  garageTitle,
  location,
  onClick,
  verified,
  classNames,
}) {
  const classes = useStyles();
  const badgeClassName = cx(classNames, classes.verifiedBadge);
  return (
    <div className={classes.root}>
      <h3
        className="text-transform-captilize cursor-pointer"
        onClick={() => onClick(garageTitle, location)}
      >
        {garageTitle}
      </h3>
      {Boolean(verified || false) ? (
        <img
          src={verifiedBadge}
          alt={`${garageTitle} verfied`}
          className={badgeClassName}
        />
      ) : null}
    </div>
  );
}
