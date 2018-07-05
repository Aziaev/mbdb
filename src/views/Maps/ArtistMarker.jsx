import * as React from "react"
import './ArtistMarker.css'

const DEFAULT_PERFORMER_URL = 'images/artist.png'

export const PerformerMarker = ({performer, onClick}) =>
  <div onClick={() => onClick(performer)}>
    <div className='pin'>
      <img src={performer.icon_url || DEFAULT_PERFORMER_URL} alt={performer.id}/>
    </div>
    <div className='pulse'/>
  </div>
