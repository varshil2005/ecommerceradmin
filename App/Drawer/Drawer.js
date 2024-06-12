import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Contact from '../Container/Contact';
import Category from './Category';
import SubCategory from './SubCategory';
import Product from './Product';


const Drawer = createDrawerNavigator();

export default function Drawer1() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Category" component={Category} />
            <Drawer.Screen name="SubCategory" component={SubCategory} />
            <Drawer.Screen name="Product" component={Product} />
        </Drawer.Navigator>
    )
}