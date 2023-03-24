import React, { useState } from 'react'
import Card from '../ui/card/Card'
import Panel from './Panel'

// sukti cikla per gauta masyva ir generuoti Panels

function PanelList(props) {

    const [panelsArr, setPanelsArr] = useState([...props.list])

    function togglePanel(idToToggle) {
        console.log('idToToggle ===', idToToggle);
        // sukti map per panelsArr 
        // ieskoti el su id lygiu idToToggle
        // suradus grazinti jo kopija su priesinga isExpanded verte
        // jei id yra ne tas kurio ieskome(else atvejis) tai grazinam kopija kurioje isExpanded nustatome i false
    }

  return (
    <Card>
        {panelsArr.map((pObj) => 
        <Panel 
        key={pObj.id}
        title={pObj.title} 
        openCurrentPanel={() => togglePanel(pObj.id)} showText={pObj.isExpanded}
        >
            {pObj.content}
            </Panel>
        )}
        
    </Card>
  )
}

export default PanelList