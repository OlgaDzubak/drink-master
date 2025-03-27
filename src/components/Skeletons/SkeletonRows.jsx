import { Container, Skeleton } from '@mui/material';

export const SkeletonRows = ({ totalRow, heightArr=[]}, margin=[]) => {
  return <Container
            maxWidth="xl"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            {[...Array(totalRow)].map((_, index) => (
              <Skeleton
                variant="rounded"
                animation="wave"
                sx={{
                  minWidth: 300,
                  width: '100%',
                  backgroundColor: 'rgba(243, 243, 243, 0.2)',
                }}
                height={heightArr[index] || 54}
                key={index}
              />
            ))}
          </Container>
};
