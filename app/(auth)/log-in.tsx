import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { images, icons } from '@/constants';
import InputField from '@/components/InputField';
import CustomButton from '@/components/CustomButton';
import OAuth from '@/components/OAuth';
import { useSignIn } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';

const Login = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace('/');
      } else {
        // See https://clerk.com/docs/custom-flows/error-handling
        // for more info on error handling
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, [isLoaded, emailAddress, password, signIn, setActive, router]);

  return (
    <ScrollView className="flex-1 bg-neutral-900">
      <View className="flex-1 bg-neutral-900">
        <View className="relative w-full h-[250px]">
          <Image source={images.DianaCLogo} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-bold absolute bottom-5 left-5">Welcome 👋</Text>
        </View>
        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Example: JaneDoe@gmail.com"
            icon={icons.email}
            value={emailAddress}
            onChangeText={(emailAddress: string) => setEmailAddress(emailAddress)}
          />
          <InputField
            label="Password"
            icon={icons.lock}
            placeholder="Enter your password"
            secureTextEntry={true}
            value={password}
            onChangeText={(password: string) => setPassword(password)}
          />
          <CustomButton title="Log in" onPress={onSignInPress} className="mt-6" />
          <OAuth />
          <Link href="/sign-up" className="mt-10 text-center text-neutral-400">
            <Text className="text-center">Need an account? </Text>
            <Text className="text-center text-violet-400 underline">Sign Up</Text>
          </Link>
        </View>
        {/* Verification Modal */}
      </View>
    </ScrollView>
  );
};

export default Login;
