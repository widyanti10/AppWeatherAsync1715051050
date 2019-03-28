import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput,Image,ActivityIndicator} from 'react-native';

export default class Cuaca1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        city: '',
        forecast: {
            main: '',
            description: '',
            temp: 0,
            sunrise: 0,
            sunset: 0,
            pressure: 0,
            humidity: 0,
            sea_level: 0,
            grnd_level: 0,
            speed: 0,
            loading: false,
        }
    };
}
async getWeather() {

    try {
        this.setState({loading: true });
        let response = await fetch(
            'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=2e62f78ca2aa2fd0c2a9eef06bd7cea6&units=metric'
        );

        let responseJson = await response.json();
        return this.setState({
            loading: false,
            forecast: {
                main: responseJson.weather[0].main,
                description: responseJson.weather[0].description,
                temp: responseJson.main.temp,
                sunrise: responseJson.sys.sunrise,
                sunset: responseJson.sys.sunset,
                pressure: responseJson.main.pressure,
                humidity: responseJson.main.humidity,
                sea_level: responseJson.main.sea_level,
                grnd_level: responseJson.main.grnd_level,
                speed: responseJson.wind.speed
            }
        });
    } catch (error) {
        console.error(error);
        this.setState({loading: true });
    }
}

  render() {
    return (
    <View style={styles.containerMain}>
      <View style={styles.box1}>
        <Text style={{fontSize: 25, textAlign: 'center', padding: 30, color: 'white'}}> 
        Prakiraan Cuaca </Text>
      </View>

      <View style={styles.box2}>  
        <Text style={{fontSize: 20, textAlign: 'center',paddingTop: 30, color: 'white'}}> Masukan Nama Kota </Text>  
        <View style={styles.textInput}>
          <TextInput style={{textAlign: 'center', color: 'black'}} placeholder=" Masukan Nama kota " onChangeText={(city) => this.setState({ city })}/>
        </View>
        <TouchableHighlight onPress={() => this.getWeather()}>
        {
          this.state.loading ? <ActivityIndicator color="#81C784" size="small" animating />
          : <Text style={{paddingTop: 10,color: '#fff'}}>Lihat</Text>
        }
        </TouchableHighlight>      
      </View>

      <View style={styles.boxUtama}>
      <View style={styles.box3}>
        <View style={styles.textInput}>
        <View>
            <Image source={require("./icon/temp.png")} style={styles.image} />  
        </View>
          <Text style={{fontSize: 10,color: 'black'}}>Temp : { this.state.forecast.temp}</Text>
        </View>

        <View style={styles.textInput}>
        <View>
            <Image source={require("./icon/cuaca.png")} style={styles.image} />  
        </View>
          <Text style={{fontSize: 10,color: 'black'}}>Main : { this.state.forecast.main}</Text>
        </View>

        <View style={styles.textInput}>
        <View>
            <Image source={require("./icon/sunrise.png")} style={styles.image} />  
        </View>
          <Text style={{fontSize: 10,color: 'black'}}>Sunrise : { this.state.forecast.sunrise}</Text>
        </View>

        <View style={styles.textInput}>
        <View>
            <Image source={require("./icon/Pressure.png")} style={styles.image} />  
        </View>
          <Text style={{fontSize: 10,color: 'black'}}>Presure : { this.state.forecast.pressure}</Text>
        </View>

        <View style={styles.textInput}>
        <View>
            <Image source={require("./icon/sea.png")} style={styles.image} />  
        </View>
          <Text style={{fontSize: 10,color: 'black'}}>Sea Level : { this.state.forecast.sea_level}</Text>
        </View>
      </View>

      <View style={styles.box4}>
        <View style={styles.textInput}>
        <View>
            <Image source={require("./icon/wind.png")} style={styles.image} />  
        </View>
          <Text style={{fontSize: 10,color: 'black'}}>Wind Speed : { this.state.forecast.speed}</Text>
        </View>

        <View style={styles.textInput}>
        <View>
            <Image source={require("./icon/desc.png")} style={styles.image} />  
        </View>
          <Text style={{fontSize: 10,color: 'black'}}>Main Desc : { this.state.forecast.description}</Text>
        </View>

        <View style={styles.textInput}>
        <View>
            <Image source={require("./icon/sunset.png")} style={styles.image} />  
        </View>
          <Text style={{fontSize: 10,color: 'black'}}>Sunset : { this.state.forecast.sunset}</Text>
        </View>

        <View style={styles.textInput}>
        <View>
            <Image source={require("./icon/humidity.png")} style={styles.image} />  
        </View>
          <Text style={{fontSize: 10,color: 'black'}}>Humadity : { this.state.forecast.humidity}</Text>
        </View>

        <View style={styles.textInput}>
        <View>
            <Image source={require("./icon/ground.png")} style={styles.image} />  
        </View>
          <Text style={{fontSize: 10,color: 'black'}}>Ground Level : { this.state.forecast.grnd_level}</Text>
        </View>
      </View>
      </View>

      <View style={styles.box5}>
        <Text style={{fontSize: 15, textAlign: 'center', padding: 40, color: 'white'}}> 
        copyright@widyantidwiputri</Text>
      </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
containerMain: {
    backgroundColor: '#B9F6CA',
    flex: 1,
    flexDirection: 'column',
},
box1: {
    flex: 0.3,
    backgroundColor: '#006400',
    marginTop : 20,
    marginBottom : 20,
},
box2: {
    flex: 0.5,
    backgroundColor: '#006400',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 8,
}, 
box3: {
    flex: 1,
    backgroundColor: '#81C784',
    flexDirection: 'column',
    marginLeft: 8,
    marginRight: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
},
box4: {
    flex: 1,
    backgroundColor: '#81C784',
    flexDirection: 'column',
    marginLeft: 8,
    marginRight: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
},
box5: {
    flex: 0.2,
    backgroundColor: '#006400',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
},
textInput: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    height: 35,
    width: 160,
    marginTop: 15,
    borderRadius: 5,
},
boxUtama:{
    flex: 1,
    backgroundColor: '#81C784',
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
},
image: {
  flexDirection: 'row',
  justifyContent: 'center',
  height: 30,
  width: 30,
},
});