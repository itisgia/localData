// var data = [
//   {
//       name: "Person1"
//   },
//   {
//       name: "Person2"
//   }
// ]
// //JSON is wrotten very smilar to js
// // good for small data
// console.log(data);
//
// var jsonData = [
//   {
//       "name": "Person1"
//   },
//   {
//       "name": "Person2"
//   }
// ]
// // you have to include double quotes
// //diffrence is one is js the other one is json(text)
// console.log(jsonData);
//
// //read the object turn into a string
// // tow diffrent way. set the data or give a new var.
// data = JSON.stringify(data);
// // var newData = JSON.stringify(data);
//
// var newUser= {
//     name: "person name",
//     username: "username",
//     password: "password",
//     email: "email"
// }
//
// newUser = JSON.stringify(newUser);
// // change js to json string
// //send to the database
//
// //turn json(string) into js(object)
// // JSON.parse(variables);


//designed for us to conneccting to a server
//makeign a request to some warehouse
// everytime type url you're seding a request to a server

// what this doing is about to make a brand new http request

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     //two things need to be awre of
//     //these are number code coming form http
//     // readyState
//     //     0 - request not initialized(not happend)
//     //     1 - server connection established
//     //     2 - request received
//     //     3 - processing the request
//     //     4 - request has finished and the data / response is ready
//     //
//     // Status
//     //     200 - Okay
//     //     403 - Forbidden / need to log in
//     //     404 - Not founc
//     if (this.status == 403) {
//         console.log("Forbidden, can't access information" );
//         return;
//     } else if (this.status == 404) {
//         console.log("ERROR, file not found");
//         return;
//     }
//
//
//     if(this.status == 200 && this.readyState == 4) {
//         console.log(this.responseText);
//         var data = JSON.parse(this.responseText)
//         console.log(data);
//     }
// };
// //opening a connection
// // what kind of connectuonwe doing
// // what type of method
// //absoulte patth from root dir to where to go
// // Synchronous: happend line by line (defalut)
// //Asynchronous : faster not wating for others to happen. saving time. (which says trur down below)
// xhttp.open("GET", "data/data.json", true);
// //sending data
// xhttp.send();
//
// // all that together called AJAX



// ******jquery way*********

// $.ajax({
//     type: "GET", // method
//     url: "data/data.json",
//     dataType: "json",
//     success: function(dataFromJSON){
//         console.log(dataFromJSON);
//     },
//     error: function(error) {
//         console.log(error);
//         console.log("Something went wrong");
//     }
// })
