import App from "./app";
import phone from "../assets/appIcons/phone.png";
import messages from "../assets/appIcons/messages.png";
import chrome from "../assets/appIcons/chrome.png";
import camera from "../assets/appIcons/camera.png";

export default function DefaultLowerApps() {
  return (
    <div className="flex -mt-8">
      <App appIconURL={phone} appTitle="Phone" appIconWidth={12} needsBackground openedScreenURL="javascript:void(0)" openSelf />
      <App appIconURL={messages} appTitle="Messages" appIconWidth={12} needsBackground openedScreenURL="https://messages.google.com/web/" />
      <App appIconURL={chrome} appTitle="Chrome" appIconWidth={12} needsBackground openedScreenURL="https://google.com/" />
      <App appIconURL={camera} appTitle="Camera" appIconWidth={12} needsBackground openedScreenURL="javascript:void(0)" openSelf />
    </div>
  );
};