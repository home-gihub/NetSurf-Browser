BV = document.getElementById("BV")
function bvgb() {BV.goBack()}
function bvgf() {BV.goForward()}
function bvre() {BV.reload()}
function bvgh() {BV.loadURL("https://www.google.com")}
function bvlu() {BV.loadURL(`${document.getElementById("URLBar").value}`)}
function bvgt() {document.getElementById("wt").innerHTML =  `NetSurf - ${BV.getTitle()} `; document.getElementById("URLBar").value = BV.getURL()}
function bvlt() {document.getElementById("wt").innerHTML =  `NetSurf - Loading Webpage... `}
document.getElementById("navbb").addEventListener("click", bvgb)
document.getElementById("navfb").addEventListener("click", bvgf)
document.getElementById("navrb").addEventListener("click", bvre)
document.getElementById("navhb").addEventListener("click", bvgh)
document.getElementById("navlu").addEventListener("click", bvlu)
BV.addEventListener("did-stop-loading", bvgt)
BV.addEventListener("did-start-loading", bvlt)