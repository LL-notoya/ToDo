import React from 'react';
import TextField from '@material-ui/core/TextField';

const Timer = (props) => {
  const [restTime, setRestTime] = React.useState(null)  

  // useEffectを用いて常にレンダリングされるようにする=> 参考(英語ですけど..): https://upmostly.com/tutorials/settimeout-in-react-components-using-hooks
  React.useEffect(() => {
    if (restTime === null) {
      return; // 初期状態(null)では何も処理をしない
    }

    setTimeout(() => {      
      // タイマーが0になったら初期状態(null)に戻し、alertを呼び出す、それ以外のときは同じ関数を再び呼び出す
      if (restTime === 0) {
        setRestTime(null)
        return alert('終了です！お疲れ様でした！')
      } else {
        setRestTime(restTime - 1) // １秒経ったらrestTimeを１減らす
        console.log(restTime) // デバッグ用
      } 
    }, 1000)
  })

  const initRestTime = () => {
    const inputtedTime = document.getElementById(`time${props.id}`).value
    const [hours, minutes, seconds] = inputtedTime.split(':').map(time => Number(time)) // 少し難しい構文ですが、格段に短いコードでかけます。わからなければsplit,配列分割代入で調べましょう 

    // 秒数に変換
    const allSeconds = hours*60*60 + minutes*60 + seconds
    setRestTime(allSeconds)
  }

  const displayCount = () => {
    {/* material-uiにも使えそうなuiがあったが(↓)、「時:分」の設定のみだったのでtypeをtextにして無理やり実装する */}
    {/* https://material-ui.com/components/pickers/#time-pickers */}

    if (restTime === null) { // timerが入力されていない時の表示
      return (
        <>
          <TextField
            id={`time${props.id}`} // idは一意である必要があるのでidを使って区別
            type="text"
            defaultValue="00:00:00"
          />
          <button type="button" onClick={initRestTime}>Start</button>
        </>
      )
    } else { // timerが入力後の表示
      // 時間の変換=>参考: https://qiita.com/shingorow/items/62eae5a87c85d1bcd0d2
      const seconds = (restTime % 60) % 60;
      const minutes = Math.floor(restTime / 60) % 60;
      const hours = Math.floor(restTime / 3600);
      
      return <p>{`${hours}:${minutes}:${seconds}`}</p>
    }
  }

  return (
    <form noValidate>
      {displayCount()} 
    </form>
  )
}

export default Timer