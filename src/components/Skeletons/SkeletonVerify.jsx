import { SkeletonContainer, Div, SkeletonItem } from "./Skeleton.styled";

export const SkeletonVerify = ({ height, marginBottom}) => {


  return <SkeletonContainer>
            
          <SkeletonItem height={height || "80px"} marginBottom={marginBottom || "20px"} />
          <SkeletonItem height={height || "60px"} marginBottom={marginBottom || "20px"}/>
          <SkeletonItem height={height || "40px"} marginBottom={marginBottom || "20px"} />
          <SkeletonItem height={height || "40px"} marginBottom={marginBottom || "20px"} />
    
            <Div>
              <SkeletonItem height={height}/>
              <SkeletonItem height={height}/>
            </Div>
    
          </SkeletonContainer>
};

