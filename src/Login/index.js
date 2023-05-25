import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style'

export default function SignIn() {
    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.message}>Seja Bem Vindo(a)!</Text>
            </View> 
            <View style={styles.containerForm}>
                <Text style={styles.login}>Login</Text>
                <TextInput
                style={styles.input} 
                placeholder='Digite seu e-mail ou usuário'
                />

                <Text style={styles.login}>Senha</Text>
                <TextInput 
                style={styles.input}
                placeholder='Digite sua senha'
                />

                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.buttonTextLogin}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.buttonTextRegister}>Não Possui Conta?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}