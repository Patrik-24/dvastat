let birthday = moment("2023-12-24");
let btn = document.getElementById("btn");
let myDate = document.getElementById("myDate");
let cas = document.getElementById("casCoChyba");

btn.addEventListener("click", function(){
    let takeDate = moment(myDate.value, "YYYY-MM-DD");

    let days = birthday.diff(takeDate, "days");

    cas.innerText =(days);
    console.log(days)
    
    let mesiac = birthday.format('MMMM'); 
    
    if(mesiac === "Januar") {
        console.log("ZIMA-Januar")
    } else if (mesiac === "Februar") {
        console.log("ZIMA-Februar")
    } else if (mesiac === "Marec") {
        console.log("JAR-Marec")
    } else if (mesiac === "April") {
        console.log("JAR-April")
    } else if (mesiac === "Maj") {
        console.log("JAR-Maj")
    } else if (mesiac === "Jun") {
        console.log("LETO-Jun")
    } else if (mesiac === "Jul") {
        console.log("LETO-Jul")
    } else if (mesiac === "August") {
        console.log("LETO-August")
    } else if (mesiac === "September") {
        console.log("JESEN-September")
    } else if (mesiac === "Oktober") {
        console.log("JESEN-Oktober")
    } else if (mesiac === "November") {
        console.log("JESEN-November")
    } else if (mesiac === "December") {
        console.log("ZIMA-December")
    }
});

