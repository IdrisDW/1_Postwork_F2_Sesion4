
//funcion 1

function deepEqual(a, b) {
  if (typeof a === "object" && typeof b === "object") {
    if (Object.keys(a).length === Object.keys(b).length) {
      for (let keys in a) {
        equal = deepEqual(a[keys], b[keys]);
        if (equal == false) break;
      }
    } else {
      equal = false;
    }
  } else {
    equal = a === b ? true : false;
  }

  return equal;
}

let john = {
    firstName: "John",
    lastName: "Doe",
  };
  
  console.log("Test 1:", deepEqual(1, 1)); // true
  console.log("Test 2:", deepEqual(1, "1")); // false
  console.log("Test 3:", deepEqual(john, john)); // true
  console.log("Test 4:", deepEqual(john, { firstName: "John", lastName: "Doe" })); // true
  console.log("Test 5:", deepEqual(john, { firstName: "John" })); // false

// funcion 2
function chunk(array, size) {
  let temp = [];
  for (let i = 0; i < array.length; i = i + size) {
    let item = array.slice(i, i + size);
    temp.push(item);
  }
  return temp;
}

const data = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("Test 1:", chunk(data, 1)); // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log("Test 2:", chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log("Test 3:", chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]


function replaceAll(str, find, replace) {
    var escapedFind = find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    return str.replace(new RegExp(escapedFind, 'g'), replace);
}

//funcion 3

function frequency(cadena) {
    let cuenta = {};
    let conteo = [];
    let recurrencias = 1;
    for (caracter = 0; caracter < cadena.length; caracter++) {
        conteo.push(cadena[caracter]);
        for (analisis = caracter + 1; analisis < cadena.length; analisis++) {
            if (cadena[caracter] == cadena[analisis]) {
                recurrencias = recurrencias + 1;
            }

        }
        conteo.push(recurrencias);
        recurrencias = 1;
        cadena = replaceAll(cadena, cadena[caracter], '');
        caracter = -1
    }
    for (insertar = 0; insertar < conteo.length - 1; insertar++){
        Object.defineProperty(cuenta, conteo[insertar], { value: conteo[insertar + 1], writable: true });
        insertar++;
    }
    return(cuenta);
}


console.log('Test 1: ', frequency('cccbbbaaa'));
   // {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org'))

   // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com'))
   // {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}