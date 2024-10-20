import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import FastImage from "react-native-fast-image"
import { COLORS, SIZES, icons, images } from "../../constants"



const AboutUs = ({ }: any) => {



    return (


        <TouchableOpacity

            style={{
                marginTop: 5,

                marginHorizontal: 10,
            }}
            activeOpacity={0.7}>

            <View style={{
                width: '100%',
                justifyContent: 'flex-end',
                alignItems: 'flex-end'
            }}>



                <View style={{
                    width: 90,
                    height: 24,
                    backgroundColor: COLORS.primary,
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row'

                }}>
                    <Image

                        source={icons.edit}

                        style={{
                            width: 19,
                            height: 19,
                            tintColor: COLORS.white
                        }}


                    />

                    <Text style={{
                        fontSize: 11,
                        alignSelf: 'center',
                        fontWeight: '700',
                        color: COLORS.white,
                        marginLeft: 4,
                    }}>
                        Edit
                    </Text>
                </View>
            </View>

            <Text style={{
                fontSize: 12,
                fontWeight: '700',
                color: COLORS.gray,
                marginTop: 10,
                marginBottom: 20
            }}>
                Greetings,
                I am Kawsar Khan, a dedicated developer and programmer with a passion for technology. My programming journey began in 2017 When I wanted to make a robot car with Arduino Which can be controlled by an Android app. I honed my expertise in building backends with Django, Node.js, MySQL, and MongoDB.
                I also possess a keen eye for design, having mastered AdobeXD and Figma for creating captivating UI experiences, complemented by proficiency in HTML/CSS/Bootstrap for responsive web design. Additionally, I have experience working with front-end frameworks like React.js/Next.js.

                Currently, I am focused on Android and iOS app development using React-Native, continually seeking new knowledge and exploring emerging technologies.

                While I may not be an expert in every domain, my adaptability and efficiency in handling diverse coding environments and projects are among my key strengths.

                Skilled in back-end development, Django, NodeJS, REST API, MongoDB, MySQL, Flutter, React & React Native.Studying CSE at Ahsanullah University of Science and Technology. Passionate about algorithms, optimization, and AI.

            </Text>


        </TouchableOpacity>


    )

}

export default AboutUs