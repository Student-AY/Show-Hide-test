import React, { useState } from "react";
import{ SafeAreaView,StyleSheet,View,Button,Image} from 'react-native';
const App = () => {
  const [show,setShow] = useState(true);

  return(
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        {
          show ? (
            <Image
            source={{uri:"https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png"}}
            style={{width:250,height:250,marginBottom:10}}
            />
          ) : null
        }
         
          <Button
          title="Hide/Show React(Logo)"
          onPress={() => setShow(!show)}
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