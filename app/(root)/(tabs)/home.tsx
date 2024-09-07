import CustomButton from '@/components/CustomButton';
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { callServer } from '@/lib/utils';

export default function Page() {
  const { user } = useUser();
  const [linkTokenData, setLinkTokenData] = useState(null);
  const [isLinkDisabled, setIsLinkDisabled] = useState(true);

  useEffect(() => {
    const initializeLink = async () => {
      const data = await callServer('http://192.168.202.1:3000/plaid', false);
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
      <SignedIn>
        <View className="flex-col justify-center items-center space-x-4 mt-4">
          <Text className="text-lg font-semibold text-gray-900 mb-4">
            Hello {user?.emailAddresses[0].emailAddress}
          </Text>
          <CustomButton
            title="Link Account"
            disabled={isLinkDisabled}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md"
          />
        </View>
      </SignedIn>

      <SignedOut>
        <View className="flex-row space-x-4 mt-4">
          <Link href="/log-in" className="bg-green-500 px-4 py-2 rounded-lg">
            <Text className="text-white">Sign In</Text>
          </Link>
          <Link href="/sign-up" className="bg-purple-500 px-4 py-2 rounded-lg">
            <Text className="text-white">Sign Up</Text>
          </Link>
        </View>
      </SignedOut>
    </SafeAreaView>
  );
}
