import React from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import VideoCard from '../components/VideoCard';
import Header from '../components/Header';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

const API_URL = 'https://my-json-server.typicode.com/Mash1r0n/Android/videos';

const fetchMovies = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch videos');
  }
  return response.json();
};

const HomePage = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <VideosList />
      </View>
    </QueryClientProvider>
  );
};

const VideosList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['videos'],
    queryFn: fetchMovies,
  });

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load videos. Please try again later.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <VideoCard
          title={item.title}
          views={item.views}
          thumbnail={item.thumbnail}
          author={item.author}
          videoId={item.id}
        />
      )}
    />
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

export default HomePage;
