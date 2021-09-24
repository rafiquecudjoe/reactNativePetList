import React from 'react'
import { View,FlatList } from "react-native"
import Card from './components/card'

export default function PetList() {

    const pets = [
        { name: 'Pascal', category: 'cat', age: "2 years old", address: "95 Shoreline Dr_" ,image:require("./assets/pet1.jpg")},
        { name: 'Raka', category: 'dog', age: "1.3 years old", address: "97 Shoreline Dr_",image:require("./assets/pet2.jpg") },
        { name: 'Jhony', category: 'dog', age: "3 years old", address: "9h Shoreline Dr_", image:require("./assets/pet3.jpg")},
        { name: 'Dogger', category: 'dog', age: "2 years old", address: "98 Shoreline Dr_",image:require("./assets/pet4.jpg") },
        {name:'Hata',category:'dog',age:"5 years old", address:"93 Shoreline Dr_",image:require("./assets/pet5.jpg")},
        {name:'Body',category:'dog',age:"6 years old", address:"93 Shoreline Dr_",image:require("./assets/pet6.jpg")},
    ]
    return (
        <View>
            <FlatList
                data={pets}
                renderItem={({ item }) => { return <Card name={item.name} category={item.category} age={item.age} address={item.address} image={item.image}/>}}
                keyExtractor={(item)=>item.name}
            
            />
            
        </View>
    )
}
