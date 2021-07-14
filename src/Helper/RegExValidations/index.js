const mobileNumberRegEx = /^\d{10}$/;
const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const MobileNumberValidator = (mobile_number) => {
    return mobileNumberRegEx.test(mobile_number)
}

export const EmailValidator = (email) => {
    return emailRegEx.test(email)
}