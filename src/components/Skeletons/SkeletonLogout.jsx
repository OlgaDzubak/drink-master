import { Container, Skeleton } from '@mui/material';

export const SkeletonLogout = () => {

  return  <Container
            maxWidth="xl"
            disableGutters
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              paddingLeft: '0'
            }}
            
          >

            <Skeleton
              variant="rounded"
              animation="wave"
              sx={{
                maxWidth: '392px',
                width: '100%',
                height: '24px',
                backgroundColor: 'rgba(243, 243, 243, 0.2)',
                marginBottom : '40px',
              }}
            />

            <Container
            maxWidth="xl"
            disableGutters
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '12px',
              paddingLeft: '0px',
              paddingRight: '0px',
            }}
            >

              <Skeleton
                variant="rounded"
                animation="wave"
                sx={{
                  width: '190px',
                  height: '44px',
                  backgroundColor: 'rgba(243, 243, 243, 0.2)',
                }}
              />

              <Skeleton
                variant="rounded"
                animation="wave"
                sx={{
                  width: '190px',
                  height: '44px',
                  backgroundColor: 'rgba(243, 243, 243, 0.2)',
                }}
              />
            </Container>

          </Container>
};
