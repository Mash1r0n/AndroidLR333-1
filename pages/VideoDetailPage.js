import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const descriptions = [
  {videoId: 0, description: 'Undefined'},
  {videoId: 1, description: 'Short video'},
  {videoId: 2, description: 'Long video'}
];

const VideoDetailPage = ({ route }) => {
  const { title = "Untitled Video", author = "Unknown Author", views = 0, videoId = 0, thumbnail = '' } = route.params || {};

  console.log(thumbnail);

  let result = descriptions.find(item => item.videoId == videoId);

  return (
    <View style={styles.container}>
      <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>By {author}</Text>
      <Text style={styles.views}>{views} views</Text>
      <Text >{result ? result.description : "Description not available"}</Text>
      <Button title="Like" onPress={() => alert('Liked!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  thumbnail: {
    width: '100%',
    height: '30%',
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
