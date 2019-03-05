document.getElementsByName("text").append=("text")

document.getElementsByName("text")

document.getElementsByName("text").append=("")

document.getElementsByName("text")


for (let item of document.getElementsByTagName('input')) {
  if(item.getAttribute('type') == 'checkbox') {
    item.checked = false;
  } else {
    item.value = '';
  }
}

//for (let item of document.getElementsByTagName('input')) {
//  if(item.getAttribute('type') == 'checkbox') {
//    item.checked = false;
//    console.log('<input type="%s" checked="%s">', item.getAttribute('type'), item.checked);
//  } else {
//    item.value = '';
//    console.log('<input type="%s" value="%s">', item.getAttribute('type'), item.value);
//  }
//}
function getvalue(){}
function getvalue(){
    return {
        id1: id1.value,
        id2: id2.value,
        id3: id3.value,
        id4: id4.checked,
        id5: id5.value,
        id6: id6.value,
        id7: id7.value,
        id8: id8.value,
        id9: id9.value,
    }   
}

document.getElementsByTagName('button')[0].addEventListener('click', getvalue)