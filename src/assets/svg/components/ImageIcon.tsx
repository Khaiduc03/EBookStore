import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg width={44} height={44} viewBox="0 0 48 48" {...props}>
    <Path
      fill="#FFC107"
      d="M40 41H8a4 4 0 0 1-4-4V11a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4"
    />
    <Path fill="#FFF8E1" d="M32 16a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
    <Path fill="#D85700" d="M20 16 9 32h22z" />
    <Path fill="#EF7E03" d="m31 22-8 10h16z" />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
