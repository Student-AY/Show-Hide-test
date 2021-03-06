import React, { useState } from "react";
import{ SafeAreaView,StyleSheet,View,Button,Image} from 'react-native';
const App = () => {
  const [show,setShow] = useState(true);
  const [show2,setShow2] = useState(true);

  return(
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        {
          show ? (
            <Image
            source={{uri:"https://reactjs.org/logo-og.png"}}
            style={{width:250,height:250,marginBottom:10}}
            />
          ) : null
        }
          <Button
          title="Hide/Show React(Logo)"
          onPress={() => setShow(!show)}
          />
      </View>

      <View style={styles.container}>
        {
          show2 ? (
              <Image
              source={{uri:"https://toppng.com/uploads/preview/png-effects-11552159189h8htyll5hu.png"}}
              
              style={{width:250,height:250,marginBottom:10}}
              />
          ) : null
        }
        <Button 
        title="Hide/Show Skull(picture)"
        onPress={() => setShow2(!show2)}
        />


      </View>
  </SafeAreaView>
  )
  
}

const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center",
    flex:1,
    margin:10,
    backgroundColor:"grey"
  }
});

export default App;