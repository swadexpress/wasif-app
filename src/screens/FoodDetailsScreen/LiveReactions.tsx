import React, { useEffect, useState } from 'react';
import {
    Animated,
    Easing,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';

import { COLORS } from '../../constants';

const LiveReactions = ({ liveReactionsFunctionRef }:any) => {
    const [hearts, setHearts] = useState<any>([]);
    const [emojiSelectorVisible, setEmojiSelectorVisible] = useState(false);
    const [emojiSelectorHeight] = useState(new Animated.Value(0));
    const [selectedEmoji, setSelectedEmoji] = useState('❤️');




    const addEmoji = (emoji: string) => {
        const randomX = Math.random() * 80 - 40;
        const randomRotation = Math.random() * 60 - 20;
        const newHeart = {
            id: Date.now(),
            text: emoji,
            position: new Animated.Value(0),
            opacity: new Animated.Value(1),
            translateX: new Animated.Value(randomX),
            rotate: new Animated.Value(randomRotation),
        };

        setHearts((prevHearts: any) => [...prevHearts, newHeart]);

        Animated.parallel([
            Animated.timing(newHeart.position, {
                toValue: -400,
                duration: 2500,
                easing: Easing.out(Easing.quad),
                useNativeDriver: true,
            }),
            Animated.timing(newHeart.opacity, {
                toValue: 0,
                duration: 2500,
                useNativeDriver: true,
            }),
        ]).start(() => {
            setHearts((hearts: any) => hearts.filter((heart: any) => heart.id !== newHeart.id));
        });
    };

    const openEmojiSelector = () => {
        setEmojiSelectorVisible(true);
        Animated.timing(emojiSelectorHeight, {
            toValue: 250,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const closeEmojiSelector = () => {
        Animated.timing(emojiSelectorHeight, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
        }).start(() => setEmojiSelectorVisible(false));
    };

    const emojiData = ["😇", "🗿", "🥰", '💦', '🔥', "❤️", "😜", "😭", "😴"];

    useEffect(()=>{
        liveReactionsFunctionRef.current=addEmoji
    })

    return (
        <TouchableWithoutFeedback onPress={closeEmojiSelector}>
            <View style={styles.container}>
                {hearts.map((heart: any) => (
                    <Animated.View
                        key={heart.id}
                        style={[
                            styles.heart,
                            {
                                transform: [
                                    { translateY: heart.position },
                                    { translateX: heart.translateX },
                                    {
                                        rotate: heart.rotate.interpolate({
                                            inputRange: [-30, 30],
                                            outputRange: ['-30deg', '30deg'],
                                        })
                                    },
                                ],
                                opacity: heart.opacity,
                            },
                        ]}
                    >
                        <Text style={styles.emoji}>{heart.text}</Text>
                    </Animated.View>
                ))}

         

                {/* <TouchableOpacity
                    onLongPress={openEmojiSelector}
                    onPress={() => {
                        // const interval = setInterval(() => {
                        //             const randomEmoji = emojiData[Math.floor(Math.random() * emojiData.length)];
                        //             addEmoji(randomEmoji);
                        //         }, 100);
                        
                        //     return () => clearInterval(interval);
                    
                        addEmoji(selectedEmoji);
                    
                        }}
                    style={styles.heartIconContainer}
                >
                    <Text style={styles.emojiItem}>{selectedEmoji}</Text>
                </TouchableOpacity> */}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        right: 10,
        alignItems: 'center',
    },
    heartIconContainer: {
        borderRadius: 100,
        borderWidth: 1,
        width: 50,
        height: 50,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heart: {
        position: 'absolute',
        bottom: 0,
        right: 20,
    },
    emoji: {
        fontSize: 24,
        color:COLORS.primary
    },
    emojiSelector: {
        position: 'absolute',
        bottom: 0,
        right: 6,
        width: 40,
        backgroundColor: COLORS.primary,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: COLORS.primary,
        overflow: 'hidden',
    },
    emojiItem: {
        paddingVertical: 5,
        textAlign: 'center',
    },
});

export default LiveReactions;
