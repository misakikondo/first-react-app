import React, { Component } from 'react'
//これを書くことで、reactの外部のライブラリからリアクトを引っ張ってくる
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    </div>
    </BrowserRouter>
)
//ルーティングをしていきますよと宣言
//スラッシュはHomeページ

const Home = () => {
  //Homeページの中身
  return (
    <div class="container text-center mt-5">
      <h1>Welcome</h1>
    </div>
  )
}

const About = () => {
  //Aboutページの中身
  return (
    <div class="container text-center mt-5">
      <h1>About</h1>
    </div>
  )
}

export default App
