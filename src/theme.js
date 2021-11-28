import { grommet } from 'grommet'
import { deepMerge } from 'grommet/utils'
import { css } from 'styled-components'

export const customTheme = deepMerge(grommet, {
  global: {
    colors: {
      brand: '#0000',
      gray: { dark: 'dark-2', light: 'dark-3' },
      yellow: { dark: '#FFBD2E', light: '#FFDD94' },
      richBlack: '#080705',
      grayLight: {dark: 'dark-2', light: 'light-3'},
      wine: '#702632',
      redViolet: '#912F40',
      focus: 'accent-4',
      'brand-contrast': '#ee993333',
      active: '#eecc33',
    },
  },
  heading: {
    level: {
      1: {
        large: {
          size: '24px',
          height: '28px',
        },
        '2xl': {
          size: '46px',
        },
        '3xl': {
          size: '64px',
          height: '68px',
        },
      },
      3: {
        large: {
          size: '18px',
          height: '18px',
        },
        '2xl': {
          size: '20px',
        },
        '3xl': {
          size: '24px',
          height: '34px',
        },
      }
    },
  },
  button: {
    default: {
      color: 'text',
      border: undefined,
      padding: {
        horizontal: '12px',
        vertical: '8px',
      },
      margin: {
        horizontal: '20px',
        vertical: '20px',
      },
    },
    primary: {
      background: 'transparent',
      border: { color: '#000', width: '10px' },
      color: 'text-strong',
      font: { weight: 'bold' },
      padding: {
        horizontal: '12px',
        vertical: '8px',
      },
      margin: {
        horizontal: '20px',
        vertical: '20px',
      },
      border: { color: '#000', width: '10px' },
    },
    secondary: {
      border: { color: 'brand', width: '10px' },
      color: 'text',
      padding: {
        horizontal: '8px',
        vertical: '4px',
      },
    },
    active: {
      background: { color: 'brand' },
      border: { color: 'brand', width: '10px' },
      color: 'text',
      secondary: {
        background: 'transparent',
        border: {
          color: 'active',
        },
      },
    },
    disabled: {
      opacity: 0.3,
      secondary: {
        border: { color: 'text-weak' },
      },
    },
    hover: {
      background: { color: 'focus' },
      secondary: {
        border: { color: 'focus', width: '20px' },
      },
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
      background: { color: 'gray' },
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
})
