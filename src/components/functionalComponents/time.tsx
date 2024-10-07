import { useState, useEffect } from 'react';

export default function TimeComponent() {

    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(
            new Date(),
        ), 1000);
        return function cleanup() {
            clearInterval(timer);
        };
    });

    return (
        <div>
            <p>{date.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}</p>
        </div>
    );
};