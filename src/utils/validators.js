export const required=(value)=>{
if (value) {
    return undefined;
}
return "Field is required !"
};

export const maxLenghtCreator=(maxLenght)=>(value)=>{
    if (value&&value.length>maxLenght) {
        return `Max lenght is ${maxLenght} symbols`
    }
    return undefined;
};

// export const minLenght10=(value)=>{
//     if (value&&value.length<10) {
//         return "Min lenght is 10 symbols"
//     }
//     return undefined;
// }

