import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';
// import useStyles from '../styles';
import {ViewStyle} from 'react-native';
import {StyleProp} from 'react-native';
import {makeStyles} from '@rneui/themed';
import useStyles from '../styles';

const SvgComponent = (props: SvgProps) => {
  const styles = useStyles();

  return (
    <Svg width={40} height={40} viewBox="0 0 32 32" {...props}>
      <Path
        fill={styles.colorSVG.color}
        d="M16 5c-3.855 0-7 3.145-7 7 0 2.41 1.23 4.55 3.094 5.813C8.527 19.343 6 22.883 6 27h2c0-4.43 3.57-8 8-8s8 3.57 8 8h2c0-4.117-2.527-7.656-6.094-9.188A7.024 7.024 0 0 0 23 12c0-3.855-3.145-7-7-7Zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5Z"
      />
    </Svg>
  );
};
const Memo = memo(SvgComponent);
export default Memo;
