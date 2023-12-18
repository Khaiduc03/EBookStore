import {AirbnbRating} from '@rneui/themed';
import React from 'react';
import {Text, View} from 'react-native';
import Svg, {Line} from 'react-native-svg';
import useStyles from './styles';
import {getChartRating} from '../../../../../../redux/selectors/rating.selector';
import {useAppSelector} from '../../../../../../hooks';

interface LineComponentProps {
  length: number;
  stroke: string;
}

const LineComponent: React.FC<LineComponentProps> = ({length, stroke}) => {
  const maxWidth = 100;
  const adjustedLength = Math.min(length, maxWidth);
  return (
    <Svg height="4" width={`${adjustedLength}%`}>
      <Line
        x1="0"
        y1="5"
        x2="120"
        y2="5"
        stroke={stroke}
        strokeWidth="100"
        strokeLinecap="butt"
      />
    </Svg>
  );
};

const ItemRating: React.FC = () => {
  const styles = useStyles();
  const dataChart = useAppSelector(getChartRating);

  const extractRatings = (dataChart: any) => {
    const totalRatings = dataChart?.total_rating || 1;
    const ratings = [
      {value: 5, length: (dataChart?.rating_5 / totalRatings) * 100 || 0},
      {value: 4, length: (dataChart?.rating_4 / totalRatings) * 100 || 0},
      {value: 3, length: (dataChart?.rating_3 / totalRatings) * 100 || 0},
      {value: 2, length: (dataChart?.rating_2 / totalRatings) * 100 || 0},
      {value: 1, length: (dataChart?.rating_1 / totalRatings) * 100 || 0},
    ];

    return ratings;
  };

  const ratings = extractRatings(dataChart);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.viewRating1}>
          <Text style={styles.numberRating}>
            {dataChart?.average_rating
              ? dataChart?.average_rating.toFixed(1)
              : 0}
          </Text>
          <AirbnbRating
            isDisabled={true}
            defaultRating={
              dataChart?.average_rating
                ? parseInt(dataChart.average_rating.toFixed(1))
                : 4
            }
            selectedColor="#FFC911"
            showRating={false}
            size={20}
          />
          <Text style={styles.numberReviews}>
            ( {dataChart?.total_rating || 0} reviews )
          </Text>
        </View>
        <View style={styles.line} />
        <View style={styles.viewRating2}>
          {ratings.map(({value, length}, index) => (
            <View style={styles.lineRating} key={index}>
              <Text style={styles.numberLine}>{value}</Text>
              <LineComponent length={length} stroke="#FAA731" />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ItemRating;
