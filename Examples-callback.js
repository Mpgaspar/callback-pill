//Ex01
function greeting(name) {
    alert('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }
  
  processUserInput(greeting);

//Ex02
let grossSalary = 3000;
let netSalary;

getSalary(grossSalary, (result) => {
    netSalary = result;
    console.log(`The net salary is ${netSalary}`);
});

function getSalary(grossSalary, callback)
{
    let liquido = 0;
    const inss = grossSalary * 0.11;
    const vr = grossSalary * 0.05;
    const vt = grossSalary * 0.06;
    const fgts = grossSalary * 0.15;
    const descontos = inss + vr + vt + fgts;
    liquido = grossSalary - descontos;
    
    return callback(liquido);
}

//Ex03
/*A callback is important here because we need to wait for a response
from the server before we can move forward in our code*/
T.get('search/tweets', params, function(err, data, response) {
    if(!err){
      
    } else {
      console.log(err);
    }
  })

//Ex04
/*The callback function is responsible for using the fetched data and then updating the same in the DOM.
The data is being fetched in the main function getUserName*/ 
function getUserName(callback){
    var name;
    $.get('https://randomuser.me/api/',  function(data) {
            name = data.results[0].name.first
                    + " " + data.results[0].name.last;
            callback(name);
    });
}

var username ;

function callback(res){
    username = res;
    document.write("Name: " + username);
}

getUserName(callback);

//Ex05
//The handlePhoto callback is just a way to store some things to do at a later time
downloadPhoto('http://coolcats.com/cat.gif', handlePhoto)

function handlePhoto (error, photo) {
  if (error) console.error('Download error!', error)
  else console.log('Download finished', photo)
}

console.log('Download started')
