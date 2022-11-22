import React, { useMemo } from 'react';
import {
  ITheme,
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle,
  css,
} from 'styled-components';
import { useSelector } from 'react-redux';
import { Colors } from './Theme.styled';
import { darkModeSelector } from './Theme.selector';

export const MEDIA_WIDTHS = {
  upToExtraSmall2: 420,
  upToExtraSmall1: 560,
  upToExtraSmall: 640,
  upToSmall: 768,
  upToMedium: 1056,
  upToLarge: 1460,
  uptoVeryLarge: 1600,
};

const mediaWidthTemplates: {
  [width in keyof typeof MEDIA_WIDTHS]: typeof css;
} = Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
  (accumulator as any)[size] = (a: any, b: any, c: any) => css`
    @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
      ${css(a, b, c)}
    }
  `;
  return accumulator;
}, {}) as any;

const white = '#FFFFFF';
const black = '#000000';

export function colors(darkMode: boolean): Colors {
  return {
    // base
    white,
    black,

    // table
    headerRow: darkMode ? '#f5f5f5' : '#f5f5f5',
    hoverRow: darkMode ? '#e0e0e0' : '#e0e0e0',
    darkRow: darkMode ? '#F5F5F5' : '#F5F5F5',
    lightRow: darkMode ? white : white,

    // modal
    modalBg: darkMode ? 'rgba(0,0,0,.425)' : 'rgba(0,0,0,0.3)',

    border1: darkMode ? '#3f3f3f' : '#353945',
    border2: darkMode ? '#E0E0E0' : '#E0E0E0',

    // text
    text1: darkMode ? white : black,
    text2: darkMode ? 'rgba(112, 112, 112, 1)' : 'rgba(112, 112, 112, 1)',
    text3: darkMode ? '#37b9ff' : '#3772FF',
    text4: darkMode ? '#797979' : '#797979',
    text5: darkMode ? '#37B9FF' : '#37B9FF',
    text6: darkMode ? '#E6E8EC' : '#E6E8EC',
    text7: darkMode ? '#FCFCFD' : '#FCFCFD',
    text8: darkMode ? black : white,
    text9: darkMode ? '#45B36B' : '#45B36B',

    green1: darkMode ? 'rgba(49, 217, 46, 1)' : 'rgba(49, 217, 46, 1)',
    green2: darkMode ? '#45B26B' : '#45B26B',
    red1: darkMode ? '#EF466F' : '#EF466F',

    yellow1: darkMode ? '#FFD166' : '#FFD166',
    yellow2: darkMode ? '#FF8A00' : '#FF8A00',

    tooltipBg: black,
    tooltipText: white,

    gray1: darkMode ? '#D8D8D8' : '#D8D8D8',
    gray2: darkMode ? '#D6D8E0' : '#D6D8E0',
    gray3: darkMode ? '#D1D1D1' : '#D1D1D1',

    dark1: darkMode ? '#232630' : '#232630',
    dark2: darkMode ? '#353945' : '#353945',
    dark3: darkMode ? '#777E90' : '#777E90',
    dark4: darkMode ? '#B1B5C3' : '#B1B5C3',
    dark5: darkMode ? '#232323' : '#232323',
    dark6: darkMode ? '#777E91' : '#777E91',
    dark7: darkMode ? '#23262F' : '#23262F',
    dark8: darkMode ? '#141416' : '#141416',
    dark9: darkMode ? '#202231' : '#202231',

    blue1: darkMode ? '#3772ff' : '#3772ff',
    blue2: darkMode ? '#8084dc' : '#8084dc',
    blue3: darkMode ? 'rgba(98, 216, 238, 1)' : 'rgba(98, 216, 238, 1)',
    blue4: darkMode ? '#15B2F4' : '#15B2F4',
  };
}

export function appTheme(darkMode: boolean): ITheme {
  return {
    ...colors(darkMode),

    grids: {
      sm: 8,
      md: 12,
      lg: 24,
    },

    // media queries
    mediaWidth: mediaWidthTemplates,

    // css snippets
    flexColumnNoWrap: css`
      display: flex;
      flex-flow: column nowrap;
    `,
    flexRowNoWrap: css`
      display: flex;
      flex-flow: row nowrap;
    `,
  };
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const darkMode = useSelector(darkModeSelector);

  const themeObject = useMemo(() => appTheme(darkMode), [darkMode]);

  return (
    <StyledComponentsThemeProvider theme={themeObject}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export const FixedGlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
    }
`;

export const ThemedGlobalStyle = createGlobalStyle`
    body {
        min-height: 100vh;
        box-sizing: border-box;
    }
`;
