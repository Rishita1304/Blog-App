import { View, Text, TouchableOpacity, StyleSheet,ActivityIndicator } from 'react-native'
import React from 'react'

const SubmitButton = ({btnTitle,loading,handleSubmit}) => {
  return (
    <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
      <Text style={styles.btnText}>{loading? <ActivityIndicator size="small" color="#ffffff" />: btnTitle}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    submitBtn: {
      backgroundColor: "#1e2225",
      height: 50,
      marginHorizontal: 25,
      borderRadius: 80,
      justifyContent: "center",
      marginBottom: 20,
    },
    btnText: {
      color: "#ffffff",
      textAlign: "center",
      fontSize: 24,
      fontWeight: "400",
    },
  });

export default SubmitButton