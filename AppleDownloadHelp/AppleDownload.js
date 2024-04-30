import React from 'react';
import {  ScrollView, TouchableOpacity, Linking, Text, View, Image, ImageBackground } from 'react-native';
import { styles } from '../AppleDownloadStyles';
import HeaderImage from '../Icons/HeaderImage.jpg';
import background from '../Icons/background.png';
import websiteblue from '../Icons/webdl2.png';
import websitegreen from '../Icons/webdl1.png';
import img from '../Icons/img.png'
import img1 from '../Icons/img1.png'
import img2 from '../Icons/img2.png'
import img3 from '../Icons/img3.png'
import img4 from '../Icons/img4.png'
import img5 from '../Icons/img5.png'
import img6 from '../Icons/img6.png'



const AppleDownload = () => {
    
    const link1 = () => {
        Linking.openURL('https://appleid.apple.com/');
    };

    const link2 = () => {
        Linking.openURL('https://shenfendaquan.com/Index/index/meiguo_zhenshi_dizhi');
    };

    const link3 = () => {
        Linking.openURL('https://h5.shafayouxi.org');
    };

    const link4 = () => {
        Linking.openURL('https://h5.laiwanpai.com/');
    };

    return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
            <ImageBackground source={background} style={styles.backgroundImage}>
        <View style={styles.header}>

          <Image
            source={HeaderImage}
            style={styles.headerImage}
          />

          <Text style={styles.headerText}>Apple Download Help</Text>
        </View> 
          <Text style={styles.infoText}>Apple iPhone accounts registered in mainland China are currently unable to download the GoPlay360 app. </Text>
          
          
          <View style={styles.line}></View>


          <Text style={styles.Suggestion}>There are two ways to play GoPlay360. </Text>
          <Text style={styles.Suggestion1}>1. Access the web version of GoPlay360 </Text>
          <Text style={styles.steps}>GoPlay360's web version allows gaming without downloads, accessible on PC, iOS, and Android devices</Text>
          <Text style={styles.link}>Click on the web link to access it:</Text>

        <TouchableOpacity onPress={link3}>
            <Image
                source={websiteblue} 
                style={styles.weblink1}
            />
         </TouchableOpacity>

         <TouchableOpacity onPress={link4}>
         <Image
            source={websitegreen}
            style={styles.weblink2} />
        </TouchableOpacity>
        

        <View style={styles.line2}></View>


        <Text style={styles.Suggestion2}>2. Re-register your Apple iPhone account from other country or region to download the GoPlay360. </Text>
        <Text style={styles.steps}>
            <Text style={styles.bold}>Step 1</Text>: Register a new Apple ID and download GoPlay360 </Text>

        <Text style={styles.steps}>
            • Open the link {' '}
            <TouchableOpacity onPress={link1}>
                <Text style={styles.Link}>https://appleid.apple.com/</Text>
            </TouchableOpacity>{' '} and scroll to the bottom of the page to create a new Apple ID.
         </Text>


        <Image
            source={img}
            style={styles.img} />
        <Text style={styles.steps}>• When registering, ensure you provide all required information and remember your security questions.</Text>
        <Text style={styles.link}>Note: If encountering issues registering an Apple ID, it could be due to network problems. Try switching networks or toggling airplane mode.</Text>
        

        <View style={styles.line}></View>


        <Text style={styles.steps}>
            <Text style={styles.bold}>Step 2</Text>: Log in to the IOS AppStore</Text>
        <Text style={styles.steps}>• Log into the App Store on your iOS device with the Apple ID you just registered for the mainland China region.</Text>
        <Text style={styles.steps}>• When logging into the App Store with a newly registered account, a verification pop-up will appear after clicking 'Log In' for the first time. Click 'Verify' to proceed with the verification process.</Text>
        
        <Image
            source={img1}
            style={styles.img1} />
        <Text style={styles.steps}>• Select the payment method as 'None' and then click 'Next'.</Text>
        <Image
            source={img2}
            style={styles.img2} />
        <Text style={styles.steps}>• After completing the process, log out of the new account.</Text>

        <View style={styles.line}></View>
        <Text style={styles.steps}>
            <Text style={styles.bold}>Step 3</Text>: Switch countries</Text>

            <Text style={styles.steps}>
                • Open the web page again:{' '}
                <TouchableOpacity onPress={link1}>
                    <Text style={styles.Link}>https://appleid.apple.com</Text>
                </TouchableOpacity>{' '}
                and scroll to the bottom of the page to create a new Apple ID.
            </Text>

            <Text style={styles.steps}>• Log in to the account you just registered and click 'Edit' in the upper right corner.</Text>
            <Image
            source={img3}
            style={styles.img3} />


            <Text style={styles.steps}>
            • Use     {' '}
            <TouchableOpacity onPress={link2}>
                <Text style={styles.Link}> https://shenfendaquan.com </Text>
            </TouchableOpacity>{' '}to generate a foreign address for the United States. Change the country/region setting to the United States and fill in the required information accordingly.
            </Text>

            <Text style={styles.steps}>• After selecting the country or region you want to change to, there will be a pop-up window as shown in the image below. Click 'Continue to Update'.</Text>

            <Image
            source={img4}
            style={styles.img4} />

            <Text style={styles.steps}>• Then you can directly select the payment method as 'None'.</Text>

            <Image
            source={img5}
            style={styles.img5} />

        <Text style={styles.steps}>• Finally, fill in the remaining information with the address information you prepared in advance, then click 'Done' in the top right corner.</Text>

        <View style={styles.line}></View>

        <Text style={styles.steps}>
            <Text style={styles.bold}>Step 4</Text>: Download and play GoPlay360</Text>
            <Text style={styles.steps}>• Log in with the newly registered Apple ID. In the search bar, search for 'GoPlay360' and click 'GET' to download it.</Text>

            <Text style={styles.link}>Note: If you previously downloaded the 'GoPlay360' app using a mainland China account, please uninstall it first before reinstalling.</Text>

            <Image
            source={img6}
            style={styles.img6} />
        
        </ImageBackground>
      </View>
      </ScrollView>
    );
  }
  

export default AppleDownload;