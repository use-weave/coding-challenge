import React from 'react'

const Form = ({handleSubmit}) => {
  return(
    <React.Fragment>
      <form onSubmit={e=>handleSubmit(e)}>
        <label>
          Put words here!
          <input type='text'/>
        </label>
        <input type="submit" value="Do Words"/>
      </form>
    </React.Fragment>
  )
}

export default Form