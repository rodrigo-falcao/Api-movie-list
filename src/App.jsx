import React, { useState } from "react"
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "../src/pages/Home/Home"
import MovieDetail from "../src/pages/MovieDetail/MovieDetail"

function App() {
  const [searchValue, setSearchValue] = useState("")
  //UseState para fazer o valor vazio para o novo valor passado pelo
  //onSubmit do Header (searchValue)

  return (
    <>
      <h1 style={{backgroundColor: "#303030"}}>
        <Header onSubmit={(inputValue) => setSearchValue(inputValue)}/>
        <Routes>
          <Route path="/" element={<Home searchValueProp={searchValue}/>}/>
          {/* Passou o searchValue (Header.jsx) para a (Home.jsx) através do searchValueProp */}
          <Route path="/movie/:id" element={<MovieDetail/>}/>
        </Routes>
      </h1>
    </>
  )
}

export default App
