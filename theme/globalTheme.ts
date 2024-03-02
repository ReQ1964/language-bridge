interface DefaultTheme {
  colors: {
    text: {
      primary: string
      secondary: string
      tertiary: string
      quaternary: string
      error: string
    }
    background: {
      primary: {
        color: string
        shade1: string
        shade2: string
        tint1: string
        tint2: string
      }
      secondary: {
        color: string
        shade1: string
        tint1: string
        tint2: string
      }
    }
  }
  sizes: {
    defaultMargins: string
  }
  breakpoints: {
    sm: string
    md: string
    lg: string
    xl: string
    xxl: string
  }
}

const globalTheme: DefaultTheme = {
  colors: {
    text: {
      primary: 'black',
      secondary: 'white',
      tertiary: '#2563eb',
      quaternary: '#f5c33b',
      error: '#c30000',
    },
    background: {
      primary: {
        color: '#2563EB',
        shade1: '#163B8D',
        shade2: '#0b1e46',
        tint1: '#E9EFFD',
        tint2: '#BED0F9',
      },
      secondary: {
        color: '#e3b32d',
        shade1: '#765612',
        tint1: '#FDF7E9',
        tint2: '#F5D692',
      },
    },
  },
  sizes: {
    defaultMargins: '1.2rem',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
  },
}

export default globalTheme
