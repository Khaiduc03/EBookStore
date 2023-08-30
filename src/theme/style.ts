import {createTheme} from '@rneui/themed';
import {useAppSelector} from '../hooks';
import {getMode} from '../redux/selectors/thems.selector';

const mode = useAppSelector(getMode);

export const theme = createTheme({
  lightColors: {
    primary: '#F89300',
    secondary: '#FEF4E6',
    greyOutline: '#F9f9f9',
    grey5: '#B0B3B8',
    grey4: '#727272',
    divider: '#e3f3ff',
    grey1: '#F5F5F5',
    black: '#212121',
    grey0: '#FFFFFF',
    grey2: '#90939B',
    white: '#FFFFFF',
  },
  darkColors: {
    primary: '#F89300',
    secondary: '#FEF4E6',
    greyOutline: '#F9f9f9',
    grey5: '#B0B3B8',
    grey4: '#f1f1f4',
    divider: '#e3f3ff',
    grey1: '#1f222a',
    black: '#FAFAFA',
    grey0: '#181A20',
    grey2: '#90939B',
    white: '#FFFFFF',
    background: '#181A20',
  },
  mode: mode,
});
