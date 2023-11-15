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
}

export default globalTheme
