import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonHeaderContacts = (props) => (
  <ContentLoader 
    speed={2}
    width={269}
    height={130}
    viewBox="0 0 269 130"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="68" y="0" rx="0" ry="0" width="0" height="1" /> 
    <rect x="1900" y="32" rx="0" ry="0" width="175" height="85" /> 
    <rect x="98" y="50" rx="0" ry="0" width="2" height="0" /> 
    <rect x="98" y="48" rx="0" ry="0" width="2" height="1" /> 
    <rect x="47" y="15" rx="0" ry="0" width="140" height="21" /> 
    <rect x="26" y="45" rx="0" ry="0" width="202" height="25" /> 
    <rect x="26" y="79" rx="0" ry="0" width="204" height="26" />
  </ContentLoader>
);

export default SkeletonHeaderContacts;
