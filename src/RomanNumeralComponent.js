import React, {useState} from 'react';
import React, { useState } from 'react'

export default function RomanNumeralComponent () {
    const [calculatedAnswer, updateAnswer] = useState("Nulla");
    const [input, updateInput] = useState("");
export default function RomanNumeralComponent() {
  const [calculatedAnswer, updateAnswer] = useState('')
  const [input, updateInput] = useState('')

  const addAndConvertToRomanNumerals = (ints) => {
    /* Implement me! */

    const addAndConvertToRomanNumerals = (ints) => {
        /* Implement me! */
        return ints;
    /* checks if input is just zero*/
    if (ints == 0) return 'Nulla'
    /* limit to the length of input */
    if (ints.length > 10) return 'input limit reached'
    let sum = 0
    /* Sums all the elemets in the array*/
    for (let i = 0; i < ints.length; i++) {
      sum += ints[i]
    }
    /*converts sum to its roman equivalent  */
    let roman = converttoroman(sum)
    return roman
  }

    const addNumbers = (inputString) => {
        const numbersStringArray = inputString.split(",");
        const numbers = numbersStringArray.map((numberAsString) => { return parseInt(numberAsString, 10) })
  const converttoroman = (n) => {
    let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let roman = [
      'M',
      'CM',
      'D',
      'CD',
      'C',
      'XC',
      'L',
      'XL',
      'X',
      'IX',
      'V',
      'IV',
      'I',
    ]
    let result = ''
    /* maps all the roman to decimal numbers*/
    for (let i = 0; i <= decimal.length; i++) {
      while (n % decimal[i] < n) {
        result += roman[i]
        n -= decimal[i]
      }
    }
    return result
  }

        /* numbers is an array of ints. E.g. [1, 2, 3] */
        const answer = addAndConvertToRomanNumerals(numbers)
  const addNumbers = (inputString) => {
    const numbersStringArray = inputString.split(',')
    const numbers = numbersStringArray.map((numberAsString) => {
      return parseInt(numberAsString, 10)
    })

        return answer;
    }
    /* numbers is an array of ints. E.g. [1, 2, 3] */
    const answer = addAndConvertToRomanNumerals(numbers)

    const handleChange = (event) => {
        updateInput(event.target.value);
    }
    return answer
  }

    const handleSubmit = (event) => {
        event.preventDefault();
        const answer = addNumbers(input);
        updateAnswer(answer);
    }
  const handleChange = (event) => {
  const financialGoal = event.target.validity.valid
    ? event.target.value
    : alert('Not valid!')
    updateInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const answer = addNumbers(input)
    updateAnswer(answer)
  }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label style={{paddingRight: "10px"}}>
                    <span style={{paddingRight: "10px"}}>Numbers (separated by commas):</span>
                    <input type="text" name="input-form" onChange={handleChange}/>
                </label>
                <input type="submit" value="Add Numbers" />
            </form>
            <div>Answer in Roman Numerals: {calculatedAnswer}</div>
        </div>
    )
} 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='label'>
          <h3>Numbers (separated by commas):</h3>
          <input
            type='text'
            name='input-form'
            pattern='[0-9]*'
            onChange={handleChange}
          />
        </label>
        <button type='submit' className='btn'>
          Submit
        </button>
      </form>
      <p className='reg'>
        Roman Numerals: <h3>{calculatedAnswer}</h3>
      </p>
    </div>
  )
}
