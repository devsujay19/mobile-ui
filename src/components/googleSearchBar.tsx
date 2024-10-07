import { useState } from 'react';
import googleIcon from "../assets/google.png";
import googleMicrophoneIcon from "../assets/googleMicrophoneIcon.png";

function GoogleSearchBar() {
  const [searchBarValue, setSearchBarValue] = useState('');

  const handleSearch = (event: any) => {
    event.preventDefault();

    const trimmedValue = searchBarValue.trim();

    if (trimmedValue === '') {
      console.log('Please search for a phrase or type an URL.');
      return;
    }

    if (isURL(trimmedValue)) {
      window.location.href = addProtocol(trimmedValue.replace(' ', '+'));
    } else {
      window.open(`https://www.google.com/search?q=${trimmedValue}&&client=GoogleSearchClone&&utm_source=GoogleSearchClone`, '_blank');
    }
  };

  const handleSeeCode = () => {
    if (searchBarValue.toLowerCase() === 'see code') {
      window.open('https://github.com/devsujay19/mobile-ui', '_blank');
    }
  };

  // Function to check if the string is a URL-like syntax (including protocol-less domains)
  const isURL = (str: any) => {
    const urlRegex = /^(?:(http|https):\/\/)?(?:[\w-]+\.)+[a-zA-Z]{2,}$/;
    return urlRegex.test(str);
  };

  // Function to add "https://" protocol if missing
  const addProtocol = (url: any) => {
    if (!/^(http|https):\/\//.test(url)) {
      return 'https://' + url; // Add https:// if not present
    }
    return url; // Return the url as-is if already has protocol
  };

  return (
    <div className="mt-10">
      <form onSubmit={handleSearch}>
        <span className="flex">
          <img className="rounded-full absolute w-7 mt-[8px] ml-3" src={googleIcon} alt="googleIcon" />
          <input
            type="text"
            className="border focus:bg-white transition-all rounded-full h-11 bg-slate-200 w-full focus:outline-none text-black pl-12 placeholder:text-slate-500"
            placeholder="Search with Google"
            maxLength={30}
            value={searchBarValue}
            onChange={(e) => {
              setSearchBarValue(e.target.value);
              handleSeeCode(); // Call handleSeeCode on input change
            }} // Trigger handleSeeCode on input change
          />
          <img className="rounded-full absolute w-4 mt-[10px] right-6" src={googleMicrophoneIcon} alt="googleMicrophoneIcon" />
        </span>
      </form>
    </div>
  );
}

export default GoogleSearchBar;