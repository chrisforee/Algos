// Algos prcatice
// Included in the websit

// Level 1 


var x = 5;
console.log(x);

var x = 3;
x = x+1;
console.log(x);

var x = 3;
x = x+2;
console.log(x+2);
console.log(x);

var x = 3;
x = x*x;
console.log(x);
console.log(x*2);

var x = 2;
var y = 5;
var z = x+y;
console.log(z);


// Level 2

var x = [1,2,4];
console.log(x);

var x = [1,3,5];
console.log(x[0]);

var x = [2,4,6];
console.log(x[1]);

var x = [1,3,5];
console.log(x[2]);

var c = [1.3];
console.log(x[0]);

var x = [1,2,4];
x[0] = x[1];
console.log(x);

var x = [1,3,5];
var y = x.length;
console.log(y);

var x = [2,4,6,3,7];
var y = x.length -2;
console.log(x[y]);

var x = [2,4,6,3,7];
var y = x.length;
console.log(x[y-1]);

var x = [1,3,5,7];
x[0] = x[x.length-2];
console.log(x);

var x = [1,3,5,7];
x[x.length-3] = x[x.length/2+x.length/4];
console.log(x);

var x = [1,3,5,7];
var y = [2,4,6];
x[2] = y[x.length-3];
console.log(x);

var x = [1,3,5,7];
var y = [2,4,6];
x[2] = y[x.length-3] + x[x[0] + y[0]];
console.log(x);

var x = [1,3,5];
x[0] = x[2];
x[1] = x[0];
console.log(x);

var x = [1,3,5,8];
x[0] = x[x.length-1];
console.log(x);

var x = [1,3,5];
var y = [0,5,7];
x[0] = x[1] + y[2];
y[1] =y[2] -x[0];
console.log(x);

var x = [1,3,5,8];
var temp = x[x.length-1];
x[x.length-1] = x[0];
console.log(x);

var x = [1,3,5,8];
var temp = x[x.length-1];
x[x.length-1] = x[0];
x[0] = temp;
console.log(x);

var x = [1,3,5,8];
x.pop();
x.push(7);
console.log(x);

var x = [1,3,5];
x[0] = 15;
x[3] = 77;
console.log(x);

for(var i=1; i<100; i++)
{
    if(i == 10)
    {
        break;
    }
    console.log(i)
}

var x = [['coding', 'boom'], ['dojo', 'yeah']];
console.log(x[0][0] + '-' + x[1][0]);