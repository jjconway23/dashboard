let urlCount = 0
async function getBackground(){
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=Wg_AeGIbG1-4lntKf27nJRi3ZzGuNCSPMcfPdNix4Mo&orientation=landscape&query=supercars")
    const data = await response.json()
    console.log(data.urls.full)
    document.body.style.backgroundImage = `url(${data.urls.regular})`

}
getBackground()