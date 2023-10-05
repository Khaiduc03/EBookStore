import {createTheme} from '@rneui/themed';
import {useAppSelector} from '../hooks';
import {getMode} from '../redux/selectors/thems.selector';

const mode = useAppSelector(getMode);

declare module '@rneui/themed' {
  export interface Colors {
    input1: string;
    input2: string;
    clear: string;
    grey6: string;
    backgrounDetai: string;
    backgroundChapter: string;
    whiteDefault: string;
    blackDefault: string;
    bubbleUserBackground: string;
    bubbleNotUserBackground: string;
  }
}

export const theme = createTheme({
  lightColors: {
    primary: '#F89300',
    secondary: '#FFF7EB',
    greyOutline: '#F9f9f9',
    background: '#FFFFFF',
    grey5: '#B0B3B8',
    grey4: '#727272',
    divider: '#e3f3ff',
    grey1: '#212121',
    black: '#212121',
    grey0: '#FFFFFF',
    grey2: '#90939B',
    grey3: '#667085',
    white: '#FFFFFF',
    input1: '#F2F2F2',
    input2: '#FFF7EB',
    clear: '#ff0000',
    grey6: '#e6e6e6',
    backgrounDetai: '#F5C38B',
    backgroundChapter: '#181A20',
    blackDefault: '#000',
    whiteDefault: '#ffff',
    bubbleUserBackground: '#20A090',
    bubbleNotUserBackground: '#F2F7FB',
  },
  darkColors: {
    primary: '#F89300',
    secondary: '#FFF7EB',
    greyOutline: '#F9f9f9',
    grey5: '#B0B3B8',
    grey4: '#f1f1f4',
    divider: '#e3f3ff',
    grey1: '#212121',
    black: '#FAFAFA',
    grey0: '#181A20',
    grey2: '#90939B',
    white: '#FFFFFF',
    background: '#181A20',
    input1: '#1F222A',
    input2: '#2A241D',
    clear: '#56aaff',
    grey6: '#000',
    backgrounDetai: '#181A20',
    backgroundChapter: '#181A20',
    blackDefault: '#000',
    whiteDefault: '#ffff',
    bubbleUserBackground: '#F2F7FB',
    bubbleNotUserBackground: '#20A090',
  },
  components: {
    Button: (props, theme) => ({
      containerStyle: {
        backgroundColor: theme.colors.background,
        height: 100,
        width: 100,
      },
      titleStyle: {
        fontSize: 20,
      },
    }),
  },
  mode: mode,
});
