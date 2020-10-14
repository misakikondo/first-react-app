import React from 'react';
import './App.css';

function App() {
  return(
    <div className="container text-center">
      <Clock />
    </div>
  )
}

class Clock extends React.Component {
  constructor(props){ 
  // Clockが定義された時に呼びだされる
    super(props);
    // superクラスでコンポーネントを初期化
    this.now = new Date();
    // プロパティーに今の時刻を入れていきます

    this.state = { 
    // stateに入れたものはreactが監視しているもの
      time: `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`
    // 今の時刻
    }

    this.refresh = this.refresh.bind(this);
    // stateを使うためにはconstructorの中にこの記述が必要
  }
  
  refresh(){ 
    // クリックが押された時に起こる変化が以下
    this.now = new Date();
    // 今の時刻を取得している

    this.setState((state) => ({
      time: `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`
    // 画面に変化を起こしたい時にsetStateを使い、勝手に書き換えてくれる
    }));
  }

  render(){
    return <p onClick={this.refresh}>{this.state.time}</p>
    // jsx内にイベントを定義、refreshを割り当てる（もう一度今の時刻を表示する）
  }
}

export default App;
