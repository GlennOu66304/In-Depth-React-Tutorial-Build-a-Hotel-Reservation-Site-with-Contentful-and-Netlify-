import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'
import {RoomConsumer} from '../context'

export default function RoomContainer() {
    return (
        <div>
            Hello Froms Rooms Container
            <RoomsFilter/>
            <RoomsList/>
        </div>
    )
}
