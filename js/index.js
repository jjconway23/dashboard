import {getTime} from "../utils/getTime.js"

async function getBackground(){
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=Wg_AeGIbG1-4lntKf27nJRi3ZzGuNCSPMcfPdNix4Mo&orientation=landscape&query=supercars")
    if(!response.ok){
        throw Error("Something went wrong!")
    }
    try{
        const data = await response.json()
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById("author").innerText = 
            `
                By: ${data.user.name}
            `
    }
    catch(error){
        console.error(error)
        // document.body.style.backgroundImage = 
    }
    
}
getBackground()
setInterval(getTime,1000)
