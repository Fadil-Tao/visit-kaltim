import { createContext } from "react";
//  variable global apakah video pause apa gak melalui hover (gak dipake)
export const VideoPausedByHoverContext = createContext(false);
//  variable global apakah video pause apa gak melalaui tombol pause yang ada di komponen toggle video
export const VideoPausedByToggleContext = createContext(false);
// variabel global untuk navigasi video kiri dan kanan
export const videoNavigationContext = createContext(0);
// variabel global untuk video mute dan unmute
export const VideoMutedbyToggleContext = createContext(false);
