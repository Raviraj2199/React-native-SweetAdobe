import { Pressable, StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'

const Cards = () => {
  return (
    <View style ={{padding:10}}>
      <Text style ={{fontSize:20,fontWeight:"600"}}>Inspiration for your Next Trip!!!</Text>
    
        <ScrollView horizontal>
        <Pressable style = {{marginTop:10,padding:10}}>
        <Image
            style={{
                width:190,
                height:150,
                borderTopRightRadius:8,
                borderBottomLeftRadius:8,
            }}
            source={{
                uri:"https://images.thrillophilia.com/image/upload/s--5J8rHaZ7--/c_fill,f_auto,fl_strip_profile,g_auto,h_600,q_auto,w_975/v1/images/photos/000/194/591/original/1582976262_shutterstock_1139375546.jpg.jpg?1582976262"
            
            }}
            />
            <View>
                <Text style={{fontSize:16,fontWeight:"bold",marginRight:"auto"}}>
                        Dal Lake 
                </Text>
            </View>
    </Pressable>

    <Pressable style = {{marginTop:10,padding:10}}>
        <Image
            style={{
                width:190,
                height:150,
                borderTopRightRadius:8,
                borderBottomLeftRadius:8,
            }}
            source={{
                uri:"https://www.thrillophilia.com/blog/wp-content/uploads/2017/05/how-to-reach-ladakh-1.jpg"
            
            }}
            />
            <View>
                <Text style={{fontSize:16,fontWeight:"bold",marginRight:"auto"}}>
                        Ladakh
                </Text>
            </View>
    </Pressable>

    <Pressable style = {{marginTop:10,padding:10}}>
        <Image
            style={{
                width:190,
                height:150,
                borderTopRightRadius:8,
                borderBottomLeftRadius:8,
            }}
            source={{
                uri:"https://www.followmeaway.com/wp-content/uploads/2020/02/towns-in-Switzerland-Lauterbrunnen.jpg"
            
            }}
            />
             <View>
                <Text style={{fontSize:16,fontWeight:"bold",marginRight:"auto"}}>
                Lauterbrunnen
                </Text>
            </View>
    </Pressable>

    <Pressable style = {{marginTop:10,padding:10}}>
        <Image
            style={{
                width:190,
                height:150,
                borderTopRightRadius:8,
                borderBottomLeftRadius:8,
            }}
            source={{
                uri:"https://cdn.onlyinyourstate.com/wp-content/uploads/2015/06/Nevada-Lake-1-Lake-Tahoe.jpg"
            
            }}
            />
             <View>
                <Text style={{fontSize:16,fontWeight:"bold",marginRight:"auto"}}>
                        Nevada Lake 
                </Text>
            </View>
    </Pressable>


        </ScrollView>
 
    
    
    
    
    </View>
  )
}

export default Cards

const styles = StyleSheet.create({})

