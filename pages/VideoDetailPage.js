import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const VideoDetailPage = ({ route }) => {
  const { title = "Untitled Video", author = "Unknown Author", views = 0 } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>By {author}</Text>
      <Text style={styles.views}>{views} views</Text>
      <Button title="Like" onPress={() => alert('Liked!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 18,
    color: 'gray',
  },
  views: {
    fontSize: 16,
    color: 'darkgray',
  },
});

export default VideoDetailPage;
