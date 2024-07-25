import { getQuestionerAction, submitQuestionerAction } from '@/server/quastioner.action';
import React from 'react';

// פונקציה עזר לערבוב התשובות
function randomOrderAnswers(question) {
    const answers = [
        question.falseAnswer,
        question.halfFalsy,
        question.halfTrue,
        question.trueAnswer
    ];
    return answers.sort(() => Math.random() - 0.5);
}

export default async function QuestionerPage({ params }) {
    console.log({ params });
    const questioner = await getQuestionerAction(params.quastionerId);
    console.log({ questioner });

    if (!questioner) {
        return <div className="p-4 text-center text-red-500">לא נמצא שאלון</div>;
    }

    return (
        <div className="p-4 max-w-3xl mx-auto">
            <form action={submitQuestionerAction} className="space-y-6">
                <h1 className="text-2xl font-bold mb-4">שם: {questioner.name}</h1>
                <p className="mb-6">נוצר ב: {new Date(questioner.createdAt).toLocaleDateString()}</p>
                <input type="hidden" name="questionerId" value={questioner._id} />
                {questioner.questions && questioner.questions.map((question, index) => (
                    <div key={question._id || index} className="p-4 border rounded-md shadow-sm">
                        <p className="mb-4 font-medium">{question.question}</p>
                        {randomOrderAnswers(question).map((answer, answerIndex) => (
                            <div key={answerIndex} className="mb-2">
                                <input
                                    type="radio"
                                    id={`q${index}a${answerIndex}`}
                                    name={`question${index}`}
                                    value={answer}
                                    className="mr-2"
                                    required
                                />
                                <label htmlFor={`q${index}a${answerIndex}`} className="text-gray-700">{answer}</label>
                            </div>
                        ))}
                    </div>
                ))}
                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded w-full mt-4">
                    סיימתי
                </button>
            </form>
        </div>
    );
}