import React from 'react';

export default function Result({ searchParams }) {
    console.log("params: ", searchParams)
    const score = parseFloat(searchParams.score);
    let message = "";

    if (score === 1) {
        message = "את צריכה להכיר יותר טוב את החברה שלך";
    } else if (score > 1 && score <= 2) {
        message = "יותר כמו מכרים";
    } else if (score > 2 && score <= 3) {
        message = "שלום שלום לא יותר";
    } else if (score > 3 && score < 4) {
        message = "חברה סבבה";
    } else if (score === 4) {
        message = "BFF";
    }

    return (
        <div className="p-4 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">תוצאה</h2>
            <p className="text-lg">{message}</p>
            <p className="mt-4">הציון שלך: {score.toFixed(2)}</p>
        </div>
    );
}