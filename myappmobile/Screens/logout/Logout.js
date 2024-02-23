import { useContext } from "react"
import MyConText from "../../config/MyConText"
import { Button } from "react-native";

const Logout = () => {


    const [user, dispatch] = useContext(MyConText);

    const logout = () => {
        dispatch({
            "type": "logout"
        })
    }

    return (
        <Button title="Logout" onPress={logout} />
    )
}