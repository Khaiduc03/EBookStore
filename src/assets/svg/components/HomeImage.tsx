import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';
import useStyles from '../styles';

const SvgComponent = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path d="M12 2.1 1 12h3v9h7v-6h2v6h7v-9h3L12 2.1zm0 2.691 6 5.4V19h-3v-6H9v6H6v-8.809l6-5.4z" />
    </Svg>
  );
};

const Memo = memo(SvgComponent);
export default Memo;
