import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from  '@expo-google-fonts/roboto';
import { AuthProvider } from './src/hooks/auth';
import AppLoading from 'expo-app-loading';
import React from 'react';

export default function App() {

	const [ fontsLoaded ] = useFonts({
		Roboto_400Regular,
		Roboto_700Bold,
	});

	if(!fontsLoaded) {
		return <AppLoading />;
	}

  return (
    <AuthProvider>
      <Home />
      <StatusBar style="light" translucent backgroundColor='transparent'/>
    </AuthProvider>
  );
}
