import { createTheme } from '@mui/material/styles';

const hoverOpacity = 0.15

const theme = createTheme({
  palette: {
    action: {
      focusOpacity: hoverOpacity,
      hoverOpacity: hoverOpacity,
      focus: `rgba(0, 0, 0, ${hoverOpacity})`,
      hover: `rgba(0, 0, 0, ${hoverOpacity})`,
    }
  },
})

export default theme
