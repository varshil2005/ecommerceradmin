import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Contact from '../Container/Contact';
import Category from './Category';
import SubCategory from './SubCategory';
import Product from './Product';
import Category1 from '../Container/Category1';
import Categoryf from '../Container/CategoryFj/Categoryf';


const Drawer = createDrawerNavigator();

export default function Drawer1() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Category" component={Category} />
            <Drawer.Screen name="Category1" component={Category1} />
            <Drawer.Screen name="SubCategory" component={SubCategory} />
            <Drawer.Screen name="Product" component={Product} />
            <Drawer.Screen name="Categoryf" component={Categoryf} />
        </Drawer.Navigator>
    )
}