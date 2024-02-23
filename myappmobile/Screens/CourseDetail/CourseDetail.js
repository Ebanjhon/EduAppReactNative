import { SafeAreaView, View, Text, FlatList, TouchableHighlight } from "react-native"
import MyStyle from "../../MyStyles/MyStyle"
import CorsDetailStyles from "./CorsDetailStyles";
import { StyleSheet } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Course = ({ navigation }) => {

    const data = [
        { subject: 'Cuối kì', score: 8.5 },
        { subject: 'giữa kỳ', score: 9.0 },
        { subject: 'điểm miệng', score: 7.5 },
        { subject: 'điểm phát biểu', score: 7 },
        { subject: 'điểm chuyên cần', score: 5 },
    ];

    return (
        <SafeAreaView>
            <View style={[styles.container, MyStyle.topbar]}>
                <View style={{ width: '90%' }}>
                    <View style={[styles.header]}>
                        <Text style={styles.headerText}>Cột điểm</Text>
                        <Text style={styles.headerText}>Điểm số</Text>
                    </View>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <View style={[styles.row]}>
                                <Text style={styles.cell}>{item.subject}</Text>
                                <Text style={styles.cell}>{item.score}</Text>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>

            <View style={{ width: '100%', alignItems: 'center' }}>
                <Text style={styles.headerText}>Diễn đàn</Text>

                <TouchableHighlight onPress={() => navigation.navigate('Course')}>
                    <View style={styles.post}>
                        <GestureHandlerRootView style={{ width: '100%', height: 100 }}>
                            <LinearGradient
                                colors={['#22c1c3', '#2d85fd']}
                                start={{ x: 0.2, y: 5 }} // Điểm bắt đầu của gradient
                                end={{ x: 2, y: -1 }}
                                style={{
                                    flex: 1,
                                    borderRadius: 5, // Độ cong của viền
                                    overflow: 'hidden', // Ẩn nội dung bên ngoài đường viền
                                    borderWidth: 2, // Độ dày của đường viền
                                    borderColor: 'black', // Màu sắc của đường viền
                                    padding: 5,
                                    borderRadius: 10

                                }}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.title}>Admin: Jhon</Text>
                                    <Text style={[{ marginLeft: 10 }, styles.title]}>MSSV: 123</Text>
                                </View>
                                <Text style={styles.text_post}>Nội dung: đoạn văn em muốn trơr thành ca sỹ ádasd ád ád ád</Text>
                            </LinearGradient>
                        </GestureHandlerRootView>

                    </View>
                </TouchableHighlight>

            </View>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingTop: 30,
        width: '100%',
        minHeight: 100,
        alignContent: 'center',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        borderBottomWidth: 1
    },
    cell: {
        fontSize: 16,
    },
    post: {
        width: 'auto',
        height: 100,
        padding: 5,
        // backgroundColor: 'red',
        borderRadius: 10,
    },
    text_post: {
        fontSize: 17,
        fontWeight: '600'
    },
    title: {
        fontSize: 15,
        fontWeight: '500'

    },

});

export default Course