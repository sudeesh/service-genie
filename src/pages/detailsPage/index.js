import React from 'react';
import DetailMobileLoadable from './DetailMobileLoadable';
import DetailsDesktopLoadable from './DetailsDesktopLoadable';

function DetailsMain(props) {
  if (props.device.breakpoint === 'phone') {
    return <DetailMobileLoadable {...props} />;
  } else {
    return <DetailsDesktopLoadable {...props} />;
  }
}

export default DetailsMain;
