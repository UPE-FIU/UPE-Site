/*

    When implmenting a new enum value, make sure to use the name of the CSS variable and set the value to the name of the variable. 
    See below for examples.

*/

export enum ColorPalette {
  Primary = "primary",
  Accent = "accent",
  Warning = "warning",
}

export enum Gradient {
  Primary = "primary",
}

export enum Contrast {
  Dark = "dark",
  Light = "light",
}

// Return the complement of a ColorPalette value
export const getColorPaletteComplement = (
  color: ColorPalette,
): ColorPalette => {
  switch (color) {
    case ColorPalette.Primary:
      return ColorPalette.Accent;
    case ColorPalette.Accent:
      return ColorPalette.Primary;
    case ColorPalette.Warning:
      return ColorPalette.Accent;
  }
};

// Return the complement of a Contrast value
export const getContrastComplement = (contrast: Contrast) => {
  switch (contrast) {
    case Contrast.Dark:
      return Contrast.Light;
    case Contrast.Light:
      return Contrast.Dark;
  }
};

// Return the complement of a Gradient value
export const getGradientComplement = (gradient: Gradient): ColorPalette => {
  switch (gradient) {
    case Gradient.Primary:
      return ColorPalette.Accent;
  }
};

// ColorPalette enum type guard
export const isColorPalette = (object: any): object is ColorPalette => {
  return Object.values(ColorPalette).indexOf(object) !== -1;
};

// Contrast enum type guard
export const isContrast = (object: any): object is Contrast => {
  return Object.values(Contrast).indexOf(object) !== -1;
};

// Gradient enum type guard
export const isGradient = (object: any): object is Gradient => {
  return Object.values(Gradient).indexOf(object) !== -1;
};
