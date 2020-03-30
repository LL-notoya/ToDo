import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useForm } from 'react-hook-form'

const Timer = () => {
  const [restTime, setRestTime] = React.useState(null)
  const [usedTimer, setUsedTimer] = React.useState(false)
  const { register, errors, handleSubmit } = useForm()

  React.useEffect(() => {
    if (restTime === null) {
      return
    }
    setTimeout(() => {
      //1秒後にif文を起動
      if (restTime === 1) {
        //カウントが1になったら(0の重複防止)
        setRestTime(null)
        setUsedTimer(true)
        return
      } else if (restTime === 0) {
        setRestTime(null)
        setUsedTimer(true)
        return
      } else {
        setRestTime(restTime - 1) //カウントが始まったらrestTimeが1減る
        console.log(restTime)
      }
    }, 1000)
  })

  const initRestTime = value => {
    const inputtedTime = value.timer
    console.log('実行')

    const [hours, minutes, seconds] = inputtedTime
      .split(':')
      .map(time => Number(time)) //number関数

    //秒数に変換
    const allSeconds = hours * 60 * 60 + minutes * 60 + seconds
    return setRestTime(allSeconds)
  }

  const displayCount = () => {
    if (restTime === null && !usedTimer) {
      //Timer 入力されてない状態かつ一度もタイマーが入力されてない場合
      return (
        //Timer 入力状態
        <form
          style={{ display: 'flex', marginTop: 7 }}
          onSubmit={handleSubmit(initRestTime)}
        >
          <div style={{ height: 50 }}>
            <TextField
              type="text"
              name="timer"
              defaultValue=""
              placeholder="00:00:00"
              style={{ display: usedTimer ? 'none' : 'block', paddingLeft: 15 }}
              inputRef={register({
                //material-uiを使用する場合はref→inputRefを指定
                required: '1文字以上で入力してください。',
                maxLength: {
                  value: 8,
                  message: '8文字以下で入力してください。'
                },
                pattern: {
                  value: /^[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}/,
                  message: '半角数字と[:]で入力してください。'
                }
              })}
            />
            {errors.timer && (
              <span
                style={{
                  color: 'red',
                  fontSize: 1,
                  position: 'relative',
                  bottom: 15
                }}
              >
                {errors.timer.message}
              </span>
            )}
          </div>
          <Button
            type="submit"
            variant="contained"
            style={{ display: usedTimer ? 'none' : 'block' }}
          >
            START
          </Button>
        </form>
      )
    } else if (usedTimer) {
      //0:0:0になったら(true)
      return (
        <p style={{ color: 'red', fontSize: 45, lineHeight: '1.2em' }}>
          00:00:00
        </p>
      )
    } else {
      //Timer 入力後
      const seconds = (restTime % 60) % 60
      const minutes = Math.floor(restTime / 60) % 60
      const hours = Math.floor(restTime / 3600)

      return (
        <p
          style={{ fontSize: 45, lineHeight: '1.2em' }}
        >{`${hours}:${minutes}:${seconds}`}</p>
      )
    }
  }

  return displayCount()
}

export default Timer
