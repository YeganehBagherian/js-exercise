const data1 ={
    name: "john",
    age: 26,
    address: {
        country: "canada",
        city: "vancouver",
        street: "123 main street",
    },
};
const data2 = {
    age: 28,
    address: {
        city: "Toronto",
        province: "Ontario",
    },
};
const personData= {
    ...data1,
    ...data2,
    address:{
        ...data1.address,
        ...data2.address,
    },
};
console.log(personData);
