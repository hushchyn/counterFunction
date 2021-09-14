function counter(){
    let start = 0;
    return function(num){
        start += num;
    console.log(start);
    }
}

let sum = counter()
sum(1)
sum(5)
sum(10)



