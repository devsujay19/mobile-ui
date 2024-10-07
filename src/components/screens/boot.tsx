import google from "../../assets/google.png";
import android from "../../assets/android.png";

export default function Boot() {
    return (
        <div className="w-full min-h-screen bg-black">
            <span className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-[40px]">
                <img src={google} width={70} alt="Google Logo" />
            </span>
            <span className="absolute mx-auto px-auto left-0 right-0 bottom-[30px]">
                <img src={android} width={110} className="mx-auto" alt="Android Logo" />
            </span>
        </div>
    );
}