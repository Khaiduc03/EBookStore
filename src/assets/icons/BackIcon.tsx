import * as React from 'react';

import { makeStyles } from '@rneui/themed';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => {
  const styles = useStyles();
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      {...props}
    >
      <Path
        fill={styles.iconStyles.color}
        d="M20 8.75H4.787l6.988-6.987L10 0 0 10l10 10 1.762-1.762-6.975-6.988H20v-2.5Z"
      />
    </Svg>
  );
};
export default SvgComponent;

const useStyles = makeStyles(({ colors }) => ({
  iconStyles: {
    color: colors.black,
  },
}));
