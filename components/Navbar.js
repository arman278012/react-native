import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View } from 'react-native-reanimated/lib/typescript/Animated'

const Navbar = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text style={styles.sidebarText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <Text style={styles.sidebarText}>profile</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                <Text style={styles.sidebarText}>Settings</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    sidebar: {
        flex: 1,
        backgroundColor: '#3b5998',
        padding: 20,
    },
    sidebarText: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
    },
})

export default Navbar