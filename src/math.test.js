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