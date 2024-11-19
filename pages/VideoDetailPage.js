import React from 'react';
import { View, Text, Image, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';

const API_URL = 'https://my-json-server.typicode.com/Mash1r0n/Android/descriptions';

const fetchDescriptions = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch descriptions');
  }
  return response.json();
};

const VideoDetailPage = ({ route }) => {
  const { title = "Untitled Video", author = "Unknown Author", views = 0, videoId = 0, thumbnail = '' } = route.params || {};

  const { data, isLoading, error } = useQuery({
    queryKey: ['descriptions'],
    queryFn: fetchDescriptions,
  });

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load descriptions. Please try again later.</Text>
      </View>
    );
  }

  const description = data.find(item => item.videoId == videoId);

  return (
    <View style={styles.container}>
      <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>By {author}</Text>
      <Text style={styles.views}>{views} views</Text>
      <Text>{description ? description.description : "Description not available"}</Text>
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default VideoDetailPage;