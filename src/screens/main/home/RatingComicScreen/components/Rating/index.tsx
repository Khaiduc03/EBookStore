import {AirbnbRating, Icon, Rating} from '@rneui/themed';
import React from 'react';
import {Text, View} from 'react-native';
import useStyles from './styles';
import Svg, {Line, Rect} from 'react-native-svg';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';

interface LineComponentProps {
  length: number;
  stroke: string;
}

const LineComponent: React.FC<LineComponentProps> = ({length, stroke}) => {
  return (
    <Svg height="10" width={length.toString()}>
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

const ItemRating: React.FC = () => {
  const styles = useStyles();
  const ratingCompleted = (rating: number) => {
    console.log('Rating is: ' + rating);
  };
  const data = [
    {value: 5, length: 100},
    {value: 4, length: 80},
    {value: 3, length: 70},
    {value: 2, length: 60},
    {value: 1, length: 50},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.viewRating1}>
          <Text style={styles.numberRating}>4.9</Text>
          <AirbnbRating
            isDisabled={true}
            defaultRating={4}
            selectedColor="#F89300"
            showRating={false}
            size={24}
          />
          <Text style={styles.numberReviews}>( 6.8k reviews )</Text>
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

export default ItemRating;
