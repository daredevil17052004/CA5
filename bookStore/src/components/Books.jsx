import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './styles.module.css'
import { Routes,Route, Link } from 'react-router-dom'
import Form from './Form'

const Books = () => {

  let [books,setBooks] = useState([])
  let [searchT, setSearchT] = useState('');

  useEffect(()=>{
    async function getBooks(){
      try{
        const res = await axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'Book-Store' } })
        console.log(res);
        setBooks(res.data.books)
        console.log(books);
      }catch(error){
        console.log(error);
      }
    }
    getBooks();
  },[])

  const searchBook = books.filter((item) =>
    item.title.toLowerCase().includes(searchT.toLowerCase())
  );




  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.logo}>
          Kalvium <span className={styles.sp}>Books</span>
        </div>
        <div className={styles.search}>
          <input type="text" 
          placeholder='Search by Title'
          value={searchT}
          onChange={(e)=> setSearchT(e.target.value)}/>
        </div>
        <div className={styles.register}>
          <Link to='/form'><button>Register</button></Link>
        </div>
      </div>      
      <div className={styles.books}>
        {
          searchBook.map((item,index)=>{
            return(
              <div key={index} className={styles.b}>
                <div className={styles.images}>
                  <img src={item.imageLinks.smallThumbnail} alt="" />
                </div>
                <div>
                  {item.title}
                </div>
                <div>
                  <pre>{item.averageRating} ⭐         Free</pre>
                </div>
              </div>
            )
          })
        }
      </div>


    </div>
    

  )
}

export default Books