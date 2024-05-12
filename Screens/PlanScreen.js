import React, { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Feather, Fontisto, Entypo } from "@expo/vector-icons";
import plans from "../data/plans";
import { useStripe } from "@stripe/stripe-react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";

const PlanScreen = () => {
  const route = useRoute();
  const email=route.params.email;
  const password=route.params.password
  const data = plans;
  const [selected, setSelected] = useState(null);
  const [price, setPrice] = useState(0);

  // console.log(price, "========");
  // console.log(selected, price);

  const stripe = useStripe();



  const d=async()=>{
    try{
      const res=await axios.get("http://10.15.13.11:8000")
      console.log(res.data)
    }catch(e){
      console.log(e.message)
    }
  }

  const payment1=async ()=>{
    try{
      const response=await axios.post("http://10.15.13.11:8000/payment",{
        Amount:Math.floor(price*100)
       }
      )
      // const datapay=response.data
      // console.log(datapay)
      const { clientSecret } = response.data;
    console.log("Received client secret:", clientSecret);

    const initSheet = await stripe.initPaymentSheet({
    
      paymentIntentClientSecret: clientSecret,
      merchantDisplayName: "Your App Name",
    });
    console.log(initSheet,"paymnet intiate")
    if (initSheet.error) {
      console.log("Error initializing PaymentSheet:", initSheet.error);
      
    }

    const presentSheet = await stripe.presentPaymentSheet();
    console.log(presentSheet,'payment present')
    // console.log(stripe.presentPaymentSheet())
    // if (presentSheet.error) {
    //   console.error("Error presenting PaymentSheet:", presentSheet.error);
    //   return;
    // }
    // stripe.onPaymentResult((result) => {
    //   console.log("Payment result:", result);
    //   // Handle payment result here
    // })
    // console.log("PaymentSheet presented successfully");
    // Handle payment result (success or failure) if needed
  } catch (error) {
    console.error("Error initiating payment:", error);
  }
}

  return (
    <>
      <ScrollView style={{ marginTop: 30 }}>
        <View style={{ padding: 10 }}>
          <Text style={styles.headertext}>
            Choose the right Plan that's right plan for you
          </Text>
          <View style={styles.textcontainer}>
            <Feather name="check" size={22} color="red" />
            <Text style={styles.text}>Watch all you want ad free</Text>
          </View>
          <View style={styles.textcontainer}>
            <Feather name="check" size={22} color="red" />
            <Text style={styles.text}>Recommendation just for you</Text>
          </View>
          <View style={styles.textcontainer}>
            <Feather name="check" size={22} color="red" />
            <Text style={styles.text}>Change or Cancel your plan anytime</Text>
          </View>
        </View>
        <View>
          {plans.map((item, index) => (
            <Pressable
              onPress={() => {
                setSelected(item.name);
                setPrice(item.price);
              }}
              key={index}
              style={[
                styles.planContainer,
                selected === item.name && { borderWidth: 2 },
              ]}

              // style={
              //   selected.includes(item.name)
              // }
            >
              {/* {console.log(item.name, selected, item.name === selected, "==>")} */}
              <View style={styles.devicePriceContainer}>
                <View style={styles.devicetype}>
                  <Text style={styles.devicetext}>{item.name}</Text>
                </View>
                <Text style={styles.textPrice}>Price : {item.price}</Text>
              </View>
              <View style={styles.qualityresolution}>
                <View>
                  <Text style={styles.videoquality}>
                    Video Quality : {item.videoQuality}
                  </Text>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                    Resolution : {item.resolution}
                  </Text>
                </View>
                <Fontisto name="netflix" size={24} color="black" />
              </View>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 16 }}>
                  Devices You can watch On :{" "}
                </Text>
                <View style={styles.devicetyp}>
                  {item.devices.map((device) => (
                    <Entypo
                      style={{ marginRight: 6 }}
                      name={device.name}
                      size={25}
                      color="#E50914"
                    />
                  ))}
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      {selected !== null ? (
        <Pressable style={styles.Paymentconatianer}>
          <View>
            <Text style={styles.planText}>Selected Plan {selected} </Text>
          </View>
          <Pressable onPress={payment1}>
            <Text style={styles.PaymentText}> PAY {price}</Text>
          </Pressable>
        </Pressable>
      ) : null}
    </>
  );
};

export default PlanScreen;

const styles = StyleSheet.create({
  headertext: {
    fontSize: 18,
    fontWeight: "900",
    textAlign: "center",
    justifyContent: "center",
  },
  textouterContainer: {
    marginTop: 3,
  },
  textcontainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    marginLeft: 10,
  },
  planContainer: {
    height: 160,
    borderRadius: 10,
    borderColor: "#E50914",
    borderWidth: 0.5,
    padding: 15,
    margin: 15,
  },
  devicePriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  devicetype: {
    backgroundColor: "#E50914",
    width: 80,
    padding: 5,
    borderRadius: 5,
  },
  devicetext: {
    textAlign: "center",
    color: "white",
  },
  textPrice: {
    fontWeight: "600",
  },
  qualityresolution: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
    marginRight: 15,
  },
  videoquality: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
  },
  devicebox: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  devicetyp: {
    flexDirection: "row",
    alignItems: "center",
  },
  Paymentconatianer: {
    backgroundColor: "#E50914",
    padding: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 8,
    borderRadius: 5,
  },
  planText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  PaymentText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
