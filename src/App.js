import React, { Component } from 'react'
//これを書くことで、reactの外部のライブラリからリアクトを引っ張ってくる
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/blog/:id" component={Blog}/>
    <Route path="/sum/:num1/:num2" component={Sum}/>
    </div>
    </BrowserRouter>
)
//ルーティングをしていきますよと宣言
//num1 num2は数字（階層を示している）

const Home = () => {
  //Homeページの中身
  return (
    <div class="container text-center mt-5">
      <h1>Welcome</h1>

      <p><Link to="/about">About</Link></p>
      //aboutに行けるリンク
    </div>
  )
}

const About = () => {
  return (
    <div class="container text-center mt-5">
      <h1>About</h1>
    </div>
  )
}
//Aboutページの中身

const Blog = props => {
  const { id } = props.match.params

  return (
    <div>
      <p>{ id }番目の記事です</p>
    </div>
  )
}

const Sum = props => {
  const { num1, num2 } = props.match.params

  // propsとパラムスとがマッチしたら

  return (
    <div>
      <p>{ num1 } + { num2 } = {parseInt(num1) + parseInt(num2)}</p>
      <p>難しいよーーー</p>
    </div>
  )
  //parseIntがないと、num1num2が文字列にならない
}

export default App
