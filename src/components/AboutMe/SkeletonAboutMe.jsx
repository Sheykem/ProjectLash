import React from 'react';
import ContentLoader from 'react-content-loader';
import s from './SkeletonAbout.module.css';


const MyLoader = (props) => (
  <ContentLoader 
  className={s.skel}
    speed={2}
    width={1900}
    height={400}
    viewBox="0 0 1900 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="68" y="0" rx="0" ry="0" width="0" height="1" /> 
    <rect x="1900" y="32" rx="0" ry="0" width="175" height="85" /> 
    <rect x="98" y="50" rx="0" ry="0" width="2" height="0" /> 
    <rect x="98" y="48" rx="0" ry="0" width="2" height="1" /> 
    <rect x="183" y="-4" rx="0" ry="0" width="213" height="32" /> 
    <rect x="8" y="92" rx="0" ry="0" width="290" height="338" /> 
    <rect x="337" y="98" rx="0" ry="0" width="269" height="334" />
  </ContentLoader>
)

export default MyLoader
