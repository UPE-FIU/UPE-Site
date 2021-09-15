import React, { MouseEvent } from "react";
import {
  ColorPalette,
  Contrast,
  getColorPaletteComplement,
  getGradientComplement,
  Gradient,
  isColorPalette,
  isContrast,
  isGradient,
} from "../../types/theme";
import * as CSS from "csstype";
import "./button.scss";

// Shorthand property types
export type BackgroundColor = ColorPalette | CSS.Property.BackgroundColor;
export type BackgroundImage = Gradient | CSS.Property.BackgroundImage;
export type TextColor = ColorPalette | CSS.Property.Color;
export type ContrastColor = Contrast | CSS.Property.BackgroundColor;

//  TextButton input properties
export interface TextButtonProp extends React.HTMLAttributes<any> {
  text: string; // Required | Content of the button. Accepts a string value.
  backgroundColor?: BackgroundColor; // Optional (default: ColorPalette.Primary) | Background color of the button. Accepts a ColorPalette enum value or a CSS background color value.
  backgroundImage?: BackgroundImage; // Optional (default: undefined) | Background image of the button. Accepts a Gradient enum value or a CSS background image value.
  textColor?: TextColor; // Optional (default: ColorPalette.Accent) | Text color of the button. Accepts a ColorPalette enum value or a CSS color value.
  onHoverContrastColor?: ContrastColor; // Optional (default: Contrast.Default) | Color of the background on hover. Accepts a Contrast enum value or a CSS background color value.
  href?: string; // Optional | URL to redirect to. Accepts a string value.
  onClick?: (event: MouseEvent) => void; // Optional | Callback function to execute when the button is clicked. Accepts a void function with a MouseEvent parameter.
}

interface Properties extends CSS.Properties {
  "--on-hover-background-color"?: any;
  "--on-hover-background-image"?: any;
}

//  Handle various cases of input properties for a TextColor
const handleTextColor = (
  textColor: TextColor | undefined,
  fallbackColor: ColorPalette,
): CSS.Property.Color => {
  if (textColor === undefined) {
    return `var(--${fallbackColor}-color)`;
  } else if (isColorPalette(textColor)) {
    return `var(--${textColor}-color)`;
  }

  return textColor;
};

//  Handle various cases of input properties for a ContrastColor
const handleContrastColor = (
  backgroundColor: BackgroundColor,
  contrastColor: ContrastColor | undefined,
): CSS.Property.Color => {
  if (isColorPalette(backgroundColor)) {
    if (contrastColor === undefined) {
      return `var(--${backgroundColor}-color-contrast)`;
    } else if (isContrast(contrastColor)) {
      return `var(--${backgroundColor}-color-${contrastColor})`;
    }
  } else if (
    contrastColor === undefined ||
    isContrast(contrastColor) ||
    isColorPalette(contrastColor)
  ) {
    return backgroundColor;
  }

  return contrastColor;
};

//  Handle various cases of input properties for a ContrastColor
const handleContrastColorImage = (
  backgroundImage: BackgroundImage,
  contrastColor: ContrastColor | undefined,
): CSS.Property.Color => {
  if (isGradient(backgroundImage)) {
    if (contrastColor === undefined) {
      return `var(--${backgroundImage}-color-gradient-contrast)`;
    } else if (isContrast(contrastColor)) {
      return `var(--${backgroundImage}-color-gradient-${contrastColor})`;
    }
  } else if (
    contrastColor === undefined ||
    isContrast(contrastColor) ||
    isColorPalette(contrastColor)
  ) {
    return backgroundImage;
  }

  return contrastColor;
};

//  TextButton Component
export const TextButton = (props: TextButtonProp) => {
  const style: Properties = {};
  let computedBackgroundColor: BackgroundColor =
    props.backgroundColor ?? ColorPalette.Primary;

  if (props.backgroundImage === undefined) {
    if (props.backgroundColor === undefined) {
      style.backgroundColor = `var(--${ColorPalette.Primary}-color)`;
      style.color = handleTextColor(props.textColor, ColorPalette.Accent);
    } else if (isColorPalette(props.backgroundColor)) {
      style.backgroundColor = `var(--${props.backgroundColor}-color)`;
      style.color = handleTextColor(
        props.textColor,
        getColorPaletteComplement(props.backgroundColor),
      );
    } else {
      style.backgroundColor = props.backgroundColor;
      style.color = handleTextColor(props.textColor, ColorPalette.Accent);
    }

    style["--on-hover-background-color"] = handleContrastColor(
      computedBackgroundColor,
      props.onHoverContrastColor,
    );
  } else {
    if (isGradient(props.backgroundImage)) {
      style.backgroundImage = `var(--${props.backgroundImage}-color-gradient)`;
      style.color = handleTextColor(
        props.textColor,
        getGradientComplement(props.backgroundImage as Gradient),
      );
    } else {
      style.backgroundImage = props.backgroundImage;
      style.color = handleTextColor(props.textColor, ColorPalette.Accent);
    }

    style["--on-hover-background-image"] = handleContrastColorImage(
      props.backgroundImage,
      props.onHoverContrastColor,
    );
  }

  let mouseDown: boolean = false;
  let transitionFinished: boolean = false;
  let button: HTMLDivElement;

  const onMouseDown = (mouseEvent: MouseEvent) => {
    button = mouseEvent.currentTarget as HTMLDivElement;

    if (mouseEvent.buttons === 1) {
      mouseEvent.stopPropagation();

      mouseDown = true;
      transitionFinished = false;

      const transitionDuration =
        window.getComputedStyle(button).transitionDuration;

      button.classList.add("pressed");

      setTimeout(() => {
        transitionFinished = true;

        if (!mouseDown) {
          button.classList.remove("pressed");
        }
      }, parseFloat(transitionDuration.substring(0, transitionDuration.indexOf("s"))) * 1000);
    }
  };

  const onMouseUp = (mouseEvent: MouseEvent) => {
    props.onClick?.(mouseEvent);
  };

  document.onmouseup = (mouseEvent: globalThis.MouseEvent) => {
    mouseEvent.stopPropagation();

    mouseDown = false;

    if (transitionFinished) {
      button.classList.remove("pressed");
    }
  };

  return (
    <a
      href={props.href}
      className="button"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      style={style}
    >
      <span unselectable="on">{props.text}</span>
    </a>
  );
};
