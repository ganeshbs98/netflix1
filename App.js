import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StripeProvider } from '@stripe/stripe-react-native';

export default function App() {
  return (
   <>
   <StripeProvider publishableKey='pk_test_51PDASqSEO6COSYrG20y9JNdzdbSKUYMFpSwNpOiibnPZsaZojUsLMzIFRWEbWEjJeY2a94EwuHKLYfwbWYFWxPxU00tsZBR9Tv'>
   <StackNavigator/>
   <StatusBar style='auto'/>
   </StripeProvider>
  
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
