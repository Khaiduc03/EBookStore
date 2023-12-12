import {AirbnbRating, Icon, Rating} from '@rneui/themed';
import React from 'react';
import {Text, View} from 'react-native';
import useStyles from './styles';
import Svg, {Line, Rect} from 'react-native-svg';
import {NavigationService} from '../../../../../../../../navigation';
import {routes} from '../../../../../../../../constants';
import {HeaderCustom} from '../../../../../../../../components';
import {useAppSelector} from '../../../../../../../../hooks';
import {getChartRating} from '../../../../../../../../redux/selectors/rating.selector';

interface LineComponentProps {
  length: number;
  stroke: string;
}

const LineComponent: React.FC<LineComponentProps> = ({length, stroke}) => {
  return (
    <Svg height="4" width={length.toString()}>
      <Line
        x1="0"
        y1="5"
        x2={length.toString()}
        y2="5"
        stroke={stroke}
        strokeWidth="80"
        strokeLinecap="butt"
      />
    </Svg>
  );
};

const RatingComic: React.FC = () => {
  const styles = useStyles();
  const dataChart = useAppSelector(getChartRating);
  const data = [
    {value: 5, length: dataChart ? dataChart?.rating_5 : 5},
    {value: 4, length: dataChart ? dataChart?.rating_4 : 4},
    {value: 3, length: dataChart ? dataChart?.rating_3 : 3},
    {value: 2, length: dataChart ? dataChart?.rating_2 : 2},
    {value: 1, length: dataChart ? dataChart?.rating_1 : 1},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.viewRating1}>
          <Text style={styles.numberRating}>
            {dataChart ? dataChart?.average_rating.toFixed(1) : 0}
          </Text>
          <AirbnbRating
            isDisabled={true}
            defaultRating={
              dataChart ? parseInt(dataChart.average_rating.toFixed(1)) : 4
            }
            selectedColor="#FFC911"
            showRating={false}
            size={24}
            ratingContainerStyle={styles.star}
          />
          <Text style={styles.numberReviews}>
            ({dataChart?.total_rating ? dataChart.total_rating : 0} reviews )
          </Text>
        </View>
        <View style={styles.line} />
        <View style={styles.viewRating2}>
          {data.map(({value, length}, index) => (
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

export default RatingComic;
