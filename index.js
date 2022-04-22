//task1

let someString = "abbbcabcdefef"


function sort(names)
{
    string="";
    ss="";
    namestring=names.split("");

    for(j=0;j<namestring.length;j++) {
        for(i=j;i<namestring.length;i++) {
            if(string.includes(namestring[i]))
                break;
            else
                string+=namestring[i];
         }
         if(ss.length<string.length)
             ss=string;
         string="";
    }
    return ss;
}
console.log("task1 : ")
console.log(sort(someString));
    

//task2

    let task2 = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];


    task2.sort(
        function (a,b){
            if ( isNaN(a)&&isNaN(b)) return a<b?-1:a==b?0:1;
            else if (isNaN(a)) return 1;
            else if (isNaN(b)) return -1;
            else return a-b;
        })
        



//task4
var task4 = ['cat'];

var allAnagrams = function(task4) {
    var anagrams = {};
    task4.forEach(function(task4) {
        var recurse = function(ana, task4) {
            if (task4 === '') 
                anagrams[ana] = 1;
            for (var i = 0; i < task4.length; i++)
                recurse(ana + task4[i], task4.slice(0, i) + task4.slice(i + 1));
        };
        recurse('', task4);
    });
    return Object.keys(anagrams);
}
console.log("task4 : ")
console.log(allAnagrams(task4));

//task5

function Task5 (array, sum)  {
    let hashMap = {},
      results = []

        for (let i = 0; i < array.length; i++){
            if (hashMap[array[i]]){
                results.push([hashMap[array[i]], array[i]])
            }else{
                hashMap[sum - array[i]] = array[i];
            }
          }
          return results;
    }
console.log("Task 5 :");
console.log(Task5([1,2,3,4,5,6,7,8] , 7));

//task6 

var task6 = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 , 24];
  count = 24;
var missing = [];

for (var i = 1; i <= count; i++) {
  if (task6.indexOf(i) == -1) {
    missing.push(i);
  }
}
console.log("task 6 :");
console.log(task6);
console.log(missing);

