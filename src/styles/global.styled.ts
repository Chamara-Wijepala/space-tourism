import { createGlobalStyle } from "styled-components";

import homeDesktop from "assets/home/background-home-desktop.jpg";
import homeTablet from "assets/home/background-home-tablet.jpg";
import homeMobile from "assets/home/background-home-mobile.jpg";
import destinationDesktop from "assets/destination/background-destination-desktop.jpg";
import destinationTablet from "assets/destination/background-destination-tablet.jpg";
import destinationMobile from "assets/destination/background-destination-mobile.jpg";
import crewDesktop from "assets/crew/background-crew-desktop.jpg";
import crewTablet from "assets/crew/background-crew-tablet.jpg";
import crewMobile from "assets/crew/background-crew-mobile.jpg";
import technologyDesktop from "assets/technology/background-technology-desktop.jpg";
import technologyTablet from "assets/technology/background-technology-tablet.jpg";
import technologyMobile from "assets/technology/background-technology-mobile.jpg";

const GlobalStyle = createGlobalStyle`
/* ------------------- */
/* Reset               */
/* ------------------- */

/* https://piccalil.li/blog/a-modern-css-reset/ */

*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

img,
picture {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}

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

/* ------------------- */
/* Custom properties   */
/* ------------------- */

:root {
  --clr-white: 255 255 255;
  --clr-light: 208 214 249;
  --clr-dark: 11 13 23;

  --fs-900: clamp(5rem, 8vw + 1rem, 9.375rem);
  --fs-800: 3.5rem;
  --fs-700: 1.5rem;
  --fs-600: 1rem;
  --fs-500: 1.75rem;
  --fs-400: 0.9375rem;
  --fs-300: 1rem;
  --fs-200: 0.875rem;

  --ff-bellefair: "Bellefair", serif;
  --ff-barlow-cond: "Barlow Condensed", sans-serif;
  --ff-barlow: "Barlow", sans-serif;

  --spacing-1: 4.75px;
  --spacing-2: 2.7px;
  --spacing-3: 2.35px;
}

@media (min-width: 376px) {
  :root {
    --fs-800: 5rem;
    --fs-700: 2.5rem;
    --fs-600: 1.5rem;
    --fs-400: 1rem;
  }
}

@media (min-width: 769px) {
  :root {
    --fs-800: 6.25rem;
    --fs-700: 3.5rem;
    --fs-600: 2rem;
    --fs-400: 1.125rem;
  }
}

/* ------------------- */
/* Styles              */
/* ------------------- */

.content {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.content.home {
  background-image: url(${homeDesktop});

  @media (max-width: 768px) {
    background-image: url(${homeTablet});
  }

  @media (max-width: 375px) {
    background-image: url(${homeMobile});
  }
}

.content.destination {
  background-image: url(${destinationDesktop});

  @media (max-width: 768px) {
    background-image: url(${destinationTablet});
  }

  @media (max-width: 375px) {
    background-image: url(${destinationMobile});
  }
}

.content.crew {
  background-image: url(${crewDesktop});

  @media (max-width: 768px) {
    background-image: url(${crewTablet});
  }

  @media (max-width: 375px) {
    background-image: url(${crewMobile});
  }
}

.content.technology {
  background-image: url(${technologyDesktop});

  @media (max-width: 768px) {
    background-image: url(${technologyTablet});
  }

  @media (max-width: 375px) {
    background-image: url(${technologyMobile});
  }
}

body {
  font-family: var(--ff-barlow);
  font-size: var(--fs-400);
  color: rgb(var(--clr-white));
  background-color: rgb(var(--clr-dark));
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
}

#root,
.content {
  min-height: inherit;
  display: grid;
  grid-template-rows: min-content 1fr;
}

.container {
  padding-inline: 2em;
  margin-inline: auto;
  max-width: 80rem;
}

.grid-container {
  display: grid;
  place-items: center;
  text-align: center;
  padding-inline: 1rem;
}

.grid-container * {
  max-width: 50ch;
}

@media (min-width: 769px) {
  .grid-container {
    column-gap: 2rem;
    grid-template-columns: minmax(2rem, 1fr) repeat(2, minmax(0, 40rem)) minmax(2rem, 1fr);
    text-align: left;
  }
  
  .grid-container > *:first-child {
    grid-column: 2;
  }

  .grid-container > *:last-child {
    grid-column: 3;
  }
}

.underline-indicators > * {
  border-bottom: 3px solid rgb(var(--clr-white) / 0);
}

.underline-indicators > *:hover,
.underline-indicators > *:focus {
  border-bottom: 3px solid rgb(var(--clr-white) / 0.5);
}

.underline-indicators > .active {
  border-bottom: 3px solid rgb(var(--clr-white) / 1);
}

.sr-only {
  position: absolute; 
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px; 
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
`;

export default GlobalStyle;
