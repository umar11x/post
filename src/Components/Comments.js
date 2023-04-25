import React , {useState, useEffect, useCallback} from 'react'
import uniqid from "uniqid"
import { useSelector, useDispatch } from 'react-redux';
import { addComments,getPostComment,} from '../Redux/Action';
import SingleComments from './Single-comments';
import { getPost } from '../Services/Services';
import {showLoading,hideLoading,showError,clearError} from '../Redux/Action'
import { deleteComments } from '../Redux/Action';
import Loading from "./Loading"
 
const Comments = () => {
  const dispatch=useDispatch()
  const {comments, loading,error}=useSelector(state=>state.CommentReducer)
  const [input , setInput]=useState('')
  const hundleSubmit=(e)=>{
    e.preventDefault()
    const id=uniqid()
    
    dispatch(addComments(input,id))
    setInput("")
    dispatch(deleteComments(input,id))
    setInput("")
   }
   const loadPost=useCallback(async()=>{
    dispatch(showLoading())
    dispatch(clearError())
    try{
      const data=await getPost()
      console.log("data>>>", data)
      dispatch(getPostComment(data.data))
    }catch(error){
      dispatch(showError("что то пошло не так"))
    }finally{
      dispatch(hideLoading())
    }
   }, [])
   useEffect(()=>{
    loadPost()
   },[])

   if(loading){
    return <Loading/>
   }
   if(error){
    return(
      <div>
        <p>{error}</p>
        <button onClick={loadPost}>повторить</button>
      </div>
    )
   }

  return (
    <div className='card-comments'>
      <form onSubmit={hundleSubmit}>
        <div className='comments-item'>
          <input value={input} onChange={(e)=>setInput(e.target.value)} type='text' placeholder='comment'/>
          <input type='submit' hidden/>
        </div>
      </form>
      {
        comments.map((elem)=>{
          return <SingleComments key={elem.id} {...elem}/>
        })
      }
    </div>
  )
}

export default Comments
