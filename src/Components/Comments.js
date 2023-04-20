import React from 'react'

const Comments = () => {
  return (
    <div className='card-comments'>
      <form>
        <div className='comments-item'>
          <input type='text' placeholder='comment'/>
          <input type='submit' hidden/>
        </div>
      </form>
    </div>
  )
}

export default Comments
