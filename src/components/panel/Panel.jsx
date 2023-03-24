
import { useState } from 'react'
import Card from '../ui/card/Card'

function Panel(props) {
    // const [showText, setShowText] = useState(false)

    function openPanel() {
        // setShowText(!showText)
        props.openCurrentPanel()
    }
  return (
    <Card>
        <h3 style={{fontSize: '1.8rem'}} onClick={openPanel}>title</h3>
        <button onClick={openPanel}>show</button>
        {props.showText && (
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt eius esse numquam, delectus deleniti natus?</p>
        )}
    </Card>
  )
}

export default Panel