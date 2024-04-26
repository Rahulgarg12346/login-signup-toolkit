import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function btn({ bgColor, btnLabel, textColor,Press }) {
    return (
        <TouchableOpacity 
        onPress={Press} style={{ backgroundColor: bgColor, borderRadius: 100, alignItems: 'center',width:300,paddingVertical:5 ,marginVertical:10 ,marginHorizontal:60 }}>
            <Text style={{ color: textColor, fontSize: 22, fontWeight: "bold" }}>{btnLabel}</Text>
        </TouchableOpacity>
    )
}