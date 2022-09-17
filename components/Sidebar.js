import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {HomeIcon} from '@heroicons/react/solid';
import {BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon} from '@heroicons/react/outline';

export default function Sidebar() {
  return (
    <div>
      <div className="">
        <Image width="50" height="50" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"></Image>
      </div>
      {/* menu */}
      <div className="">
        <SidebarMenuItem text="Home" Icon={HomeIcon}/>
        <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
        <SidebarMenuItem text="Notifications" Icon={BellIcon}/>
        <SidebarMenuItem text="Messages" Icon={InboxIcon}/>
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon}/>
        <SidebarMenuItem text="lists" Icon={ClipboardIcon}/>
        <SidebarMenuItem text="Profile" Icon={UserIcon}/>
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon}/>
      </div>
      <button>Tweet</button>

      <div>
        <img src="https://nuelportfolio.netlify.app/static/media/me-about.5cea161175f687029ed3.png" alt="user Image" />
        <div className="">
          <h4>Nuel Akinsiku</h4>
          <p>Frontend Dev</p>
        </div>
      </div>
      <DotsHorizontalIcon />
    </div>
  );
}
