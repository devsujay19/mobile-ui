import TimeComponent from "./functionalComponents/time";
import networkBarIcon from "../assets/networkBar.png";
import wifiIcon from "../assets/wifi.png";
import batteryIcon from "../assets/battery.png";

export default function StatusBar() {
  return (
    <div className="flex justify-center h-6 items-center">
      <div className="fixed left-3 text-[11px]">
        <TimeComponent />
      </div>
      <div className="fixed justify-center right-7 invert">
        <img src={wifiIcon} alt="wifiIcon" className="w-7" />
      </div>
      <div className="fixed justify-center right-3 invert">
        <img src={batteryIcon} alt="batteryIcon" className="w-4" />
      </div>
      <div className="fixed justify-center right-[50px] invert">
        <img src={networkBarIcon} alt="networkBarIcon" className="w-6" />
      </div>
    </div>
  );
};