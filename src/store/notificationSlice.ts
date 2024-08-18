import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { NotificationItem } from '@/types'

// Define a type for the slice state
interface NotificationState {
  notificationsList:NotificationItem[]
}

// Define the initial state using that type
const initialState: NotificationState = {
  notificationsList:[
    { 
        text:"Notification first",
        id:"abc123",
        read:false
    },
        { 
            text:"Notification Second",
            id:"abc12355",
            read:false
        },
            {
                 text:"Notification third",
                id:"abc12321312",
                read:true
            }
  ]
}

export const notificationsSlice = createSlice({
  name: 'notifications',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
    markasread:(
        state,action:PayloadAction<string>
    )=>{
        state.notificationsList.forEach((item)=>{
            const targetid=action.payload;
            if(item.id===targetid){
                item.read=true;
            }           
        })  
    }
  },
})  

export const {markasread } = notificationsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectNotifications = (state: RootState) => state.notifications.notificationsList;
export const selectUnreadNotificationsCount = (state:RootState)=>{
    const unreadItem= state.notifications.notificationsList.filter((item)=>{
        return !item.read;
    });
    return unreadItem.length;

}


export default notificationsSlice.reducer