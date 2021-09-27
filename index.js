//Pearlycode by  kendrick


//we define a class with a constructor containing all events and arrays
class Activity{
    constructor( eventOne, eventTwo,eventThree,eventFour,classicLycanthrope, generalEvent, 

        result1,result2,result3,result4,result5,result6,result7,monArray,tuesArray,

        wedArray,thursArray,fridArray,satArray,sunArray ) {

        this.eventOne = eventOne;
        this.eventTwo = eventTwo;
        this.eventThree = eventThree;
        this.eventFour = eventFour;
        this.generalEvent = generalEvent;
        this.classicLycanthrope = classicLycanthrope;
        this.result1 = result1;
        this.result2 = result2;
        this.result3 = result3;
        this.result4 = result4;
        this.result5 = result5;
        this.result6 = result6;
        this.result7 = result7;
        this.monArray = monArray;
        this.tuesArray = tuesArray;
        this.wedArray = wedArray;
        this.thursArray = thursArray;
        this.fridArray = fridArray;
        this.satArray = satArray;
        this.sunArray = sunArray;



        
// activities that makes him  a weresquirel
 eventOne  = [
    { "id" : 1 , "value" :"locking the doors  and windows at night"},
    { "id" : 2 , "value" : "putting few walnut at the floor "} ,
    {"id": 3 , "value" : "avoiding the oak tree"}
    
]



//activities that makes him  a weresquirel
 eventTwo = [
    {"id":4, "value": "acting between 8pm to 10pm"}, 
    {"id": 5 , "value" : "glad of not having classic lycanthrope"}
]



//activities that makes him  a werewolf
 eventThree = [
    {"id": 6 , "value" : "worries about eating his neighbor"},
    {"id": 7 , "value" : "forgetting to put few walnut at the floor"}

]



//activities that makes him  a weresquirel
 eventFour = [
    {"id": 8, "value" : "worries about being eaten by neighbor's cat"},
    {"id": 9, "value" : "wakes up naked and disoriented"}

]



//activities that makes him into a werewolf
classicLycanthrope = [
    {"id": 10, "value" : "worries about eating the neighbor"},
    { "id": 11, "value" :  "come near an oak tree"}

]



//we add the whole arrays of events into a generalEvents array using the spread operator
let generalEvents =[ ...eventOne, ...eventTwo, ...eventThree, ...eventFour, ...classicLycanthrope]
console.log("This is the list of all events that Jacque does in a week : ")
let values = generalEvents.map((item) => item.value);
console.log(values)





//filtering eventOne array when it has no match with  eventtwo array
result1 = eventOne.filter(o1 => !eventTwo.some(o2 => o1.id === o2.id));
//a method called monArray
 monArray = (result1)=> {
   //initialize  a new array
    let newArray1 = new Array();
    //loop through the array
    for (let i = 0; i < result1.length; i++) {
      if (result1[i]) {
        //push the result into a new array
        newArray1.push(result1[i]);
      }
    }
    return newArray1;
  }


//map the items in the array to an item variable and return the value
let values1 = result1.map((item) => item.value);
console.log("The monday events are as follows :")
console.log(monArray(values1))
console.log(' From the activities, Jacque turned into a weresquirel on monday')





//filtering eventThree array when it has no match with  eventOne array
 result2 = eventThree.filter(o1 => !eventOne.some(o2 => o1.id === o2.id));

 //a method called tuesArray
 tuesArray = (result2) =>{
   //initialize a new array
  let newArray2  = new Array()
  //looping through the array
  for (let i = 0; i < result2.length; i++){
    if(result2[i]){
      //push the result into a new array
      newArray2.push(result2[i])
    }
  }
  return newArray2
}


//map the items in the array to an item variable and return the value
let values2 = result2.map((item) => item.value);
console.log("The Tuesday events are as follows :")
console.log(tuesArray(values2))
console.log(' From the activities, Jacque turned into a werewolf on Tuesday')




//filtering classicLycanthrope's array when it has no match with  eventtwo array
 result3 = classicLycanthrope.filter(o1 => !eventTwo.some(o2 => o1.id === o2.id));
 wedArray = (result3) =>{

   //initialize new array
  let newArray3  = new Array()
  for (let i = 0; i < result3.length; i++){
    if(result3[i]){
      //push the result into a new array
      newArray3.push(result3[i])
    }
  }
  return newArray3
}



//map the items in the array to an item variable and return the value
let values3 = result3.map((item) => item.value);
console.log("The wednesday events are as follows :")
console.log(tuesArray(values3)) 
console.log(' From the activities, Jacque turned into a werewolf on wednesday\n')






//filtering eventOne array when it has no match with  classicLycanthrope's array
result4 = eventOne.filter(o1 => !classicLycanthrope.some(o2 => o1.id === o2.id));

//a method called thursArray
 thursArray = (result4) =>{
   //initialize new array
  let newArray4  = new Array()

  //looping through the array
  for (let i = 0; i < result4.length; i++){
    if(result4[i]){
      //store the result in a new array
      newArray4.push(result4[i])
    }
  }
  return newArray4
}



//map the items in the array to an item variable and return the value
let values4 = result4.map((item) => item.value);
console.log("The Thursday events are as follows :")
console.log(thursArray(values4))
console.log(' From the activities, Jacque turned into a weresquirel on Thursday')




//filtering eventTwo array when it has no match with  eventThree array
result5 = eventTwo.filter(o1 => !eventThree.some(o2 => o1.id === o2.id));

// a method called fridArray
 fridArray = (result5) =>{
  let newArray5  = new Array()
  for (let i = 0; i < result5.length; i++){
    if(result5[i]){
      newArray5.push(result5[i])
    }
  }
  return newArray5
}

//map the items in the array to an item variable and return the value
let values5 = result5.map((item) => item.value);
console.log("The Friday events are as follows :")
console.log(fridArray(values5))
console.log(' From the activities, Jacque turned into a weresquirel on friday')




//filtering classicLycanthrope's array when it has no match with  eventOne array
 result6 = classicLycanthrope.filter(o1 => !eventOne.some(o2 => o1.id === o2.id));
 satArray = (result6) =>{
  let newArray6  = new Array()
  for (let i = 0; i < result6.length; i++){
    if(result6[i]){
      newArray6.push(result6[i])
    }
  }
  return newArray6
}


//map the items in the array to an item variable and return the value
let values6 = result6.map((item) => item.value);
console.log("The Saturday events are as follows :")
console.log(satArray(values6))
console.log(' From the activities, Jacque turned into a werewolf on saturday')




//filtering eventFour array when it has no match with  eventtwo array
result7 = eventFour.filter(o1 => !eventTwo.some(o2 => o1.id === o2.id));
sunArray = (result7) =>{
  //initialize a new array
  let newArray7  = new Array()

  //looping through the array
  for (let i = 0; i < result7.length; i++){
    if(result7[i]){

      //store the result in a new array
      newArray7.push(result7[i])
    }
  }
  return newArray7
}


//map the items in the array to an item variable and return the value
let values7 = result7.map((item) => item.value);
console.log("The Sunday events are as follows :")
console.log(sunArray(values7))
console.log(' From the activities, Jacque turned into a wereSquirel on sunday')

}

}


//we make an instance of our Activity class. This causes all our console.log methods in the class to show in the console.
let action = new Activity()