import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';
import VideoDetailPage from './pages/VideoDetailPage';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

const Tab = createBottomTabNavigator();

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Library') {
                iconName = 'video-library';
              }
              else if (route.name === 'Details'){
                iconName = 'auto-awesome-mosaic';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomePage} />
          <Tab.Screen name="Library" component={LibraryPage} />
          <Tab.Screen
            name="Details"
            component={VideoDetailPage}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
