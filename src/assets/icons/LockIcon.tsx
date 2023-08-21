import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#246BFE"
      d="M8 0C4.676 0 2 2.676 2 6v1C.9 7 0 7.9 0 9v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2V6c0-3.324-2.676-6-6-6Zm0 2c2.276 0 4 1.724 4 4v1H4V6c0-2.276 1.724-4 4-4Zm0 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
