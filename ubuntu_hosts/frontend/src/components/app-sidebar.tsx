import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "./ui/sidebar"
import { ChevronDown, Plus } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./ui/collapsible"
import { Separator } from "./ui/separator"
import {Link} from "react-router-dom"

const Events = [
  {
    name: "Event One",
    url: "/event-one",
    icon: () => <Plus />,
  },
  {
    name: "Event Two",
    url: "/event-two",
    icon: () => <Plus />,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>


      {/* Sidebar Header */}
       <SidebarHeader>
    <SidebarMenu>
      <SidebarMenuItem>
        <div style={{display:'flex',justifyContent:"left",gap:'10px'}}>
        <Avatar>
         <AvatarImage src="https://github.com/shadcn.png" />
         <AvatarFallback>CN</AvatarFallback>
         </Avatar>
         <div style={{display:'block',flexDirection:'row'}}>
          <Badge variant="ghost">Rayan Ali</Badge><div></div> 
          <Badge variant="outline">Premium</Badge>
          </div>
          </div>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarHeader>


<Separator />



  {/* Sidebar Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Create an Event</SidebarGroupLabel>
          <Link to="/view-dashboard">Dashboard</Link>
          <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent></SidebarGroupContent>
        </SidebarGroup> 

        
       <Collapsible defaultOpen className="group/collapsible">
  <SidebarGroup>
    <SidebarGroupLabel asChild>
      <CollapsibleTrigger>
        Help
        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
      </CollapsibleTrigger>
    </SidebarGroupLabel>
    <CollapsibleContent>
      <SidebarGroupContent />
    </CollapsibleContent>
  </SidebarGroup>
</Collapsible>


<SidebarMenu>
  {Events.map((event) => (
    <SidebarMenuItem key={event.name}>
      <SidebarMenuButton asChild>
        <a href={event.url}>
          <event.icon />
          <span>{event.name}</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  ))}
</SidebarMenu>

      </SidebarContent>



 {/* // Sidebar Footer */}
  <SidebarFooter>
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton style={{ display:'flex',justifyContent:'right' }} >
         <Button variant="destructive">
           Logout
         </Button>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarFooter>
  </Sidebar>
  )
}