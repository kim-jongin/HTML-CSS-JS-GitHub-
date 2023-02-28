// section
const loadingSection = document.querySelector(".cont-result-loading")
const resultSection = document.querySelector(".cont-result")
const modalSection = document.querySelector("#modal")

// button
const startButton = document.querySelector(".btn-exc")
const openButton = document.querySelector(".btn-go")
const closeButton = document.querySelector(".btn-close")
const shareButton = document.querySelector(".btn-share")

function calculate(){
    const fieldValue = document.querySelector("#inp-field")
    const timeValue = document.querySelector("#inp-time")
    console.log(typeof(timeValue.value))

    if (fieldValue.value === ""){
        alert("비정상 접근입니다.")
        return
    } else if (timeValue.value === ""){
        alert("비정상 접근입니다.")
        return
    } else if (timeValue.value >= 24){
        alert("하루는 24시간입니다.")
        return
    } else if (timeValue.value >= 12){
        alert("우리의 육체는 로봇이 아닙니다.")
        return
    }

    loadingSection.style.display = "block";

    setTimeout(function(){
        const fieldResult = document.querySelector(".field-result")
        const timeResult = document.querySelector(".time-result")

        loadingSection.style.display = "none";
        resultSection.style.display = "block";

        fieldResult.innerText = fieldValue.value
        timeResult.innerText = 10000/parseInt(timeValue.value)
    }, 2000)
}

function openModal(){
    // console.log('2')
    modalSection.style.display = "flex"
}

function closeModal(){
    // console.log('3')
    modalSection.style.display = "none"
}

function copyUrl(){
    let url = window.location.href
    navigator.clipboard.writeText(url)
        .then(()=>{
            alert('URL이 복사되었습니다.')
        })
        .catch(err=>{
            alert('URL이 복사되지 않았습니다. 호환되는 브라우저가 아닙니다.')
            console.log(err)
        })
    }

startButton.addEventListener("click", calculate)
openButton.addEventListener("click", openModal)
closeButton.addEventListener("click", closeModal)
shareButton.addEventListener("click", copyUrl)

window.onclick = function (event) {
    if(event.target == modalSection){
        closeModal()
    }
}