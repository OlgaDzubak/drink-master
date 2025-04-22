import { SkeletonContainer, Div, SkeletonItem } from "./Skeleton.styled";

export const SkeletonLogout = ({ height="40px", marginBottom = "20px"}) => {


  return <SkeletonContainer>
            
    <SkeletonItem height={height} marginBottom={marginBottom} />
    
            <Div>
              <SkeletonItem height={height}/>
              <SkeletonItem height={height}/>
            </Div>
    
          </SkeletonContainer>
};
