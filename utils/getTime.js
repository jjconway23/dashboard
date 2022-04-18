export const getTime =  () => {
    const date = new Date()
    document.getElementById("time").innerText= date.toLocaleString("en-GB",{timeStyle:"short"})        
}
