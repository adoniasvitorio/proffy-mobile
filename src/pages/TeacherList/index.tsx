import React from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/teacherItem';

import styles from './styles';

function TeacherList() {
    return (
        <View style={styles.container}>
            <PageHeader title='Proffys disponíveis'>
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput placeholderTextColor="#c1bccc" style={styles.input} placeholder='Qual a matéria?' />

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput placeholderTextColor="#c1bccc" style={styles.input} placeholder='Dia da semana?' />
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput placeholderTextColor="#c1bccc" style={styles.input} placeholder='Qual Horário?' />
                        </View>
                    </View>
                </View>

            </PageHeader>

            <ScrollView style={styles.teacherList} contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
            }} >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    );
}

export default TeacherList;