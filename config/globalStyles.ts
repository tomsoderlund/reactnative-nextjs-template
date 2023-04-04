import { StyleSheet } from 'react-native'

// ----- Size units -----

export const STANDARD_UNIT = 16
export const FONT_SIZE = STANDARD_UNIT
export const FONT_SIZE_SMALL = 14

export const SIDE_MARGIN = STANDARD_UNIT
export const SIDE_MARGIN_WIDE = 26
export const TOP_MARGIN = 60

export const ICON_SIZE = 48
export const PORTRAIT_SIZE = 110

// ----- Colors: named -----

export const COLOR_BLACK = '#000000'
export const COLOR_GRAY_89 = '#262626'
export const COLOR_GRAY_76 = '#4F4F4F'
export const COLOR_GRAY_63 = '#727272'
export const COLOR_GRAY_50 = '#919194'
export const COLOR_GRAY_29 = '#C1C1C5'
export const COLOR_GRAY_07 = '#F0F0F0'
export const COLOR_WHITE_LIGHT = '#F9F9F9'
export const COLOR_WHITE = '#FFFFFF'

export const COLOR_RED = '#E50010'
export const COLOR_ORANGE = '#FF9A01'
export const COLOR_YELLOW = '#FFE396'

export const COLOR_PURPLE_DARK = '#7E65B8'
export const COLOR_PURPLE_LIGHT = '#B39CEE'

export const GRADIENT_BLUE = '#2B59C6'
export const GRADIENT_GREEN = '#03FCA5'
export const GRADIENT_ORANGE = '#ED8003'
export const GRADIENT_PINK = '#C136FA'

// ----- Colors: functional -----

export const COLOR_TEXT = COLOR_GRAY_89
export const COLOR_ACTION_PRIMARY = COLOR_PURPLE_DARK
export const COLOR_ACTION_PRIMARY_PRESSED = COLOR_PURPLE_LIGHT
export const COLOR_INPUT_BACKGROUND = COLOR_GRAY_07

// ----- Typography -----

export const GLOBAL_STYLES = StyleSheet.create({
  PAGE_CONTAINER: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIDE_MARGIN
  },

  SPACING_FULL: {
    marginVertical: STANDARD_UNIT
  },
  SPACING_HALF: {
    marginVertical: STANDARD_UNIT / 2
  },

  TEXT_CENTERED: {
    textAlign: 'center'
  },
  TEXT_UNDERLINED: {
    textDecorationLine: 'underline'
  },

  TEXT_LARGE_TITLE: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 28,
    lineHeight: 30,
    letterSpacing: -0.5
  }
})

// ----- Debug -----

export const DEBUG_STYLES = StyleSheet.create({
  RED_BACKGROUND: {
    backgroundColor: 'rgba(255,0,0, 0.3)'
  },
  GREEN_BACKGROUND: {
    backgroundColor: 'rgba(0,255,0, 0.3)'
  },
  BLUE_BACKGROUND: {
    backgroundColor: 'rgba(0,0,255, 0.3)'
  },
  WHITE_BORDER: {
    borderColor: 'white',
    borderWidth: 1
  }
})

// ----- Headers -----

export const HEADER_OPTIONS_DEFAULT = {
  headerShadowVisible: false
}

export const HEADER_OPTIONS_DARK = {
  headerBackTitle: 'Back',
  headerStyle: {
    backgroundColor: COLOR_BLACK
  },
  headerTintColor: COLOR_WHITE,
  headerShadowVisible: false
}
