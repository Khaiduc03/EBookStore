import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg width="30" height="30" viewBox="0 0 19 18" fill="none">
    <Path
      d="M18.653 9.01228L14.0658 16.6158L4.91295 16.6038L0.347383 8.98824L4.93463 1.38475L14.0874 1.39677L18.653 9.01228Z"
      fill="#F89300"
    />
    <Path
      d="M17.4306 13.3869L9.50814 17.787L1.5775 13.4004L1.56936 4.61369L9.49186 0.213569L17.4225 4.60015L17.4306 13.3869Z"
      fill="#F89300"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
