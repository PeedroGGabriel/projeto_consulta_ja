import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import bannerImage from '../assets/img1.jpeg';

const ServicoScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
        <ScrollView style={styles.header}>
            <TouchableOpacity onPress={() => { /* Adicione a lógica para abrir o menu lateral aqui */ }}>
            <Ionicons name="menu" size={30} color="#fff" />
            </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity style={styles.header1} onPress={() => navigation.navigate('Login')}>
            <Ionicons name="home" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Olá, Fulano!</Text>
        <Image source={bannerImage} style={styles.banner}/>
        <Text style={styles.title}>SERVIÇOS DISPONÍVEIS</Text>
        <TouchableOpacity style={styles.serviceButton}>
            <Text style={styles.serviceButtonText}>Consultas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceButton}>
            <Text style={styles.serviceButtonText}>Cancelamento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceButton}>
            <Text style={styles.serviceButtonText}>Acompanhamento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceButton}>
            <Text style={styles.serviceButtonText}>Exames</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceButton}>
            <Text style={styles.serviceButtonText}>Avaliar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceButton}>
            <Text style={styles.serviceButtonText}>Avaliações</Text>
        </TouchableOpacity>
       </ScrollView>
    )
};

const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#5B8BDF',
    },
    header: {
        flexDirection: 'row',
        contentContainerStyle: 'space-between',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    header1: {
        flex: 1,
        flexDirection: 'row-reverse',
        position: 'relative',
        marginTop: -60,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    headerText:{
        color: "#fff",
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    banner:{
        width:'100%',
        height: 150,
        resizeMode: 'cover',
        marginBottom: 20,
    },
    title:{
        color: "#fff",
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    serviceButton:{
        backgroundColor: '#004AAD',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginBottom: 10,
        width: '100%',
        alignItems:'center',
    },
    serviceButtonText: {
        color: '#fff',
        fontSize: 18,
    }
})

export default ServicoScreen;