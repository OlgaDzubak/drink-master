import styled from '@emotion/styled';

export const Title = styled.h1`
  
  ${({hidden, theme, marginBottom})=> hidden 

                  ? ` width: 1px; 
                      height: 1px; 
                      margin: -1px;
                      padding: 0; 
                      border: 0; 
                      white-space: nowrap;
                      clip-path: inset(100%); 
                      clip: rect(0 0 0 0); 
                      overflow : hidden;`

                  : ` font-size: 32px; 
                      font-weight: 600; 
                      line-height: 1.1875;
                      margin-bottom: ${marginBottom || '40px'};
                      color: ${theme.mainTextColor};
                      transition: color var(--transition);

                      @media (min-width: 768px) and (max-width: 1279.98px) { 
                        font-size: 56px;
                        margin-bottom: ${marginBottom || '60px'};
                      }
                        
                      @media (min-width: 1280px) { 
                        font-size: 64px;
                        margin-bottom: ${marginBottom || '60px'};
                      }`
  }
`;

export const TitleH2 = styled.h2`
  
  ${({hidden, theme, marginBottom})=> hidden 

                  ? ` width: 1px; 
                      height: 1px; 
                      margin: -1px;
                      padding: 0; 
                      border: 0; 
                      white-space: nowrap;
                      clip-path: inset(100%); 
                      clip: rect(0 0 0 0); 
                      overflow : hidden;`

                  : ` font-size: 32px; 
                      font-weight: 600; 
                      line-height: 1.1875;
                      margin-bottom: ${marginBottom || '40px'};
                      color: ${theme.mainTextColor};
                      transition: color var(--transition);

                      @media (min-width: 768px) and (max-width: 1279.98px) { 
                        font-size: 56px;
                        margin-bottom: ${marginBottom || '60px'};
                      }
                        
                      @media (min-width: 1280px) { 
                        font-size: 64px;
                        margin-bottom: ${marginBottom || '60px'};
                      }`
  }
`;