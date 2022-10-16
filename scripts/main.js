let OMSproject=document.getElementById('OMSproject');
const OMSeventHandler = (event) => {
    console.log(OMSproject.childNodes[0])
    console.log(OMSproject.childNodes.length)
    for(let i=0;OMSproject.childNodes.length-1;i++){
        if(i===0)continue
        OMSproject.removeChild(OMSproject.childNodes[i])
    }
    let OMSp=document.createElement('p');
    OMSp.innerHTML="Created a web application in php, js, sql to allow for orders to be input and tracked in a locally hosted database.";
    OMSproject.appendChild(OMSp);
}
OMSproject.addEventListener('click',OMSeventHandler)

let IMSproject=document.getElementById('IMSproject');
const IMSeventHandler = (event) => {
  document.getElementById('IMSProjectPid').hidden=!document.getElementById('IMSProjectPid').hidden
}
IMSproject.addEventListener('click',IMSeventHandler)
