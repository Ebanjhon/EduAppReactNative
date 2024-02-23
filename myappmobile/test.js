import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { encode as base64encode } from 'base-64'; // Import hàm encode từ thư viện base-64

const getToken = async (grantType, clientId, clientSecret, username, password) => {
    try {
        const bodyParams = grantType === 'password' ? `grant_type=password&username=${username}&password=${password}` : 'grant_type=client_credentials';
        const authHeader = `Basic ${base64encode(`${clientId}:${clientSecret}`)}`; // Mã hóa clientId và clientSecret thành chuỗi base64
        const response = await fetch('https://nmau4669.pythonanywhere.com/o/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': authHeader
            },
            body: bodyParams,
        });
        const data = await response.json();
        console.log(data);
        // Xử lý token ở đây, ví dụ lưu vào AsyncStorage hoặc Redux state
    } catch (error) {
        console.error('Error fetching token:', error);
    }
};

const App1 = () => {
    const [grantType, setGrantType] = useState('password');
    const [clientId, setClientId] = useState('Thx78p5fDt70s30FvYGKk4dqSlGx6hfxSigsT4uh');
    const [clientSecret, setClientSecret] = useState('FtxskgJQ50ua0mQ2OklKWPUphDUOtROoe2XF7Ak4LkeEzZJHpipOWsQbnJ7Es5Dv3HzhDGyGBGO4s4Rk4pGl0s5x15BkBj1L5cJhPpUPuVevU7r20zhpw8HPMHN4K5If');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleGetToken = () => {
        getToken(grantType, clientId, clientSecret, username, password);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Grant Type:</Text>
            <TextInput
                style={styles.input}
                value={grantType}
                onChangeText={setGrantType}
            />
            <Text style={styles.label}>Username:</Text>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
            />
            <Text style={styles.label}>Password:</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Get Token" onPress={handleGetToken} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default App1;
