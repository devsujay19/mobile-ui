export interface AppProps {
  appIconURL: string;
  appTitle?: string | "{app_name}";
  appIconWidth?: number | 14;
  needsBackground?: boolean;
  customBackground?: string;
  openedScreenURL: string;
  openSelf?: boolean;
}

export default function App({ appIconURL, appTitle, appIconWidth, needsBackground, customBackground, openedScreenURL, openSelf }: AppProps) {

  const backgroundColor = needsBackground ? "slate-200" : "transparent";
  const appOpeningType = openSelf ? "_self" : "_blank";

  return (
    <div className={`w-${appIconWidth || 16} mt-10 mx-5`}>
      <span className="text-center">
        <img className={`w-${appIconWidth || 14} bg-${backgroundColor || customBackground} backdrop-blur-sm bg-white/4 rounded-xl p-[3px]`} src={`${appIconURL}`} alt={appTitle} onClick={() => {
          window.open(`${openedScreenURL}`, appOpeningType);
        }} />
        <p className="text-[10px] mt-[3px] text-center">{appTitle}</p>
      </span>
    </div>
  );
}