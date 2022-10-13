// const submitForm = (e) => {
//     e.preventDefault()
//     validate(e)
// }

// const validate = (e) => {
//     let target

//     switch(e.type) {
//         case "submit":
//             break;
        
//         case "keyup":
//             target = e.target
//             break;
//     }
// }

const checkLength = (element, minLength = 2, message) => {
    
    if(message === undefined)
        message = `Your ${element.target.id} must contain at least ${minLength} characters`

    if(element.target.value.length < minLength) {
        document.getElementById(element.target.id).classList.add('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = message
    } else {
        document.getElementById(element.target.id).classList.remove('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = ''
    }
}

const checkEmail = (element, message) => {
    if(message === undefined)
        message = `Your ${element.target.id} must be a valid E-mail`

    if (!element.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        document.getElementById(element.target.id).classList.add('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = message
    } else {
        document.getElementById(element.target.id).classList.remove('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = ''
    }
}



const validate = (e) => {
    switch(e.target.type) {
        case "text":
            checkLength(e)
            break;
        case "email":
            checkEmail(e)
            break;
        case "textarea":
            checkLength(e, 5)
            break;
    }
}
