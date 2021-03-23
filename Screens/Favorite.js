import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

import FavoriteItems from '../Component/FavoriteItems'

const foods = [
    {id: "1", image: require('../assets/steak.jpg'), name: "Steak", price: "20$", detail:  "A steak is a meat generally sliced across the muscle fibers, potentially including a bone. It is normally grilled, though can also be pan-fried. It is often grilled in an attempt to replicate the flavor of steak cooked over the glowing coals of an open fire." },
    {id: "2", image: require('../assets/rice.jpg'), name: "Rice", price: "30$", detail:  "Rice is the seed of the grass species Oryza sativa or less commonly Oryza glaberrima. As a cereal grain, it is the most widely consumed staple food for a large part of the world's human population, especially in Asia and Africa." },
    {id: "3", image: require('../assets/pizza.jpg'), name: "Pizza", price: "20$", detail:  "Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta." },
    {id: "4", image: require('../assets/eggs.jpg'), name: "Omlette", price: "20$", detail: "In cuisine, an omelette or omelet is a dish made from beaten eggs, fried with butter or oil in a frying pan (without stirring as in scrambled egg). It is quite common for the omelette to be folded around fillings such as cheese, chives, vegetables, mushrooms, meat (often ham or bacon), or some combination of the above." },
    {id: "5", image: require('../assets/bolani.jpg'), name: "Bolani", price: "30$", detail: "Bolani, also called Periki is a stuffed flat-bread from Afghanistan, baked or fried with a filling. It has a thin crust and can be stuffed with a variety of ingredients, such as potatoes or leeks but also graced pumpkin, chives, red lentils or with minced meat." },
    {id: "6", image: require('../assets/sandwich.jpg'), name: "Sandwich", price: "20$", detail:  "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type." },
];

export default function Favorite({name, image, price, detail}) {
  return (
    <TouchableOpacity style={{flex: 1}}>
        <FlatList 
            data={foods}
            renderItem={({item}) => {
                return <FavoriteItems name={item.name} price={item.price} image={item.image}/>
            }}
        />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
 
})
