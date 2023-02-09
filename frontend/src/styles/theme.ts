export type Theme = {
  bg: string,
  fg: string,
  grey: string,
  primary: string,
  secondary: string,
  shadow: {
    top: string,
    bottom: string,
  },
};

export const lightTheme: Theme = {
  bg: '#e8e8e8',
  fg: '#000',
  grey: '#808080',
  primary: '#0169ff',
  secondary: '#ee6c4d',
  shadow: {
    top: '#a9a9aa77',
    bottom: '#ffffff7e',
  },
};

export const darkTheme: Theme = {
  bg: '#212121',
  fg: '#fff',
  grey: '#808080',
  primary: '#01bbff',
  secondary: '#00cfc1',
  shadow: {
    top: '#121212',
    bottom: '#303030',
  },
};
