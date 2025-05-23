/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
    },
    colors: {
      white: "rgb(255, 255, 255)",
      black: "rgb(0, 0, 0)",
      transparent: "rgba(255, 255, 255, 0)",
      richblack: {
        5: "rgb(241, 242, 255)",
        25: "rgb(219, 221, 234)",
        50: "rgb(197, 199, 212)",
        100: "rgb(175, 178, 191)",
        200: "rgb(153, 157, 170)",
        300: "rgb(131, 136, 148)",
        400: "rgb(110, 114, 127)",
        500: "rgb(88, 93, 105)",
        600: "rgb(66, 72, 84)",
        700: "rgb(44, 51, 63)",
        800: "rgb(22, 29, 41)",
        900: "rgb(0, 8, 20)",
      },
      richblue: {
        5: "rgb(236, 245, 255)",
        25: "rgb(198, 214, 225)",
        50: "rgb(160, 183, 195)",
        100: "rgb(122, 152, 166)",
        200: "rgb(83, 121, 136)",
        300: "rgb(45, 90, 106)",
        400: "rgb(7, 59, 76)",
        500: "rgb(6, 53, 68)",
        600: "rgb(4, 46, 59)",
        700: "rgb(3, 40, 51)",
        800: "rgb(1, 33, 42)",
        900: "rgb(0, 27, 34)",
      },
      blue: {
        5: "rgb(234, 245, 255)",
        25: "rgb(180, 218, 236)",
        50: "rgb(126, 192, 217)",
        100: "rgb(71, 165, 197)",
        200: "rgb(17, 138, 178)",
        300: "rgb(15, 122, 157)",
        400: "rgb(12, 106, 135)",
        500: "rgb(10, 90, 114)",
        600: "rgb(7, 75, 93)",
        700: "rgb(5, 59, 72)",
        800: "rgb(2, 43, 50)",
        900: "rgb(0, 27, 29)",
      },
      caribbeangreen: {
        5: "rgb(193, 255, 253)",
        25: "rgb(131, 241, 222)",
        50: "rgb(68, 228, 191)",
        100: "rgb(6, 214, 160)",
        200: "rgb(5, 191, 142)",
        300: "rgb(5, 167, 123)",
        400: "rgb(4, 144, 105)",
        500: "rgb(3, 121, 87)",
        600: "rgb(2, 97, 68)",
        700: "rgb(1, 74, 50)",
        800: "rgb(1, 50, 31)",
        900: "rgb(0, 27, 13)",
      },
      brown: {
        5: "rgb(255, 244, 196)",
        25: "rgb(255, 227, 149)",
        50: "rgb(255, 209, 102)",
        100: "rgb(231, 188, 91)",
        200: "rgb(207, 166, 79)",
        300: "rgb(184, 145, 68)",
        400: "rgb(160, 124, 57)",
        500: "rgb(136, 102, 45)",
        600: "rgb(112, 81, 34)",
        700: "rgb(89, 60, 23)",
        800: "rgb(65, 38, 11)",
        900: "rgb(41, 17, 0)",
      },
      pink: {
        5: "rgb(255, 241, 241)",
        25: "rgb(251, 199, 209)",
        50: "rgb(247, 156, 176)",
        100: "rgb(243, 114, 144)",
        200: "rgb(239, 71, 111)",
        300: "rgb(212, 61, 99)",
        400: "rgb(186, 51, 86)",
        500: "rgb(159, 41, 74)",
        600: "rgb(132, 30, 62)",
        700: "rgb(105, 20, 50)",
        800: "rgb(79, 10, 37)",
        900: "rgb(52, 0, 25)",
      },
      yellow: {
        5: "rgb(255, 249, 112)",
        25: "rgb(255, 232, 61)",
        50: "rgb(255, 214, 10)",
        100: "rgb(231, 192, 9)",
        200: "rgb(207, 171, 8)",
        300: "rgb(182, 149, 7)",
        400: "rgb(158, 128, 6)",
        500: "rgb(134, 106, 4)",
        600: "rgb(110, 85, 3)",
        700: "rgb(85, 63, 2)",
        800: "rgb(61, 42, 1)",
        900: "rgb(37, 20, 0)",
      },
      "pure-greys": {
        5: "rgb(249, 249, 249)",
        25: "rgb(226, 226, 226)",
        50: "rgb(204, 204, 204)",
        100: "rgb(181, 181, 181)",
        200: "rgb(158, 158, 158)",
        300: "rgb(136, 136, 136)",
        400: "rgb(113, 113, 113)",
        500: "rgb(91, 91, 91)",
        600: "rgb(68, 68, 68)",
        700: "rgb(45, 45, 45)",
        800: "rgb(23, 23, 23)",
        900: "rgb(20, 20, 20)",
      },
      red: {
        50: "rgb(254, 242, 242)",
        100: "rgb(254, 226, 226)",
        200: "rgb(254, 202, 202)",
        300: "rgb(252, 165, 165)",
        400: "rgb(248, 113, 113)",
        500: "rgb(239, 68, 68)",
        600: "rgb(220, 38, 38)",
        700: "rgb(185, 28, 28)",
        800: "rgb(153, 27, 27)",
        900: "rgb(127, 29, 29)",
      },
      orange: {
        50: "rgb(255, 247, 237)",
        100: "rgb(255, 237, 213)",
        200: "rgb(254, 215, 170)",
        300: "rgb(253, 186, 116)",
        400: "rgb(251, 146, 60)",
        500: "rgb(249, 115, 22)",
        600: "rgb(234, 88, 12)",
        700: "rgb(194, 65, 12)",
        800: "rgb(154, 52, 18)",
        900: "rgb(124, 45, 18)",
      },
      green: {
        50: "rgb(240, 253, 244)",
        100: "rgb(220, 252, 231)",
        200: "rgb(187, 247, 208)",
        300: "rgb(134, 239, 172)",
        400: "rgb(74, 222, 128)",
        500: "rgb(34, 197, 94)",
        600: "rgb(22, 163, 74)",
        700: "rgb(21, 128, 61)",
        800: "rgb(22, 101, 52)",
        900: "rgb(20, 83, 45)",
      },
      purple: {
        50: "rgb(250, 245, 255)",
        100: "rgb(243, 232, 255)",
        200: "rgb(233, 213, 255)",
        300: "rgb(216, 180, 254)",
        400: "rgb(192, 132, 252)",
        500: "rgb(168, 85, 247)",
        600: "rgb(147, 51, 234)",
        700: "rgb(126, 34, 206)",
        800: "rgb(107, 33, 168)",
        900: "rgb(88, 28, 135)",
      },
      slate: {
        50: "rgb(248, 250, 252)",
        100: "rgb(241, 245, 249)",
        200: "rgb(226, 232, 240)",
        300: "rgb(203, 213, 225)",
        400: "rgb(148, 163, 184)",
        500: "rgb(100, 116, 139)",
        600: "rgb(71, 85, 105)",
        700: "rgb(51, 65, 85)",
        800: "rgb(30, 41, 59)",
        900: "rgb(15, 23, 42)",
      },
      indigo: {
        50: "rgb(238, 242, 255)",
        100: "rgb(224, 231, 255)",
        200: "rgb(199, 210, 254)",
        300: "rgb(165, 180, 252)",
        400: "rgb(129, 140, 248)",
        500: "rgb(99, 102, 241)",
        600: "rgb(79, 70, 229)",
        700: "rgb(67, 56, 202)",
        800: "rgb(55, 48, 163)",
        900: "rgb(49, 46, 129)",
      },
      teal: {
        50: "rgb(240, 253, 250)",
        100: "rgb(204, 251, 241)",
        200: "rgb(153, 246, 228)",
        300: "rgb(94, 234, 212)",
        400: "rgb(45, 212, 191)",
        500: "rgb(20, 184, 166)",
        600: "rgb(13, 148, 136)",
        700: "rgb(15, 118, 110)",
        800: "rgb(17, 94, 89)",
        900: "rgb(19, 78, 74)",
      },
      cyan: {
        50: "rgb(236, 254, 255)",
        100: "rgb(207, 250, 254)",
        200: "rgb(165, 243, 252)",
        300: "rgb(103, 232, 249)",
        400: "rgb(34, 211, 238)",
        500: "rgb(6, 182, 212)",
        600: "rgb(8, 145, 178)",
        700: "rgb(14, 116, 144)",
        800: "rgb(21, 94, 117)",
        900: "rgb(22, 78, 99)",
      },
      rose: {
        50: "rgb(255, 241, 242)",
        100: "rgb(255, 228, 230)",
        200: "rgb(254, 205, 211)",
        300: "rgb(253, 164, 175)",
        400: "rgb(251, 113, 133)",
        500: "rgb(244, 63, 94)",
        600: "rgb(225, 29, 72)",
        700: "rgb(190, 18, 60)",
        800: "rgb(159, 18, 57)",
        900: "rgb(136, 19, 55)",
      },
      sky: {
        50: "rgb(240, 249, 255)",
        100: "rgb(224, 242, 254)",
        200: "rgb(186, 230, 253)",
        300: "rgb(125, 211, 252)",
        400: "rgb(56, 189, 248)",
        500: "rgb(14, 165, 233)",
        600: "rgb(2, 132, 199)",
        700: "rgb(3, 105, 161)",
        800: "rgb(7, 89, 133)",
        900: "rgb(12, 74, 110)",
      },
    },
    extend: {
      maxWidth: {
        maxContent: "1260px",
        maxContentTab: "650px"
      },
    },
  },
  plugins: [],
};