import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
const RegisterScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className="flex-1 bg-white ">
            <View className="px-3 flex-1 justify-around">
                <View className="items-center ">
                    <Text className="text-3xl">Create Account</Text>
                </View>

                <View>
                    <View className="mx-6">
                        <Text className="text-gray-500 pb-2">Full Name</Text>
                        <TextInput
                            className=" mb-2 p-3 border font-medium border-gray-300"
                            placeholder="Enter your full name"
                        />
                    </View>
                    <View className="mx-6">
                        <Text className="text-gray-500 pb-2">Phone</Text>
                        <TextInput
                            className=" mb-2 p-3 border font-medium border-gray-300"
                            placeholder="Enter your phone"
                        />
                    </View>
                    <View className="mx-6">
                        <Text className="text-gray-500 pb-2">Email</Text>
                        <TextInput
                            className=" mb-2 p-3 border font-medium border-gray-300"
                            placeholder="Enter your email"
                        />
                    </View>

                    <View className="mx-6">
                        <Text className="text-gray-500 pb-2 ">Password</Text>
                        <TextInput
                            className="mb-2 p-3 border border-gray-300 font-medium"
                            keyboardType="password"
                            placeholder="Enter your password"
                            secureTextEntry={true}
                        />
                    </View>
                    <View className="mx-6">
                        <Text className="text-gray-500 pb-2">Xác nhận password</Text>
                        <TextInput
                            className="mb-2 p-3 border border-gray-300 font-medium"
                            keyboardType="password"
                            placeholder="Enter your confirm password"
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Login');
                        }}
                        className="mx-6 mt-3 flex"
                    >
                        <Text className="text-xl text-center  bg-sky-800 text-white pt-4 pb-4">Create Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default RegisterScreen;
