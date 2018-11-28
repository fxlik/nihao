// cara 1
// var URL = "catatan.json";
// fetch(URL)
// .then(function(response){
//     if (response.status !== 200 ){
//         console.log('Ada masalah. Status code: ' + response.status);
//         throw response.statusText;
//     }
//     return response.json()
// })
// .then(function(res){
//     console.log(res.judul);
//     console.log(res.lokasi);
// })
// .catch(function(err){
//     console.log(err);
// })


// cara 2
var URL="catatan.json";
fetch(URL)
    .then(response=> response.json())
    .then(rsp => {
        console.log(rsp.judul);
        console.log(rsp.lokasi)
    })
    .catch((err)=> console.log(err));

// //ini buat tes error
// fetch(URL="234%241762") // bad URL
// .then(function(response){ //berisi Obyek Response
//  console.log(response);
//  if (reponse.ok){
//  return result.text(); // proses normal
//  }
//  else { // ada masalah dengan fetch
//  console.log(response.status) //status 400an
//  return Promise.reject(response.status);
//  //returns promise yang gagal, masuk ke catch
//  }
// })
// .then(function(result){
//     console.log(result); //normal case tanpa error
// })
// .catch(function(err){ // program lanjut di catch
//     console.log("Error: " + err);
// });


// yuppps
