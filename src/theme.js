import { grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import { css } from "styled-components";

export const customTheme = deepMerge(grommet, {
  global: {
    colors: {
      brand: '#0000',
      charcoal: 'dark-2',
      richBlack: '#080705',
      babyPodwer: '#fffffa',
      wine: '#702632',
      redViolet: '#912F40',
      focus: 'accent-4',
      hover: 'accent-4',
    },
    edgeSize: {
      small: 18,
    },
    elevation: {
      light: {
        small: '0px 1px 5px rgba(0, 0, 0, 0.50)',
        medium: '0px 3px 8px rgba(0, 0, 0, 0.50)',
      },
    },
  },
    tab: {
      active: {
        background: 'dark-2',
        color: 'accent-4',
      },
      background: 'dark-2',
      border: undefined,
      color: 'white',
      hover: {
        background: 'dark-1',
      },
      margin: undefined,
      pad: {
        top: 'medium',
        bottom: 'medium',
        horizontal: 'large',
      },
     
    },
    tabs: {
      background: 'dark-2',
      gap: 'large',
      header: {
        background: 'dark-2',
        extend: ({ theme }) => css`
        padding: 10px;
      `,
      },
  
    },
});
