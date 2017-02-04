import {StyleSheet} from 'react-native'

export const BG_COLOR = 'rgba(3, 3, 3, 0.1)'
export const NAV_COLOR = 'rgba(250,250,250,0.9)';
export const SECONDARY_COLOR = '#F2F2F2';
export const ACTION_COLOR = '#FE2851';
export const TEXT_COLOR = '#9B9B9B';
export const BOX_COLOR = '#fff';
export const NAVIGATOR_BG = "#FE2851"
export const NAVIGATOR_COLOR = "#FFF"



export const COMMON_STYLES = StyleSheet.create({
  text: {
    color: TEXT_COLOR
  },
  scrollView: {
    backgroundColor: BG_COLOR
  },
  box: {
    backgroundColor: BOX_COLOR
  },
  navigator: {
    backgroundColor: NAVIGATOR_BG
  },
  navigatorElement: {
    padding: 10,
    fontSize: 17,
    color: NAVIGATOR_COLOR
  },
  pageWrapper: {
    marginTop: 44
  }

})
