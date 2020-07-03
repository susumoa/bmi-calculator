import React from 'react'

const BmiInput = () => {
  return (
    <div>
      <h1>Daily measurements</h1>
      <form>
        <input required type='date' value={date} onChange={onChange} name='date' />
        <br />
        <br />
        <input required type='number' min='0' placeholder='height' value={height} onChange={onChange} name='height' />
        <span>cm</span>
        <br />
        <br />
        <input required type='number' min='0' placeholder='weight' value={weight} onChange={onChange} name='weight' />
        <span>kg</span>
        <br />
        <br />
        <button onClick={calculateBmi}>Calculate</button>
      </form>
    </div>
  )
}

export default BmiInput