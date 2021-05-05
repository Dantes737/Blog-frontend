export const required = (value) => {
    if (value) {
        return undefined;
    }
    return "Field is required !"
};

export const maxLenghtCreator = (maxLenght) => (value) => {
    if (value && value.length > maxLenght) {
        return `Max lenght is ${maxLenght} symbols`
    }
    return undefined;
};

export const validatePassword = (password) => {
    var regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (regEx.test(password)) {
        return undefined;
    }
    return "Not valid password. Should contain at least one digit,one lower case,one upper case, at least 8 from the mentioned characters!"
};
