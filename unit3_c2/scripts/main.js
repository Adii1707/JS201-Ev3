
let form = document.getElementById('form').addEventListener('submit', main);
let data = [];

function main(){
event.preventDefault();
 



let  dataobj = {
     name:form.name.value,
     email:form.email.value,
     address:form.adress.value,
     wallet:form.amount.value
}
   data.push(dataobj); 
console.log(data)

}