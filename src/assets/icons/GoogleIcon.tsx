import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M32 5a5 5 0 0 0-5-5H5a5 5 0 0 0-5 5v22a5 5 0 0 0 5 5h22a5 5 0 0 0 5-5V5Z"
    />
    <Path
      fill="#4285F4"
      fillRule="evenodd"
      d="M23.83 16.182c0-.567-.051-1.113-.145-1.636H16.15v3.094h4.305a3.68 3.68 0 0 1-1.596 2.415v2.007h2.585c1.513-1.393 2.386-3.444 2.386-5.88Z"
      clipRule="evenodd"
    />
    <Path
      fill="#34A853"
      fillRule="evenodd"
      d="M16.15 24c2.16 0 3.97-.716 5.294-1.938l-2.585-2.008c-.717.48-1.633.764-2.71.764-2.083 0-3.847-1.407-4.476-3.298H9v2.073A7.997 7.997 0 0 0 16.15 24Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FBBC05"
      fillRule="evenodd"
      d="M11.674 17.52a4.81 4.81 0 0 1-.251-1.52c0-.527.09-1.04.25-1.52v-2.073H9.002A7.997 7.997 0 0 0 8.15 16c0 1.29.309 2.513.85 3.593l2.674-2.073Z"
      clipRule="evenodd"
    />
    <Path
      fill="#EA4335"
      fillRule="evenodd"
      d="M16.15 11.182c1.174 0 2.229.403 3.058 1.196l2.294-2.294C20.117 8.793 18.306 8 16.15 8A7.997 7.997 0 0 0 9 12.407l2.673 2.073c.63-1.89 2.393-3.298 4.477-3.298Z"
      clipRule="evenodd"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
