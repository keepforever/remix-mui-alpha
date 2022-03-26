import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// required to add custom properties to theme and extend existing theme.
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color']
    }
  }

  interface Palette {
    neutral: Palette['primary']
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary']
  }

  interface PaletteColor {
    darker: string
  }
  interface SimplePaletteColorOptions {
    darker: string
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color']
    }
  }
}

// Create a theme instance.
const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#556cd6',
      darker: '#4c4848',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
      darker: '#4c4848',
    },
    secondary: {
      main: '#19857b',
      darker: '#4c4848',
    },
    error: {
      main: red.A400,
      darker: '#4c4848',
    },
    background: {
      default: 'lightgrey',
    },
  },
})

export default theme
