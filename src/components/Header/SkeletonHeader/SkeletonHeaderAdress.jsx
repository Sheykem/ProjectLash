import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonHeaderAdress = (props) => (
  <ContentLoader
    speed={2}
    width={190}
    height={100}
    viewBox="0 0 190 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="68" y="0" rx="0" ry="0" width="0" height="1" />
    <rect x="1900" y="32" rx="0" ry="0" width="175" height="85" />
    <rect x="0" y="0" rx="0" ry="0" width="80" height="16" />
    <rect x="0" y="30" rx="0" ry="0" width="135" height="18" />
    <rect x="98" y="50" rx="0" ry="0" width="2" height="0" />
    <rect x="98" y="48" rx="0" ry="0" width="2" height="1" />
    <rect x="0" y="65" rx="0" ry="0" width="135" height="18" />
  </ContentLoader>
);

export default SkeletonHeaderAdress;
