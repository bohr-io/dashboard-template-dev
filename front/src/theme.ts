import { createTheme, PaletteColorOptions } from '@mui/material/styles';

const hoverOpacity = 0.15

const theme = createTheme({
  palette: {
    primary: {
      light: 'hsla(22, 17%, 22%, 1)',
      main: 'hsla(22, 17%, 12%, 1)',
      dark: 'hsla(22, 17%, 2%, 1)',
      contrastText: 'hsla(22, 17%, 100%, 1)',
    },
    action: {
      focusOpacity: hoverOpacity,
      hoverOpacity: hoverOpacity,
      focus: `rgba(0, 0, 0, ${hoverOpacity})`,
      hover: `rgba(0, 0, 0, ${hoverOpacity})`,
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => {
          const color = ownerState.color === 'inherit' ? 'primary' : ownerState.color || 'primary'
          return {
            '&:hover': {
              backgroundColor: theme.palette[color].light,
              color: theme.palette[color].contrastText,
            }
          }
        }
      }
    }
  }
})

export default theme
