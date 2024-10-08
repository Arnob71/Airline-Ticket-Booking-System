import React from 'react';
import {Text, View, FlatList, Image, ScrollView} from 'react-native';


const destinationImages=[
{
    imageLink: require('./Images/Kolkata.jpg'),
    location:'Kolkata, India',
    locationBrief:'Kolkata (formerly Calcutta) is the capital of Indias West Bengal state. Founded as an East India Company trading post, it was Indias capital under the British Raj from 1773–1911. Today it’s known for its grand colonial architecture, art galleries and cultural festivals.'
},
{
    imageLink: require('./Images/London.jpeg'),
    location:'London, United Kingdom',
    locationBrief:'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations.'
},
{
    imageLink: require('./Images/Newyork.jpeg'), 
    location:'New York, United States',
    locationBrief: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.'
},
{
    imageLink: require('./Images/Toronto.jpeg'),
    location:'Toronto, Canada',
    locationBrief:'Toronto, the capital of the province of Ontario, is a major Canadian city along Lake Ontario’s northwestern shore. Its a dynamic metropolis with a core of soaring skyscrapers, all dwarfed by the iconic, free-standing CN Tower'
}
]

const aboutImages=[
  {imageLink: require('./Images/business.jpg'), title:"Business Class", details: "Explore our spacious Business Class seats and take a closer look at the dining experience and award-winning entertainment on board. You can enjoy exclusive 777 Onboard Lounge. Your journey starts with our complimentary chauffeur-driven transfers and Business Class airport lounge."},
  {imageLink: require('./Images/boeing787.jpg'), title:"Boeing 787 Dreamliner", details: "The industry-leading technology of the 787 Dreamliner is creating remarkable opportunities for airlines around the world and dramatically improving the air travel experience. We call it the Dreamliner effect."},
  {imageLink: require('./Images/boeing777.jpg'), title:"Boeing 777", details:"The Boeing 777's unique combination of superior range, outstanding fuel efficiency and passenger-preferred comfort has created long-range success for carriers around the world. And the 777-300ER now gives operators a perfect opportunity to extend that success."}
];
export default function HomeScreen()
{
  return (
    <ScrollView>
    <View>
      <Text style={{fontSize:32, marginTop:25, marginLeft:17, fontFamily:'serif' }}>Popular Destinations</Text>

      <FlatList 
        data={destinationImages}
        horizontal
        renderItem={({item})=>(
            <View style={{backgroundColor:'white', marginLeft:15, marginTop:15, marginRight:15, borderRadius:25, width:380}}>
            <View style={{height:225}}>
            <Image
            style={{flex:1, height:null, width:null, borderTopLeftRadius:10, borderTopRightRadius:10, resizeMode:'stretch'}}
             source={item.imageLink}
            />
            </View>
            <View style={{padding:10, paddingBottom:15}}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>{item.location}</Text>
            <Text>{item.locationBrief}</Text>
            </View>
            </View>
  )}/>
        <Text style={{fontSize:32, marginTop:20, marginLeft:17, fontFamily:'serif' }}>Explore BD Airways</Text>
        <FlatList 
        data={aboutImages}
        horizontal
        renderItem={({item})=>(
            <View style={{backgroundColor:'white', marginLeft:15, marginTop:15, marginRight:15, marginBottom:35, borderRadius:25, width:380}}>
            <View style={{height:225}}>
            <Image
            style={{flex:1, height:null, width:null, borderTopLeftRadius:10, borderTopRightRadius:10, resizeMode:'stretch'}}
             source={item.imageLink}
            />
            </View>
            <View style={{padding:10, paddingBottom:15}}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>{item.title}</Text>
            <Text>{item.details}</Text>
            </View>
            </View>
  )}/>
    </View>
    </ScrollView>
  );
};