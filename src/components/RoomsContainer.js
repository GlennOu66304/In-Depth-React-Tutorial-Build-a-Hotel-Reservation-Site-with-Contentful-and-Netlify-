import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'
import {RoomConsumer} from '../context'

export default function RoomsContainer() {
    return (
        <div>
            Hello Froms Rooms Container
            <RoomsFilter/>
            <RoomsList/>
        </div>
    )
}
