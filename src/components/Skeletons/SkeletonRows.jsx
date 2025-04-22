import { SkeletonContainer, SkeletonItem } from "./Skeleton.styled";

export const SkeletonRows = ({rows=1, gap="20px", heightArr=[] }) => {

  return <SkeletonContainer gap={gap}>
          {
            [...Array(rows)].map((_, idx) => <SkeletonItem key={idx} height={heightArr.length > 0 ? (heightArr.length > idx ? `${heightArr[idx]}px`: `${heightArr[heightArr.length-1]}px`) : "40px" } />)
          }
          </SkeletonContainer>
};
