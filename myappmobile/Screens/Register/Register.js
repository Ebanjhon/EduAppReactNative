import React, { useState } from "react"
import { SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, Button } from "react-native"
import RegisterStyles from "./RegisterStyles";
import DatePicker from "react-native-datepicker";
import DateTimePicker from '@react-native-community/datetimepicker';
const Register = () => {

    const [username, setusername] = React.useState('');
    const [firstname, setfirstname] = React.useState('');
    const [lastname, setlastname] = React.useState('');
    const [password, setpassword] = React.useState('');
    const [andress, setandress] = React.useState('');
    const [email, setemail] = React.useState('');
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };
    // const [showDatePicker, setShowDatePicker] = useState(false);

    // const onChange = (event, selectedDate) => {
    //     const currentDate = selectedDate || date;
    //     setShowDatePicker(Platform.OS === 'ios');
    //     setDate(currentDate);
    // };

    // const showDatePickerHandler = () => {
    //     setShowDatePicker(true);
    // };

    // const formatDate = (date) => {
    //     const day = date.getDate();
    //     const month = date.getMonth() + 1;
    //     const year = date.getFullYear();
    //     return `${day}/${month}/${year}`;
    // };

    return (
        <SafeAreaView style={{ justifyContent: 'center' }}>
            <ScrollView>
                <View style={RegisterStyles.container}>

                    <Text style={{ fontWeight: '800', fontSize: 45, paddingTop: 20 }}>WELLCOME</Text>

                    <View style={RegisterStyles.form_input}>
                        <View style={RegisterStyles.title_view}>
                            <Text style={RegisterStyles.title_text}>Tên người dùng</Text>
                        </View>
                        <TextInput
                            style={RegisterStyles.input}
                            onChangeText={setusername}
                            value={username}
                            placeholder="User name"
                        />
                    </View>

                    <View style={RegisterStyles.form_input}>
                        <View style={RegisterStyles.title_view}>
                            <Text style={RegisterStyles.title_text}>Tên</Text>
                        </View>
                        <TextInput
                            style={RegisterStyles.input}
                            onChangeText={setfirstname}
                            value={firstname}
                            placeholder="First name"
                        />
                    </View>

                    <View style={RegisterStyles.form_input}>
                        <View style={RegisterStyles.title_view}>
                            <Text style={RegisterStyles.title_text}>Họ</Text>
                        </View>
                        <TextInput
                            style={RegisterStyles.input}
                            onChangeText={setlastname}
                            value={lastname}
                            placeholder="Lastname"
                        />
                    </View>

                    <View style={RegisterStyles.form_input}>
                        <View style={RegisterStyles.title_view}>
                            <Text style={RegisterStyles.title_text}>Email</Text>
                        </View>
                        <TextInput
                            style={RegisterStyles.input}
                            onChangeText={setemail}
                            value={email}
                            placeholder="Email"
                        />
                    </View>

                    <View style={RegisterStyles.form_input}>
                        <View style={RegisterStyles.title_view}>
                            <Text style={RegisterStyles.title_text}>địa chỉ</Text>
                        </View>
                        <TextInput
                            style={RegisterStyles.input}
                            onChangeText={setandress}
                            value={andress}
                            placeholder="Andress"
                        />
                    </View>

                    <View style={RegisterStyles.form_input}>
                        <View style={RegisterStyles.title_view}>
                            <Text style={RegisterStyles.title_text}>ngày sinh</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderWidth: 1, width: '80%', borderRadius: 30 }}>
                            <Text style={{ fontSize: 18, padding: 10, }}>{date.toDateString()}</Text>
                            <Button title="Chọn ngày sinh" onPress={() => setShowDatePicker(true)} />

                            {showDatePicker && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode="date"
                                    is24Hour={true}
                                    display="default"
                                    onChange={handleDateChange}
                                />
                            )}

                        </View>

                    </View>

                    <TouchableOpacity style={RegisterStyles.button}>
                        <Text style={{ fontSize: 20, fontWeight: '700', color: '#fff' }}>Đăng Ký</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </SafeAreaView>

    )
}

export default Register