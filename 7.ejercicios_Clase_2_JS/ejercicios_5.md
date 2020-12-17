
- Ejercicio 1: (Estamos haciendo un test driven development, TDD.Escribe un acadena de if/else

```js
//ej 1 (Estamos haciendo un test driven development, TDD )
//Escribe un acadena de if/else

num < 5 return "Tiny"
num < 10 return "Small"
num < 15 return "Medium"
num < 20 return "Large"
num >= 5 return "Huge"

function testSize(num) {
  return "Change me"
}

console.assert(testSize(4) === "Tiny");

```
- Ejercicio 2: Convierte la logica para usar estamentos else if

```js

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } if (val < 5) {
    return "Smaller than 5";
  }
    return "Between 5 and 10";
  }

console.assert(testElseIf(7) === "Between 5 and 10");
```

- Ejercicio 3: Cambia el orden logico para que salga
```js
 function orderMyLogic(val) {
   if (val < 10) {
     return "Less than 10";
   } else if (vale < 5) {
     return "Less than 5";
   } else {
     return "Greather than or equal to 10";
   }
 }
 orderMyLogic(7);
 ```

 - Ejercicio 4: Escribe un estamento switch() que testee val y establezca answer con las siguientes condiciones
 ```js
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"

function caseInSwitch(val) {
  let answer = "";

  return answer
}
```

- Ejercicio 5: Escribe un estamento switch() que teste val y establezca answer con las siguientes condiciones:

```js
 1-3 "Low"
 4-6 "Mid"
 7-9 "High"
 function sequentialSizes(val) {
   let answer = "";

   retur answer;

 }

 sequentialSizes(1)
```