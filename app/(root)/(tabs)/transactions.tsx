import { View, Text } from 'react-native';
import React from 'react';
import { useEffect, useState } from 'react';
import { SignedIn, SignedOut, useSession, useUser } from '@clerk/clerk-expo';
import { createClient } from '@supabase/supabase-js';
import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { callServer } from '@/lib/utils';

const Transactions = () => {
  const { user } = useUser();
  const [linkTokenData, setLinkTokenData] = useState(null); // Contains url to hosted link
  const [isLinkDisabled, setIsLinkDisabled] = useState(true);

  useEffect(() => {
    const initializeLink = async () => {
      const data = await callServer('http://192.168.202.1:3000/plaid', true, {
        client_user_id: user?.id,
      });
      console.log(`Received link token data ${JSON.stringify(data)}`);
      setLinkTokenData(data);

      if (data != null) {
        setIsLinkDisabled(false); // Enable the button when data is not null
      }
    };

    // Call the async function to initialize the link token
    initializeLink();
  }, []);

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-gray-100">
      <View className="flex-col justify-center items-center space-x-4 mt-4">
        <Text className="text-lg font-semibold text-gray-900 mb-4">Hello {user?.firstName}</Text>
        <CustomButton
          title="Link Account"
          disabled={isLinkDisabled}
          onPress={() => {
            console.log('Linking account');
            if (linkTokenData) {
              // Open url in browser
            }
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md"
        />
      </View>
    </SafeAreaView>
  );
};

export default Transactions;
