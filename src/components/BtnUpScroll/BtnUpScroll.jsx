import ScrollToTop from "react-scroll-up"; 
import {ScrollToTopDiv, UpScrollSvg } from "./BtnUpScroll.styled";

export const BtnUpScroll = () => {
  
  return  <ScrollToTop
              showUnder={260}
              duration={2000}
              style={{
                position: 'fixed',
                bottom: '50px',
                right: '50px',
                width: '50px',
                height: '50px',
                cursor: 'pointer',
                transitionDuration: '0.5s',
                transitionTimingFunction: 'linear',
                transitionDelay: '0s',
                borderRadius: '100%',
                overflow: 'hidden',
                zIndex: '300',
              }}
          >
            <ScrollToTopDiv>
              <span>
                <UpScrollSvg/>
              </span>
            </ScrollToTopDiv>
          </ScrollToTop>
}