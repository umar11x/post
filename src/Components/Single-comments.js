import React, {useState,useEffect} from 'react'
import { deleteComments } from '../Redux/Action'
import { useDispatch } from 'react-redux'

const SingleComments = (props) => {
  const [comments, setComments]=useState('')
  const {title,id}=props
  const dispatch=useDispatch()
  useEffect(()=>{
    if(title){
      setComments(title)
    }
  },[title])
  const deleteItem=()=>{
    dispatch(deleteComments(id))
  }
  return (
    <div className='comments-item'>
      <div onClick={deleteItem} className='comments-item-delete'>X</div>
      <input type='text' value={comments} onChange={(e)=>setComments(e.target.value)}/>
      <input type='submit' hidden/>
    </div>
  )
}

export default SingleComments