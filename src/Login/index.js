import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default function SignIn() {
    return(
        <View>
            <Text>Login</Text>
            <TextInput 
            placeholder='Digite seu e-mail ou usuário'
            />

            <Text>Senha</Text>
            <TextInput 
            placeholder='Digite sua senha'
            />
        </View>
    )
}