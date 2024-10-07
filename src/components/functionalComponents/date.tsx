import { useState, useEffect } from 'react';

export default function DateComponent() {

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
            <p>{date.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric'
            })}</p>
        </div>
    );
};