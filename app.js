const slider=document.getElementsByClassName("slider")[0]
const basicmonth=document.getElementById('basicmonth')
const basicannual=document.getElementById('basicannual')
const promonth=document.getElementById('promonth')
const proannual=document.getElementById('proannual')
const masmonth=document.getElementById('masmouth')
const masannual=document.getElementById('masannual')


function changeprice(){
if ((basicannual.style.display==='inline-block') && (proannual.style.display==="inline-block") && (masannual.style.display==='inline-block')){
  basicannual.style.display='none';
  proannual.style.display="none";
  masannual.style.display='none';
  basicmonth.style.display="inline-block";
  promonth.style.display='inline-block';
  masmonth.style.display='inline-block';
}
else{
  basicannual.style.display='inline-block';
  proannual.style.display="inline-block";
  masannual.style.display='inline-block';
  basicmonth.style.display="none";
  promonth.style.display='none';
  masmonth.style.display='none';
}}

