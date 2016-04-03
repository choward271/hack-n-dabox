function calculate(){
    var type =[];
    var newline="";
    
    if( document.getElementById("coding").checked==true){
        type.push("<br>User interface for visually impaired");
    }
    if( document.getElementById("biology").checked==true){
        type.push("<br>Wildlife/Livestock monitoring");
    }
    if( document.getElementById("stats").checked==true){
        type.push("<br>Traffic prediction");
    }
    if( document.getElementById("mech-eng").checked==true){
        type.push("<br>Crash prevention");
    }
    if( document.getElementById("3d-print").checked==true){
        type.push("<br>3D wig printer");
    }
    if( document.getElementById("biomed").checked==true){
        type.push("<br>Means to prevent elderly people from having to get up and urinate in the middle of the night.");
    }
    
    document.getElementById("results-textbox").innerHTML = type+newline+"";
}