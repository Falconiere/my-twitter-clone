import {Theme} from 'native-base';

const brand: BrandColors = {
  black: '#191919',
  primary: '#E98A15',
  secondary: '#F5F5F5',
  gray: '#B0B2B8',
  lightGray: 'rgb(113, 118, 123)',
  mediumGray: '#fff',
  white: '#fff',
  background: '#2B2D42',
  yellow: '#FFD25A',
  yellowLight: '#FFF05A',
  orangeLight: '#FFAA5A',
  orange: '#FF785A',
  darkBlue: '#2B2D42',
  warning: '#FF785A',
};

export const colors: Colors = {
  brand,
  black: brand.black,
  warning: brand.warning,
  white: '#fff',
  lightText: '#fff',
  darkText: '#000',
  primary: brand.primary,
  secondary: brand.secondary,
  background: {
    default: brand.darkBlue,
    darker: brand.darkBlue,
    dark: brand.darkBlue,
  },
};

interface BrandColors {
  black: string;
  primary: string;
  secondary: string;
  gray: string;
  white: string;
  background: string;
  yellow: string;
  yellowLight: string;
  orangeLight: string;
  orange: string;
  darkBlue: string;
  warning: string;
  lightGray: string;
  mediumGray: string;
}

export interface Colors
  extends Pick<Theme['colors'], 'black' | 'white' | 'lightText' | 'darkText'> {
  primary: string;
  secondary: string;
  background: {default: string; darker: string; dark: string};
  brand: BrandColors;
  warning: string;
}
