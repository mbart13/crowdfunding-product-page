import { createGlobalStyle, css } from 'styled-components'
import bgMobile from 'assets/images/image-hero-mobile.jpg'
import bgDesktop from 'assets/images/image-hero-desktop.jpg'
import { screen } from 'styles/Screen'

export const GlobalStyles = createGlobalStyle`

  /* Box sizing rules */
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core root defaults */
  html {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }

  body {
    font-family: 'Commissioner', sans-serif;

    ::after{
      position: absolute;
      width:0;
      height:0;
      overflow: hidden;
      z-index: -1;
      content:
      url(${bgMobile})
      url(${bgDesktop})
    }
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    transition: background 0.3s linear;
  }

  a {
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.125rem;
    text-decoration: none;
    font-weight: 500;
    position: relative;

    ::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.black};
      bottom: -3px;
      left: 0px;
      transform: scale(0);
      transition: all 0.3s ease-in-out;
      transform: scaleX(0);

      ${screen.desktop(css`
        background-color: ${({ theme }) => theme.colors.white};
      `)};
    }

    :hover::after {
      transform: scale(1);
    }

    :focus {
      outline: 2px dashed ${({ theme }) => theme.colors.red};
      outline-offset: 4x;
    }

    &:focus:not(:focus-visible) {
      outline: none;
    }

    ${screen.desktop(css`
      color: ${({ theme }) => theme.colors.white};
      font-size: 0.9375rem;
    `)}

  }

  details > summary {
    list-style: none;
  }
  details > summary::-webkit-details-marker {
  display: none;
}

`
