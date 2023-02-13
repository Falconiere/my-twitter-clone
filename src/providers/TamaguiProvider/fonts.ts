const fonts = {
  family: 'Open Sans, Helvetica, Arial, sans-serif',
  size: {
    1: 12,
    2: 14,
    3: 15,
    // ...
  },
  lineHeight: {
    1: 17,
    2: 22,
    3: 25,
    // ...
  },
  weight: {
    4: '300',
    6: '600',
  },
  letterSpacing: {
    4: 0,
    8: -1,
  },

  // for native only, alternate family based on weight/style
  face: {
    // pass in weights as keys
    600: {normal: 'OpenSans-Medium', italic: 'OpenSans-MediumItalic'},
    700: {normal: 'OpenSans-Bold', italic: 'OpenSans-BoldItalic'},
    800: {normal: 'OpenSans-SemiBold', italic: 'OpenSans-SemiBoldItalic'},
    900: {normal: 'OpenSans-ExtraBold', italic: 'OpenSans-ExtraBoldItalic'},
  },
};

export {fonts};
