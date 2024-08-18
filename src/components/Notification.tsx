import { NotificationItem } from "@/types";
import { Button } from "./ui/button";
import { Circle } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { markasread, selectNotifications } from "@/store/notificationSlice";

export const Notification=()=>{
    const notification:NotificationItem[] =useAppSelector(
        selectNotifications
    );

    const dispatch =useAppDispatch();
    return (
   <div className="max-w-lg mx-auto">
    <ul className="flex flex-col gap-4 my-10">
       {notification.map((item)=>{
        return <li key={item.id} className="flex px-3 py-2 justify-between items-center border rounded-md border-white">
            <div className="flex flex-col">
                <h3>{item.text}</h3>
            </div>
           
            <Button onClick={()=>{
                dispatch(markasread(item.id))
            }} className={item.read? "invisible" : "visible"} variant="outline" size="icon">
            <Circle />
      </Button>
        </li>
       })}
    </ul>
   </div>
    );
}