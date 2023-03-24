import React, { useState } from 'react'
import Card from '../ui/card/Card'
import Panel from './Panel'

function PanelList() {

    const [currentOpenPanelIndex, setCurrentOpenPanelIndex] = useState(0)

  return (
    <Card>
        <Panel title='Html' opentCurrentPanel={() => setCurrentOpenPanelIndex(1)} showText={currentOpenPanelIndex === 1}>Htmml is the structure of the web</Panel>
        <Panel title='Css' opentCurrentPanel={() => setCurrentOpenPanelIndex(2)} showText={currentOpenPanelIndex === 2}>Css is the design, and how it looks</Panel>
        <Panel opentCurrentPanel={() => setCurrentOpenPanelIndex(3)} showText={currentOpenPanelIndex === 3}></Panel>
    </Card>
  )
}

export default PanelList