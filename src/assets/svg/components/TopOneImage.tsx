import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#F89300"
      d="M21.034 10.98a2 2 0 0 1-.003 2.062l-3.381 5.605a2 2 0 0 1-1.715.967l-6.891-.009a2 2 0 0 1-1.713-.971L3.966 13.02a2 2 0 0 1 .003-2.062L7.35 5.353a2 2 0 0 1 1.715-.967l6.891.01a2 2 0 0 1 1.713.97l3.365 5.615Z"
    />
    <Path
      fill="#F89300"
      d="M20.43 15.227c0 .716-.4 1.382-1.046 1.74l-5.862 3.257a2.085 2.085 0 0 1-2.014.01l-5.93-3.28c-.62-.343-1.001-.982-1.002-1.679L4.57 8.774a2 2 0 0 1 1.045-1.741l5.862-3.256a2.085 2.085 0 0 1 2.015-.01l5.93 3.28c.62.343 1 .981 1.001 1.678l.006 6.502Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
