import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';
import VideoCard from '../components/VideoCard';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import Material Icons

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
  const [searchQuery, setSearchQuery] = useState('');
  const { data, isLoading, error } = useQuery({
    queryKey: ['videos'],
    queryFn: fetchMovies,
  });

  const filteredVideos = data?.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    <View style={styles.listContainer}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FlatList
        data={filteredVideos}
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
    </View>
  );
};

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search videos..."
      />
      <TouchableOpacity onPress={() => {}}>
        <Icon name="search" size={24} color="gray" style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    flex: 1,
    paddingTop: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 8,
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
