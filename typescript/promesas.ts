let promesas= new Promise( function (resolve, reject){
    setTimeout(()=>{
        var check=true;
        if(check==true){
            resolve();
        }else{
            reject();
        }
    })
})

promesas.then(function(){
    console.log("Run Successfully");
}, function(){
    console.error("Completed with errors");
});