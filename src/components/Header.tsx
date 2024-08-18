import { NotificationButton } from "./NotificationsButton";

export const Header=()=>{
    return (
        <header className="px-2 py-1.5 flex h-12 items-center bg-slate-900 justify-between">
         <span>Redux Notification</span>
         <NotificationButton/>   
        </header>
    );
}