import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';
import useStyles from '../styles';
const SvgComponent = (props: SvgProps) => {
  const styles = useStyles();
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 16 16"
      {...props}>
      <Path
        fill={styles.colorSVG.color}
        d="M3 1v1h-.5C1.676 2 1 2.676 1 3.5v9c0 .824.676 1.5 1.5 1.5h10c.824 0 1.5-.676 1.5-1.5v-9c0-.824-.676-1.5-1.5-1.5H12V1h-1v1H4V1Zm-.5 2H3v1h1V3h7v1h1V3h.5c.281 0 .5.219.5.5V5H2V3.5c0-.281.219-.5.5-.5ZM2 6h11v6.5c0 .281-.219.5-.5.5h-10a.494.494 0 0 1-.5-.5Zm3 1v1h1V7Zm2 0v1h1V7Zm2 0v1h1V7Zm2 0v1h1V7ZM3 9v1h1V9Zm2 0v1h1V9Zm2 0v1h1V9Zm2 0v1h1V9Zm2 0v1h1V9Zm-8 2v1h1v-1Zm2 0v1h1v-1Zm2 0v1h1v-1Z"
      />
    </Svg>
  );
};
const Memo = memo(SvgComponent);
export default Memo;
