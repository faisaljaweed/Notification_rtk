import { Bell,} from "lucide-react";
import { Button } from "./ui/button";
import { useAppSelector } from "@/store/hooks";
import { selectUnreadNotificationsCount } from "@/store/notificationSlice";

export const NotificationButton = ( ) => {
  const count =useAppSelector(
    selectUnreadNotificationsCount
  );
    return(
        <Button className="relative" variant="outline" size="icon">
        <Bell className="w-4 h-4"/>
        <span className="absolute top-0 right-0 text-xs">{count}</span>
      </Button>
    );
    
}