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
  it("deberia imprimir otro numero que no sigue la regla",()=>{
    expect(fizzbuzz(8)).toEqual("8");
  })
  it("deberia imprimir Fizz",()=>{
    expect(fizzbuzz(33)).toEqual("Fizz");
  })
  it("deberia imprimir Fizz",()=>{
    expect(fizzbuzz(6)).toEqual("Fizz");
  })
  it("deberia imprimir Buzz",()=>{
    expect(fizzbuzz(10)).toEqual("Buzz");
  })
    it("deberia imprimir FizzBuzz",()=>{
    expect(fizzbuzz(45)).toEqual("FizzBuzz");
  })
})

