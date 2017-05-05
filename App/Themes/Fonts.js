const type = {
  iosAccent: 'AvenirNext-UltraLight',
  iosBase: 'Avenir',
  androidAccent: 'sans-serif-thin',
  androidBase: 'sans-serif'
}

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  large: 64,
  medium: 14,
  small: 12,
  tiny: 8.5
}

const style = {
  h1: {
    fontSize: size.h1
  },
  h2: {
    fontSize: size.h2
  },
  h3: {
    fontSize: size.h3
  },
  h4: {
    fontSize: size.h4
  },
  h5: {
    fontSize: size.h5
  },
  h6: {
    fontSize: size.h6
  },
  normal: {
    fontSize: size.regular
  },
  clockDisplay: {
    fontSize: size.large
  },
  description: {
    fontSize: size.medium
  },
}

export default {
  size,
  style,
  type
}

