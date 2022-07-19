function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = async (event) => {

    while (true)
    {
        await sleep(1500);
    
        document.getElementById("l").style.color = "#f55353";

        await sleep(1500);

        document.getElementById("l").style.color = "#fff";
    }
};