const myName = "eafedesis";
const myAddres = "jalann cinta karya no 9"
let i = 0;

function getDetailHuman(data1, data2) {
    i = i + 1;
  console.log (`ini adalah data1: ${data1} dan ini adalah data2: ${data2}`);
  console.log(`function dipanggil sebanyak ${i} kali`);
}


getDetailHuman(myName,myAddres);