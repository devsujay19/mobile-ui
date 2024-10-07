import LowerNotchBar from "../lowerNotchBar";

export default function NotAvailableMessage() {

    const screenSize = window.screen.width;

    if (screenSize < 1024 && screenSize > 320) {
        return null;
    };

    return (
        <>
            <span className="grid">
                <div>
                    <h1>OOPSIE!!!</h1>
                    <p>Your device&apos;s screen size: {screenSize}</p>
                    <p>While this is designed to appear on screen size of less than or equals to 320 pixels.</p>
                </div>
                <br />
                <div className="border mx-20 rounded-full border-neutral-700"></div>
                <br />
                <p className=""><span className="font-extrabold text-xl">•</span> Some possible ways to fix this, are:</p>
                <ul className="list-disc list-inside list-decimal mx-[150px]">
                    <li>
                        Turn of &quot;Desktop site&quot;, only if you&apos;re on a mobile or tablet device.
                    </li>
                    <li>
                        Switch to a larger device&apos;s screen (i.e., laptop or desktop computer), or update the device&apos;s screen size.
                    </li>
                    <li>
                        If you&apos;re on a desktop computer or laptop, press <kbd className="font-mono border py-1.5 px-2 rounded-lg backdrop-blur-xl bg-slate-60/20 bg-transparent">Ctrl</kbd> + <kbd className="font-mono border py-1.5 px-2 rounded-lg backdrop-blur-xl bg-slate-60/20 bg-transparent">Shift</kbd> + <kbd className="font-mono border py-1.5 px-2 rounded-lg backdrop-blur-xl bg-slate-60/20 bg-transparent">I</kbd> to open Chromium based console operator, on which you can set the web page&apos;s width and height and then you can access easily directly from your device with larger screen size. But, this isn&apos;t applicable on tablet devices.
                    </li>
                    <li>
                        And if none of the above doesn't work for you, JESUS!!! You leave the site and never come back, man! GO!!!
                    </li>
                </ul>
            </span>
            <LowerNotchBar />
        </>
    );
};