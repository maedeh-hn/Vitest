import {it,expect} from 'vitest'
import {add} from './math'

it ('should summariza all number values in an array',()=>{

    //Arrange
    const number=[1,2,3]

    //Act
    const result=add(number)

    //Assert
    const expectedREsult=number.reduce(
        (prevValue,curValue)=>prevValue+curValue,0
    )
    expect(result).toBe(expectedREsult)
})
it("should yield NAN if at least one invalid number is provided",()=>{
    const number=[1,"test"]
    const result=add(number)
    expect(result).toBeNaN()
})

it("should yield correct sum if an array of numeric string values provided",()=>{
    const number=["1","2"]
    const result=add(number)

    const expectedREsult=number.reduce(
        (prevValue,curValue)=>prevValue+ +curValue,0
    )
    expect(result).toBe(expectedREsult)
})

it("should yield 0 if an empty array was provided",()=>{
    const number=[]
    const result=add(number)

    expect(result).toBe(0)
})

it("should throw an error if no values pass into the function",()=>{  
//     try{
//         const result=add()
        
//   }catch(error){
// expect(error).toBeDefined()
//   }

const resultFn=()=>{
    add()
}

expect (resultFn).toThrow()
})



it("should throw an error if provided with multiple argument instead of an array",()=>{  
   const num1=1
   const num2=2
    const resultFn=()=>{
        add(num1,num2)
    }
    
    expect (resultFn).toThrow()
    })