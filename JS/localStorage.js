window.onload = checkLocalStorageData

function saveOnLocalStorage() {
    localStorage.setItem('name', varName)
    localStorage.setItem('email', varEmail)
    localStorage.setItem('password', varPass)
    localStorage.setItem('age', varAge)
    localStorage.setItem('phoneNumber', varPhone)
    localStorage.setItem('address', varAdress)
    localStorage.setItem('city', varCity)
    localStorage.setItem('postalCode', varZipCode)
    localStorage.setItem('id', varDocNum)
}

function checkLocalStorageData() {
    var localStorageName = localStorage.getItem('name')
    var localStorageEmail = localStorage.getItem('email')
    var localStoragePass = localStorage.getItem('password')
    var localStorageAge = localStorage.getItem('age')
    var localStoragePhone = localStorage.getItem('phoneNumber')
    var localStorageAdress = localStorage.getItem('address')
    var localStorageCity = localStorage.getItem('city')
    var localStorageZipCode = localStorage.getItem('postalCode')
    var localStorageId = localStorage.getItem('id')

    document.querySelector('#fname').value = localStorageName
    document.querySelector('#email').value = localStorageEmail
    document.querySelector('#password').value = localStoragePass
    document.querySelector('#edad').value = localStorageAge
    document.querySelector('#telefono').value = localStoragePhone
    document.querySelector('#direccion').value = localStorageAdress
    document.querySelector('#ciudad').value = localStorageCity
    document.querySelector('#cp').value = localStorageZipCode
    document.querySelector('#dni').value = localStorageId

}





