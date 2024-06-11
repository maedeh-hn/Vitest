import {it,expect} from 'vitest'
import {transformToNumber} from "./numbers"

it ("should transform a string number to number with type number",()=>{
    const input ="1"
    const result =transformToNumber(input)
    expect(result).toBeTypeOf("number")
})

it ("should yield NAN for non-transformabled values",()=>{
    const input ="invalid"
    const result =transformToNumber(input)
    expect(result).toBeNaN
})