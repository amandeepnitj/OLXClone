var category_bikes=["Royal Enfield","Bajaj","Hero","Hero Honda","Honda","KTM","Suzuki","TVS","Yamaha","Others"];
var category_scooters=["Bajaj","Hero","Honda","Mahindra","Suzuki","TVS","Others"];
var b_Royal=["Bullet","Classic","Thunderbird","Continental GT","Others"];
var b_Bajaj=["Avenger","CT100","Platina","Pulsar","Discover","others"];
var b_Hero=["Achiever","Ambition","CBZ","CD 100","CD Dawn","CD Deluxe","Dawn","Deluxe","Glamour"];
var b_HHonda=["Achiever","Ambition","CBZ","CD 100","CD Dawn","CD Deluxe","Dawn","Deluxe","Glamour"];
var b_Honda=["CB","CBF Stunner","CBR","CD 100 Dream","Dream Yuga","Goldwing GL 1800","VFR 1200 F","VT 1300 CX","Others"];
var b_KTM=["390 Duke ABS","Duke 200","RC","Others"];
var b_Suzuki=["Bandit","Gixxer","GS","GSX","Hayabusa","Hayate","Inazuma","M1800 R","M800"];
var b_TVS=["Apache RTR","Heavy Duty Super XL","Phoenix","Star City Plus","Star Sport","Others"];
var b_Yamaha=["Crux","Fazer","FZ","FZS","Saluto","SS 125","SZ","Vmax","YBR","YZF R"];
var b_Others=["Others"];
var s_Bajaj=["Others"];
var s_Hero=["Maestro","Pleasure","Others"];
var s_Honda=["Activa","Aviator","Dio","Others"];
var s_Mahindra=["Duro","Gusto","Kine","Rodeo","Sym Flyte","Others"];
var s_Suzuki=["Access","Swish","Others"];
var s_TVS=["Ntorq","Jupiter","Scooty","Wego","Others"];
var category=document.getElementById('categoryid');
var manufacturer=document.getElementById('manufacturerid');
var model=document.getElementById('modelid');
var category=document.getElementById('categoryid');
// console.log(category.value);
category.addEventListener('click',manufacturerfun());
function manufacturerfun(){
    var c_value=category.value;
    removeallchild(manufacturer);
    var chld=document.createElement('option');
    chld.value="";
    chld.innerHTML="Choose Manufacturer";
    manufacturer.appendChild(chld);
    if(c_value=="bikes")
    {
        for(var i=0;i<category_bikes.length;i++)
        {
            var chld=document.createElement('option');
            chld.value=category_bikes[i];
            chld.innerHTML=category_bikes[i];
            manufacturer.appendChild(chld);
        }
    }
    else if(c_value=="scooters")
    {
        // console.log("scooters");
        for(var i=0;i<category_scooters.length;i++)
        {
            var chld=document.createElement('option');
            chld.value=category_scooters[i];
            chld.innerHTML=category_scooters[i];
            manufacturer.appendChild(chld);
        }
    }
}

function modelfun(){
    var m_value=manufacturer.value;
    // console.log(m_value);
    removeallchild(model);
    var chld=document.createElement('option');
        chld.value="";
        chld.innerHTML="Choose Model";
        model.appendChild(chld);
    // if(m_value)
    if(category.value=="bikes" && m_value=="Royal Enfield"){
        // console.log(m_value);
        for(var i=0;i<b_Royal.length;i++){
            var chld=document.createElement('option');
            chld.value=b_Royal[i];
            chld.innerHTML=b_Royal[i];
            model.appendChild(chld); 
        }
    }
    else if(category.value=="bikes" && m_value=="Bajaj"){
        // console.log(m_value);
        for(var i=0;i<b_Bajaj.length;i++){
            var chld=document.createElement('option');
            chld.value=b_Bajaj[i];
            chld.innerHTML=b_Bajaj[i];
            model.appendChild(chld); 
        }
    }
    else if(category.value=="bikes" && m_value=="Hero"){
        // console.log(m_value);
        for(var i=0;i<b_Hero.length;i++){
            var chld=document.createElement('option');
            chld.value=b_Hero[i];
            chld.innerHTML=b_Hero[i];
            model.appendChild(chld); 
        }
    }
    else if(category.value=="bikes" && m_value=="Hero Honda"){
        // console.log(m_value);
        for(var i=0;i<b_HHonda.length;i++){
            var chld=document.createElement('option');
            chld.value=b_HHonda[i];
            chld.innerHTML=b_HHonda[i];
            model.appendChild(chld); 
        }
    }
    else if(category.value=="bikes" && m_value=="Honda"){
        // console.log(m_value);
        for(var i=0;i<b_Honda.length;i++){
            var chld=document.createElement('option');
            chld.value=b_Honda[i];
            chld.innerHTML=b_Honda[i];
            model.appendChild(chld); 
        }
    }
    else if(category.value=="bikes" && m_value=="KTM"){
        // console.log(m_value);
        for(var i=0;i<b_KTM.length;i++){
            var chld=document.createElement('option');
            chld.value=b_KTM[i];
            chld.innerHTML=b_KTM[i];
            model.appendChild(chld); 
        }
    }
    else if(category.value=="bikes" && m_value=="Suzuki"){
        // console.log(m_value);
        for(var i=0;i<b_Suzuki.length;i++){
            var chld=document.createElement('option');
            chld.value=b_Suzuki[i];
            chld.innerHTML=b_Suzuki[i];
            model.appendChild(chld); 
        }
    }
    else if(category.value=="bikes" && m_value=="TVS"){
        // console.log(m_value);
        for(var i=0;i<b_TVS.length;i++){
            var chld=document.createElement('option');
            chld.value=b_TVS[i];
            chld.innerHTML=b_TVS[i];
            model.appendChild(chld); 
        }
    }
    else if(category.value=="bikes" && m_value=="Yamaha"){
        // console.log(m_value);
        for(var i=0;i<b_Yamaha.length;i++){
            var chld=document.createElement('option');
            chld.value=b_Yamaha[i];
            chld.innerHTML=b_Yamaha[i];
            model.appendChild(chld); 
        }
    }
    else if(category.value=="bikes" || category.value=="scooters" && m_value=="Others"){
        // console.log(m_value);
        for(var i=0;i<b_Others.length;i++){
            var chld=document.createElement('option');
            chld.value=b_Others[i];
            chld.innerHTML=b_Others[i];
            model.appendChild(chld); 
        }
    }
    else if(category.value=="scooters" && m_value=="Bajaj"){
        // console.log(m_value);
        for(var i=0;i<s_Bajaj.length;i++){
            var chld=document.createElement('option');
            chld.value=s_Bajaj[i];
            chld.innerHTML=s_Bajaj[i];
            model.appendChild(chld); 
        }
    }
    else if(category.value=="scooters" && m_value=="Hero"){
        // console.log(m_value);
        for(var i=0;i<s_Hero.length;i++){
            var chld=document.createElement('option');
            chld.value=s_Hero[i];
            chld.innerHTML=s_Hero[i];
            model.appendChild(chld); 
        }
    }
    else if(category.value=="scooters" && m_value=="Honda"){
        // console.log(m_value);
        for(var i=0;i<s_Honda.length;i++){
            var chld=document.createElement('option');
            chld.value=s_Honda[i];
            chld.innerHTML=s_Honda[i];
            model.appendChild(chld); 
        }
    }
    else if(category.value=="scooters" && m_value=="Mahindra"){
        // console.log(m_value);
        for(var i=0;i<s_Mahindra.length;i++){
            var chld=document.createElement('option');
            chld.value=s_Mahindra[i];
            chld.innerHTML=s_Mahindra[i];
            model.appendChild(chld); 
        }
    }
    else if(category.value=="scooters" && m_value=="Suzuki"){
        // console.log(m_value);
        for(var i=0;i<s_Suzuki.length;i++){
            var chld=document.createElement('option');
            chld.value=s_Suzuki[i];
            chld.innerHTML=s_Suzuki[i];
            model.appendChild(chld); 
        }
    }
    else if(category.value=="scooters" && m_value=="TVS"){
        // console.log(m_value);
        for(var i=0;i<s_TVS.length;i++){
            var chld=document.createElement('option');
            chld.value=s_TVS[i];
            chld.innerHTML=s_TVS[i];
            model.appendChild(chld); 
        }
    }
}

function removeallchild(parent)
{
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
    
}
