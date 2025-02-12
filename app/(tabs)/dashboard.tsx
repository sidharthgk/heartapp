// app/dashboard.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, FONTS } from "../theme";
import { Ionicons } from '@expo/vector-icons';

export default function Dashboard() {
    const router = useRouter();

    const handleLogout = async () => {
        await AsyncStorage.removeItem("authToken");
        router.replace("/");
    };

    interface DashboardCardProps {
        title: string;
        icon: string;
        onPress: () => void;
    }

    const DashboardCard: React.FC<DashboardCardProps> = ({ title, icon, onPress }) => (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Text style={styles.cardText}>{title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Text style={styles.title}>Dashboard</Text>
                    <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: COLORS.mainColorOne, marginRight: 8 }}>Logout</Text>
                            <Ionicons name="log-out-outline" size={24} color={COLORS.mainColorOne} />
                        </View>
                    </TouchableOpacity>
                </View>

                <Text style={styles.subtitle}>Your Health Overview</Text>

                <View style={styles.cardContainer}>
                    <DashboardCard 
                        title="Vitals"
                        icon="heart-outline"
                        onPress={() => router.push("/vitals")}
                    />
                    <DashboardCard 
                        title="Lifestyle"
                        icon="fitness-outline"
                        onPress={() => router.push("/lifestyle")}
                    />
                </View>

                {/* Add more content here */}
                <View style={styles.summaryContainer}>
                    <Text style={styles.summaryTitle}>Today's Summary</Text>
                    {/* Add summary cards or stats here */}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
    },
    scrollContent: {
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 40,
    },
    title: {
        fontFamily: FONTS.headingBold,
        fontSize: 32,
        color: COLORS.headingColor,
    },
    subtitle: {
        fontFamily: FONTS.body,
        fontSize: 18,
        color: COLORS.paragraphColor,
        marginBottom: 24,
    },
    logoutButton: {
        padding: 8,
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: 24,
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: '48%',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 16,
    },
    cardText: {
        fontFamily: FONTS.bodyBold,
        fontSize: 16,
        color: COLORS.headingColor,
        marginTop: 8,
    },
    summaryContainer: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 16,
        marginBottom: 20,
    },
    summaryTitle: {
        fontFamily: FONTS.headingBold,
        fontSize: 20,
        color: COLORS.headingColor,
        marginBottom: 16,
    },
});
