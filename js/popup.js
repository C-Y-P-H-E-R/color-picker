const pickColorBtn = document.querySelector('.pickColorButton')
const colorBox = document.getElementById('colorBox')
const colorHex = document.getElementById('colorHex')

pickColorBtn.addEventListener('click', async () => {
    chrome.storage.sync.get('greet', ({ greet }) => {
        console.log( greet ) 
    })
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    
    await chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: pickColorFn
    }, async (injectionResult) => {
        const [data] = injectionResult;
        const selectedColor = data.result.sRGBHex
        
        colorBox.style.backgroundColor = selectedColor
        colorHex.innerHTML = selectedColor
    }) 
}) 

async function pickColorFn() {
    try {
        const picker = new EyeDropper()
        return selectedColorWrapper = await picker.open();
    } catch(err) {
        console.error(err);
    }
}   