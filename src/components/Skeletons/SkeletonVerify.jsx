import { SkeletonContainer, Div, SkeletonItem } from "./Skeleton.styled";

export const SkeletonVerify = ({ height="40px", marginBottom = "30px"}) => {


  return <SkeletonContainer>
            
          <SkeletonItem height={height} marginBottom={marginBottom} />
    
          <Div>
              <SkeletonItem height={height}/>
              <SkeletonItem height={height}/>
              <SkeletonItem height={height}/>
            </Div>
    
          </SkeletonContainer>
};
