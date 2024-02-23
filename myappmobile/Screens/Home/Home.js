import { Button, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, FlatList, ActivityIndicator } from "react-native"
import HomeStyles from "./HomeStyles"
import MyStyle from "../../MyStyles/MyStyle"
import React, { useState, useEffect, useReducer } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import MyUserReducer from "../../redurcer/MyUserReducer";
import API, { endpoints } from "../../config/API";
const Home = ({ navigation }) => {
    const [user, dispatch] = useReducer(MyUserReducer, null);

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                // Nếu có người dùng đăng nhập, chặn việc quay lại màn hình "Login"
                if (user !== null) {
                    return true; // Chặn quay lại màn hình trước đó
                }
                return false; // Cho phép quay lại màn hình trước đó
            };

            // Gắn sự kiện lắng nghe nút back
            const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () => backHandler.remove(); // Loại bỏ sự kiện lắng nghe khi màn hình không còn focus
        }, [])
    );

    const [courses, setCourse] = useState(null);

    useEffect(() => {
        const loadCourse = async () => {
            try {
                let res = await API.get(endpoints['course']);
                setCourse(res.data.results)
            } catch (ex) {
                console.error(ex);
            }
        }
        loadCourse();
    }, [])

    return (
        <SafeAreaView style={MyStyle.topbar}>
            <View style={HomeStyles.container}>
                {/* header screen*/}
                <View style={HomeStyles.header}>
                    <Image
                        style={HomeStyles.img}
                        source={{ uri: 'https://avatarfiles.alphacoders.com/294/294021.jpg' }}
                    />

                    <View style={{ marginLeft: 10 }}>
                        <Text style={HomeStyles.text_name}>Hello YourName</Text>
                        <Text>Student</Text>
                    </View>
                    <View>

                    </View>
                </View>
                {/* body screen */}
                <FlatList
                    style={HomeStyles.body}
                    ListHeaderComponent={
                        <View>
                            <Text style={HomeStyles.text_name}>Danh sách các khóa học:</Text>
                        </View>
                    }
                    data={courses}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Course')}>
                            <View style={HomeStyles.view_course}>

                                <Image
                                    style={HomeStyles.img_course}
                                    source={{ uri: 'https://i.pinimg.com/564x/03/e6/ec/03e6ec49164bb4a8586d862345eae049.jpg' }}
                                />
                                <View style={HomeStyles.title_view}>
                                    <Text style={HomeStyles.title_course}>{item.name}</Text>
                                    <Text style={HomeStyles.title_class}>{item.credit_hours}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </SafeAreaView>
    )

}

export default Home