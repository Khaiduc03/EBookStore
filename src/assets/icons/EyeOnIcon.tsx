import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#246BFE"
      fillRule="evenodd"
      d="M19.13 9.147a3.085 3.085 0 0 0 0-4.294C17.174 2.795 13.816 0 10 0 6.184 0 2.825 2.795.87 4.853a3.085 3.085 0 0 0 0 4.294C2.825 11.205 6.184 14 10 14c3.816 0 7.174-2.795 9.13-4.853ZM10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      clipRule="evenodd"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
