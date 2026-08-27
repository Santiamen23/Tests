import fizzbuzz from "./fizzbuzz.js"

describe("FizzBuzz",()=>{
  it("deberia imprimir el mismo numero si no sigue la regla",()=>{
    expect(fizzbuzz(2)).toEqual("2");
  })
  it("deberia imprimir otro numero que no sigue la regla",()=>{
    expect(fizzbuzz(2)).toEqual("2");
  })
    it("deberia imprimir el mismo numero si no sigue la regla",()=>{
    expect(fizzbuzz(97)).toEqual("97");
  })
})

