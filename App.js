import { StatusBar  } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View , TouchableOpacity , ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const App=()=> {
  return (
    <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        

          <Stack.Screen name="ProductScreen" component={ProductScreen} />
          <Stack.Screen name="EmployeeScreen" component={EmployeeScreen} />
          <Stack.Screen name="OrderScreen" component={OrderScreen} />
          <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
          <Stack.Screen name="EmployeeDetailScreen" component={EmployeeDetailScreen} />
          <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen} />
        
        </Stack.Navigator>
      </NavigationContainer>);

}


const HomeScreen =({navigation})=> {

  const [getProductList,setProductList]=useState([
    {key:1,Name:"Hand Sanitizer",Price:"500",image:"#NA", manufacturer:"Purell", ProductCode:"10991"},
    {key:2,Name:"Body Spray",Price:"1000",image:"#NA", manufacturer:"Nivea", ProductCode:"10992"},
    {key:3,Name:"Face Wash",Price:"1000",image:"#NA", manufacturer:"Garnier", ProductCode:"10993"}
])
  const [getEmployeeList,setEmployeeList]=useState([
    {key:1,FirstName:"Abdullah", LastName:"Shayk",Designation:"CEO",image:"#NA", Company:"ios"},
    {key:2,FirstName:"Fakhar", LastName:"Rana",Designation:"Software Developer",image:"#NA", Company:"ios"},
    {key:3,FirstName:"Bukhtiar", LastName:"Murtaza",Designation:"Clerk",image:"#NA", Company:"ios"},
   
])
  const [getOrderList,setOrderList]=useState([
    {key:1,Orderno:"22",Product:" Body Spray",Price:"1000",ShippingPrice:"200", CustomerName:"Ali", OrderDate:"12/12/2020" },
    {key:2,Orderno:"32",Product:" Face Wash",Price:"1000", ShippingPrice:"200",CustomerName:"Sara", OrderDate:"5/1/2021" },
    {key:3,Orderno:"42",Product:" Hand Sanitizer",Price:"500",ShippingPrice:"200", CustomerName:"Manahil", OrderDate:"7/1/2021" },
  
   
])

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.HomeLabels} onPress={()=>navigation.navigate("ProductScreen",{productlist:getProductList})}>
        <Text style={{fontWeight:"bold",fontSize:20, letterSpacing:3}}>Manage Products</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.HomeLabels} onPress={()=>navigation.navigate("EmployeeScreen",{Emp_list:getEmployeeList})}>
        <Text style={{fontWeight:"bold",fontSize:20, letterSpacing:3}}>Manage Employee</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.HomeLabels} onPress={()=>navigation.navigate("OrderScreen",{Order_list:getOrderList})}>
        <Text style={{fontWeight:"bold",fontSize:20, letterSpacing:3}}>Manage Orders</Text>
      </TouchableOpacity>
    
    </View>
  );
}
const ProductScreen =({navigation,route})=> {
  const {productlist}=route.params
  return (
    <View style={styles.container}>
      <Text style={{alignSelf:"flex-start", marginLeft:5,fontSize:25, fontWeight:"bold", letterSpacing:2}}>List of Products:</Text>
      <ScrollView style={{marginTop:15}}>
        {productlist.map((item, index) =>
          <View key={item.key} >
           <TouchableOpacity onPress={()=>navigation.navigate("ProductDetailScreen",{detail_list:productlist,key:item.key})}>
            <View style={styles.productsContainer}>
            <Text style={styles.productsProp}>{item.Name}</Text>
            <Text style={styles.productsProp}>{item.Price}</Text>
            <Text style={styles.productsProp}>{item.image}</Text>
            </View>
            </TouchableOpacity>
          </View>)}
          
      </ScrollView>
    
      <StatusBar style="auto" />
    </View>
  );
}
const ProductDetailScreen =({navigation,route})=> {
  const{detail_list}=route.params;
  const{key}=route.params
  
  
  var rlist=(detail_list.filter(detail_list=> detail_list.key==key));
  
  return (
    <View style={styles.container}>
      <ScrollView style={{marginTop:15}}>
        {rlist.map((item, index) =>
          <View key={item.key} >
           
            <View style={styles.productsDetailContainer}>
            <Text style={styles.productsDetailProp}>Product Name:  {item.Name}</Text>
            <Text style={styles.productsDetailProp}>Product Code:  {item.ProductCode}</Text>
            <Text style={styles.productsDetailProp}>Product Price:  {item.Price}</Text>
            <Text style={styles.productsDetailProp}>Product Manufacturer:  {item.manufacturer}</Text>
            <Text style={styles.productsDetailProp}>Product Image:  {item.image}</Text>
            </View>
          </View>)}
          
      </ScrollView>
     
    </View>
  );
}
const EmployeeScreen =({navigation,route})=> {
  const {Emp_list}=route.params
  return (
    <View style={styles.container}>
      <Text style={{alignSelf:"flex-start", marginLeft:5,fontSize:25, fontWeight:"bold", letterSpacing:2}}>Employees:</Text>
      <ScrollView style={{marginTop:15}}>
        {Emp_list.map((item, index) =>
          <View key={item.key} >
           <TouchableOpacity onPress={()=>navigation.navigate("EmployeeDetailScreen",{Emp_detail_list:Emp_list,key:item.key})}>
            <View style={styles.productsContainer}>
            <Text style={styles.productsProp}>{item.FirstName}</Text>
            <Text style={styles.productsProp}>{item.Designation}</Text>
          
            </View>
            </TouchableOpacity>
          </View>)}
          
      </ScrollView>
    
      <StatusBar style="auto" />
    </View>
  );
}
const EmployeeDetailScreen =({navigation,route})=> {
  const{Emp_detail_list}=route.params;
  const{key}=route.params

  var rlist=(Emp_detail_list.filter(Emp_detail_list=> Emp_detail_list.key==key));
 
  return (
    <View style={styles.container}>
      <ScrollView style={{marginTop:15}}>
        {rlist.map((item, index) =>
          <View key={item.key} >
           
            <View style={styles.productsDetailContainer}>
            <Text style={styles.productsDetailProp}>First Name:  {item.FirstName}</Text>
            <Text style={styles.productsDetailProp}>Last Name:  {item.LastName}</Text>
            <Text style={styles.productsDetailProp}>Designation:  {item.Designation}</Text>
            <Text style={styles.productsDetailProp}>Company:  {item.Company}</Text>
            <Text style={styles.productsDetailProp}>Image:  {item.image}</Text>
            </View>
          </View>)}
          
      </ScrollView>
     
    </View>
  );
}
const OrderScreen =({navigation,route})=> {
  const {Order_list}=route.params
  return (
    <View style={styles.container}>
      <Text style={{alignSelf:"flex-start", marginLeft:5,fontSize:25, fontWeight:"bold", letterSpacing:2}}>Employees:</Text>
      <ScrollView style={{marginTop:15}}>
        {Order_list.map((item, index) =>
          <View key={item.key} >
           <TouchableOpacity onPress={()=>navigation.navigate("OrderDetailScreen",{Order_detail_list:Order_list,key:item.key})}>
            <View style={styles.productsContainer}>
            <Text style={styles.productsProp}>{item.Orderno}</Text>
            <Text style={styles.productsProp}>{item.Price}</Text>
          
            </View>
            </TouchableOpacity>
          </View>)}
          
      </ScrollView>
    
      <StatusBar style="auto" />
    </View>
  );
}
const OrderDetailScreen =({navigation,route})=> {
  const{Order_detail_list}=route.params;
  const{key}=route.params

  var rlist=(Order_detail_list.filter(Order_detail_list=> Order_detail_list.key==key));
 
  return (
    <View style={styles.container}>
      <ScrollView style={{marginTop:15}}>
        {rlist.map((item, index) =>
          <View key={item.key} >
           
            <View style={styles.productsDetailContainer}>
            <Text style={styles.productsProp}>Order #:  {item.Orderno}</Text>
            <Text style={styles.productsProp}>Order Price: {item.Price}</Text>
            <Text style={styles.productsProp}>Shipping Price: {item.ShippingPrice}</Text>
            <Text style={styles.productsDetailProp}>Customer Nama:  {item.CustomerName}</Text>
            <Text style={styles.productsDetailProp}>Shipping Date:  {item.OrderDate}</Text>
            
            </View>
          </View>)}
          
      </ScrollView>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HomeLabels:{
    marginBottom:40
  },
  productsProp:{
    fontSize:20,
    marginEnd:45,
    marginBottom:5
    

  },
  productsContainer:{
    flexDirection:"row",
    marginTop:10,
    borderBottomWidth:2,
    marginBottom:20
  
    
  },
  productsDetailContainer:{

    marginTop:10,
 
    marginBottom:20
  
    
  },
  productsDetailProp:{

    marginTop:10,
 borderWidth:2,
 width:350,
 padding:10,
 fontWeight:"bold",
 fontSize:20,
    marginBottom:10
  
    
  },
});

export default App;
