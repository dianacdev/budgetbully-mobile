import { View, Text, Image } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';

export default function UserInfo() {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  const { imageUrl } = user;
  const params = new URLSearchParams();

  params.set('height', '80');
  params.set('width', '80');
  params.set('quality', '100');
  params.set('fit', 'crop');

  //  const imageSrc = imageUrl;

  return (
    <View className="userInfoWrapper">
      <Image source={{ uri: imageUrl }} alt="User image" className="rounded-[40px]" />
      <View className="mt-[25px] ml-[10px]">
        <Text className="text-base font-bold">{user.fullName}</Text>
        <Text className="text-base italic underline">{user.emailAddresses[0].emailAddress}</Text>
      </View>
    </View>
  );
}
