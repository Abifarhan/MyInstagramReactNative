import React from 'react';
import { View, StyleSheet } from 'react-native';
import Stat from '../atoms/Stat';

interface StatsRowProps {
  posts: number;
  followers: number;
  following: number;
}

const StatsRow: React.FC<StatsRowProps> = ({ posts, followers, following }) => (
  <View style={styles.row}>
    <Stat number={posts} label="Posts" />
    <Stat number={followers} label="Followers" />
    <Stat number={following} label="Following" />
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
});

export default StatsRow;
