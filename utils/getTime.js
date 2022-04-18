export function getTime(){
    const date = new Date()
    document.getElementById("time").innerText= d.toLocaleString("en-GB",{timeStyle:"short"})        
}