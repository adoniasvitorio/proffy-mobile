import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './style';

function TeacherItem () {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: 'https://github.com/adoniasvitorio.png' }} />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Adonias Vitorio</Text>
                    <Text style={styles.subject}>Programação</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Full Stack Developer.{'\n'}{'\n'}
                In love with tech and music, geek and Open Source world's enthusiast.
                {'\n'}
                Currently studying Javascript and PHP ecosystem, also interested in Bitcoin and Economy.{' '}
                Would like to contribute with EN x PT-BR Translations or Codes.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'  '}
                    <Text style={styles.priceValue}>R$ 60,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;