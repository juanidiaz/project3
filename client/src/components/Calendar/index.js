import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import '../../node_modules/fullcalendar/dist/fullcalendar.css'

import './index.css'

function calendar(props){
    return (
      <FullCalendar
      theme="bootstrap3"
      default-view="month"
      plugins={[ dayGridPlugin ]}
      events={props.events}

      />
    )
  }

export default calendar