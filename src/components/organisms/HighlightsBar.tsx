import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import HighlightItem from '../molecules/HighlightItem';

interface Highlight {
  id: string;
  image: string;
  label: string;
}

interface HighlightsBarProps {
  highlights: Highlight[];
}

const HighlightsBar: React.FC<HighlightsBarProps> = ({ highlights }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.row}>
    {highlights.map((h) => (
      <HighlightItem key={h.id} image={h.image} label={h.label} />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', paddingHorizontal: 8, marginBottom: 8 },
});

export default HighlightsBar;
