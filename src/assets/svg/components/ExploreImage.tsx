import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 32 32" {...props}>
    <Path d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4Zm-1.031 2.063H15V7h2v-.938A9.945 9.945 0 0 1 25.938 15H25v2h.938A9.945 9.945 0 0 1 17 25.938V25h-2v.938A9.945 9.945 0 0 1 6.062 17H7v-2h-.938a9.945 9.945 0 0 1 8.907-8.938ZM22.5 9.5l-8.344 4.656L9.5 22.5l8.344-4.656Zm-6.5 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
