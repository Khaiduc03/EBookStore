import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#246BFE"
      fillRule="evenodd"
      d="M.87 6.853a3.085 3.085 0 0 0 0 4.294C2.825 13.205 6.184 16 10 16c1.66 0 3.234-.53 4.643-1.296l2.827 2.826a.75.75 0 1 0 1.06-1.06l-16-16a.75.75 0 0 0-1.06 1.06l2.575 2.575C2.782 4.975 1.7 5.98.87 6.853ZM7 9a3 3 0 0 0 4.524 2.585L7.415 7.476A2.986 2.986 0 0 0 7 9Zm12.13-2.147a3.085 3.085 0 0 1 0 4.294 21.835 21.835 0 0 1-2.032 1.89L12.999 8.94A3 3 0 0 0 10.061 6L6.72 2.658C7.754 2.25 8.857 2 10 2c3.816 0 7.174 2.795 9.13 4.853Z"
      clipRule="evenodd"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
