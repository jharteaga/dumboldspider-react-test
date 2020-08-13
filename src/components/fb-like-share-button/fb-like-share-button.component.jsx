import React from 'react';
import { FacebookProvider, Like } from 'react-facebook';

const FbLikeShareButton = () => {
  return (
    <FacebookProvider appId={process.env.REACT_APP_FB_APP_ID}>
      <Like href="http://www.facebook.com/dumb.old.spider" share width="100" />
    </FacebookProvider>
  );
};

export default FbLikeShareButton;
