import App from "./app";
import google from "../assets/appIcons/google.png";
import playStore from "../assets/appIcons/playStore.png";
import gmail from "../assets/appIcons/gmail.png";
import photos from "../assets/appIcons/photos.png";
import youtube from "../assets/appIcons/youtube.png";
import outlook from "../assets/appIcons/outlook.png";
import linkedIn from "../assets/appIcons/linkedIn.png";
import x from "../assets/appIcons/x.png";

export default function HomeScreenApps() {
  return (
    <div className="flex flex-col">
      <span className="flex">
        <App appIconURL={google} appTitle="Google" appIconWidth={16} needsBackground openedScreenURL="https://google.com" />
        <App appIconURL={playStore} appTitle="Play Store" needsBackground appIconWidth={16} openedScreenURL="https://play.google.com" />
        <App appIconURL={gmail} appTitle="Gmail" needsBackground openedScreenURL="https://gmail.com" />
        <App appIconURL={photos} appTitle="Photos" needsBackground appIconWidth={16} openedScreenURL="https://photos.google.com" />
      </span>
      <span className="flex">
        <App appIconURL={youtube} appTitle="YouTube" needsBackground openedScreenURL="https://yt.be" />
        <App appIconURL={outlook} appTitle="Outlook" needsBackground openedScreenURL="https://outlook.com" />
        <App appIconURL={linkedIn} appTitle="LinkedIn" needsBackground openedScreenURL="https:/lnkd.in" />
        <App appIconURL={x} appTitle="X" needsBackground openedScreenURL="https://x.com" />
      </span>
    </div>
  );
};