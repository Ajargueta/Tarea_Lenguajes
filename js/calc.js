let input1 = document.querySelector('#n1')
let input2 = document.querySelector('#n2')
let toast = bootstrap.Toast.getOrCreateInstance(document.querySelector('.toast'))
let sum = document.querySelector('#btsum')
let mul = document.querySelector('#btmul')
let dis = document.querySelector('#btdiv')
let ext = document.querySelector('#btext')
let result = document.querySelector('#res')

sum.addEventListener('click', function(){
    if(input1.value.match(/^\d+(\.\d+)?$/gm) && input2.value.match(/^\d+(\.\d+)?$/gm)){
        let n1 = parseFloat(input1.value)
        let n2 = parseFloat(input2.value)
        result.value = n1 + n2
    }else{
        toast.show();
    }
})

mul.addEventListener('click', function(){
    if(input1.value.match(/^\d+(\.\d+)?$/gm) && input2.value.match(/^\d+(\.\d+)?$/gm)){
        let n1 = parseFloat(input1.value)
        let n2 = parseFloat(input2.value)
        result.value = n1 * n2
    }else{
        toast.show();
    }
})

dis.addEventListener('click', function(){
    if(input1.value.match(/^\d+(\.\d+)?$/gm) && input2.value.match(/^\d+(\.\d+)?$/gm)){
        let n1 = parseFloat(input1.value)
        let n2 = parseFloat(input2.value)
        result.value = n1 / n2
    }else{
        toast.show();
    }
})

ext.addEventListener('click', function(){
    if(input1.value.match(/^\d+(\.\d+)?$/gm) && input2.value.match(/^\d+(\.\d+)?$/gm)){
        let n1 = parseFloat(input1.value)
        let n2 = parseFloat(input2.value)
        result.value = n1 - n2
    }else{
        toast.show();
    }
})