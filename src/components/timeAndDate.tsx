import DateComponent from "./functionalComponents/date";
import TimeComponent from "./functionalComponents/time";

export default function TimeAndDate() {
    return (
        <div>
            <span className="text-5xl">
                <TimeComponent />
            </span>
            <span className="text-[21px]">
                <DateComponent />
            </span>
        </div>
    );
};