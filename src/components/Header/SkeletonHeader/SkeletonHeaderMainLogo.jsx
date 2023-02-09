import React from 'react'
import ContentLoader from "react-content-loader"
const SkeletonHeaderMainLogo = (props) => (
    <ContentLoader 
    speed={2}
    width={255}
    height={180}
    viewBox="0 0 255 180"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="68" y="0" rx="0" ry="0" width="0" height="1" /> 
    <rect x="1900" y="32" rx="0" ry="0" width="175" height="85" /> 
    <rect x="98" y="50" rx="0" ry="0" width="2" height="0" /> 
    <rect x="98" y="48" rx="0" ry="0" width="2" height="1" /> 
    <rect x="13" y="3" rx="0" ry="0" width="198" height="170" />
  </ContentLoader>
)

export default SkeletonHeaderMainLogo
