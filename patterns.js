// 1
// *
// **
// ***
// ****
// *****

let star="";
for(a=1;a<=5;a++){
    star+="*"
    console.log(star)
}


// 2
// *****
// *****
// *****
// *****
// *****
{

for(f=1;f<=5;f++){
let star="";
for(a=1;a<=5;a++){
    star+="*"
}
console.log(star)
}

}


// Q3
// 1
// 12
// 123
// 1234
// 12345

{
let num="";
for(b=1;b<=5;b++){
    num+=b
    console.log(num)
}

}

// Q4
// 1
// 22
// 333
// 4444
// 55555

{
for(c=1;c<=5;c++){
    let num="";
    for(d=1;d<=c;d++){
        num+=c
    }
    console.log(num)
}
}

// Q5

// *****
// ****
// ***
// **
// *

{

for(c=5;c>=1;c--){
    let num="";
    for(d=1;d<=c;d++){
        num+="*"
    }
    console.log(num)
}


}

// Q6
//     *
//    ***
//   *****
//  *******
// *********
{
let space=" ";
let star="*";   
for(e=1;e<=5;e++){
    let line="";
    for(f=5;f>e;f--){
        line+=space;
    }
    for(g=1;g<=(2*e-1);g++){
        line+=star;
    }
    console.log(line)
}

}

// Q7
// *********
//  *******
//   *****
//    ***
//     *

{
let space=" ";
let star="*";   
for(e=5;e>=1;e--){
    let line="";
    for(f=5;f>e;f--){
        line+=space;
    }
    for(g=1;g<=(2*e-1);g++){
        line+=star;
    }
    console.log(line)
}
}


// Q81
// 2 3
// 4 5 6
// 7 8 9 10

{
let count=2;
for(h=1;h<=4;h++){
    let line="";
    for(i=1;i<=h;i++){
        line+=count+"";
        count++;
    }   
    console.log(line)
}

}

// Q9
// 1
// 01
// 101
// 0101
// 10101

{
for(j=1;j<=5;j++){
    let line="";    
    for(k=1;k<=j;k++){
        if((j+k)%2==0){
            line+="1";
        }
        else{
            line+="0";
        }
    }
    console.log(line)
}   
}

// Q10
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

{
let space=" ";
let star="*";
for(l=1;l<=4;l++){
    let line="";
    for(m=4;m>l;m--){
        line+=space;
    }
    for(n=1;n<=(2*l-1);n++){
        line+=star;
    }
    console.log(line)
}
for(l=3;l>=1;l--){
    let line="";
    for(m=4;m>l;m--){
        line+=space;
    }
    for(n=1;n<=(2*l-1);n++){
        line+=star;
    }
    console.log(line)
}
}
