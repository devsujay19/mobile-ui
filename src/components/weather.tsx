import weatherIcon from "../assets/weather.png";

export default function Weather() {
  return (
    <div className="mt-4">
      <img src={weatherIcon} width={200} className="mx-auto" alt="weatherIcon" />
      <p className="text-xs text-slate-300 text-center">No data to show</p>
    </div>
  );
};