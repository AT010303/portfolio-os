// /* eslint-disable react/function-component-definition */
// import type { FC } from 'react';
// import { ThemeProvider } from 'styled-components';
// // eslint-disable-next-line import/extensions
// import GlobalStyle from 'styles/GlobalStyle';
// import themes from 'styles/themes.json';

// import type { StyledAppProps } from '../../types/components/pages/StyledApp';

// const StyledApp: FC<StyledAppProps> = ({
//   children,
//   theme = themes.default
// }) => (
//   <>
//     <GlobalStyle />
//     <ThemeProvider theme={theme}>{children}</ThemeProvider>
//   </>
// );

// export default StyledApp;


// github copilot sugested but abive code also works 

/* eslint-disable react/function-component-definition */
import type { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components'; 
// eslint-disable-next-line import/extensions
import GlobalStyle from 'styles/GlobalStyle';
import themes from 'styles/themes.json';

import type { StyledAppProps } from '../../types/components/pages/StyledApp';

interface StyledAppPropsWithChildren extends StyledAppProps {
    children: ReactNode;
}

const StyledApp: FC<StyledAppPropsWithChildren> = ({
    children,
    theme = themes.default
}) => (
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
);

export default StyledApp;
