import { StatusBar } from 'react-native';
import './src/lib/day.js';

import {
  useFonts, 
  Inter_400Regular, 
  Inter_600SemiBold, 
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes/index.js';

export default function App() {
 const [fontsLoad] = useFonts({
    Inter_400Regular, 
    Inter_600SemiBold, 
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if(!fontsLoad){
    return <Loading />;
  }

  return (
    <>
      <Routes/>
      <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent />
    </>
  );
}


