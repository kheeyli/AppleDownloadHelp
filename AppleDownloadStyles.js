import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({

backgroundImage: {
  width: '100%',
  height: '100%',
},

  header: {
    alignItems: 'center',
  },

  headerImageContainer: {
    position: 'relative',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },

  headerImage: {
    width: '100%',
    height: 70, // Adjust the height as needed
  },

  headerText: {
    position: 'absolute',
    fontSize: 21,
    fontWeight: 'bold',
    color: 'white', // Optional: Set text color to white for better visibility
    padding: 20,
  },

  infoText: {
    fontSize: 21,
    color:'black',
    padding: 25,
    paddingBottom:15,
    textAlign: 'justify',
  },

  line: {
    height: 1,
    backgroundColor: 'gray',
    width: '100%',
    margin:10,
  },

  line2: {
    height: 1,
    backgroundColor: 'gray',
    width: '100%',
    marginB:10,
    position: 'absolute',
    top: 432,
  },

  Suggestion: {
    color:'black',
    fontSize: 25,
    fontWeight:'bold',
    textAlign: 'center',
    padding: 14,
    paddingTop: 5,
    
  },

  Suggestion1: {
    color:'black',
    fontSize: 22,
    fontWeight:'bold',
    textAlign: 'justify',
    padding: 20,
    paddingTop:0,
    paddingBottom:15,
  },

  Suggestion2: {
    color:'black',
    fontSize: 22,
    fontWeight:'bold',
    textAlign: 'justify',
    padding: 20,
    paddingTop:0,
    paddingBottom:15,
    marginTop:55,
  },

  steps: {
    color:'black',
    fontSize: 20,
    textAlign: 'justify',
    padding: 20,
    paddingTop:0,
    paddingBottom:10,
  }, 

  bold: {
    fontWeight: 'bold',
    // Add other styles specific to the bold text here
  },

  Link :{
    color:'blue',
    textDecorationLine: 'underline',
    fontStyle:'italic',
    fontSize: 19
  },

  link: {
    color:'black',
    fontSize: 19,
    textAlign: 'justify',
    padding: 20,
    paddingTop:0,
    fontStyle:'italic',
  },

  weblink1: {
    height: 50,
    width: '45%', // Adjust the width of each image as needed
    marginBottom: 20, // Adjust the margin between the images as needed
    position:'absolute',
    left:20,
    top: 370,
  },

  weblink2: {
    height: 50,
    width: '45%', // Adjust the width of each image as needed
    marginBottom: 20, // Adjust the margin between the images as needed
    position:'absolute',
    left:220,
    top: 370,
  },
  img: {
    width: 300,
    height: 150,
    alignSelf: 'center',
    marginBottom:20,
  },
  img1: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom:20,
  },

  img2: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom:20,
  },

  img3: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom:20,
  },

  img4: {
    width: 350,
    height: 150,
    alignSelf: 'center',
    marginBottom:20,
  },

  img5: {
    width: 350,
    height: 100,
    alignSelf: 'center',
    marginBottom:20,
  },
  img6: {
    width: 300,
    height: 500,
    alignSelf: 'center',
    marginBottom:20,
  },

});
