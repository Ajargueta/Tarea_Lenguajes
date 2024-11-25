let Cbtn = document.querySelector('#cel');
let Fbtn = document.querySelector("#far");
let Kbtn = document.querySelector("#kel")
let intc = document.querySelector('#in_c');
let intf = document.querySelector('#in_f');
let intk = document.querySelector('#in_k')
let toast = bootstrap.Toast.getOrCreateInstance(document.querySelector('.toast'))

Cbtn.addEventListener('click', function(){
    if(intc.value.match(/^\d+(\.\d+)?$/gm)){
        let c = parseFloat(intc.value)
        let f = (c*1.8) + 32
        let k = c + 273.15
        intf.value = f
        intk.value = k
    }else{
        toast.show();
    }
})

Fbtn.addEventListener('click', function(){
    if(intf.value.match(/^\d+(\.\d+)?$/gm)){
        let f = parseFloat(intf.value)
        let c = (f-32) / 1.8
        let k = c + 273.15
        intc.value = c
        intk.value = k
    }else{
        toast.show();
    }
})

Kbtn.addEventListener('click', function(){
    if(intk.value.match(/^\d+(\.\d+)?$/gm)){
        let k = parseFloat(intk.value)
        let c = k - 273.15
        let f = (c * 1.8) + 32
        intf.value = f
        intc.value = c
    }else{
        toast.show();
    }
})