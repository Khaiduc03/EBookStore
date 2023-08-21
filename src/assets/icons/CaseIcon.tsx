import * as React from "react";
import Svg, { SvgProps, Circle } from "react-native-svg";
import { memo } from "react";

const SvgComponent = ({ colors, ...rest }: SvgProps & { colors?: string[] }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={52} height={14} fill="none" {...rest}>
    <Circle cx={7} cy={7} r={7} fill={colors?.[0] || "#A0A3BD"} />
    <Circle cx={26} cy={7} r={7} fill={colors?.[1] || "#A0A3BD"} />
    <Circle cx={45} cy={7} r={7} fill={colors?.[2] || "#A0A3BD"} />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
