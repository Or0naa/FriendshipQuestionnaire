"use client"
import { createQuestionerAction } from '@/server/quastioner.action'
import React, { useState } from 'react'

export default function Create() {
  const [questions, setQuestions] = useState([])
  const [question, setQuestion] = useState("")
  const [falseAnswer, setFalseAnswer] = useState("")
  const [halfFalsy, setHalfFalsy] = useState("")
  const [halfTrue, setHalfTrue] = useState("")
  const [trueAnswer, setTrueAnswer] = useState("")
  const [questionerName, setQuestionerName] = useState('')

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: question,
        falseAnswer: falseAnswer,
        halfFalsy: halfFalsy,
        halfTrue: halfTrue,
        trueAnswer: trueAnswer
      }
    ])
    setQuestion("")
    setFalseAnswer("")
    setHalfFalsy("")
    setHalfTrue("")
    setTrueAnswer("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const questioner = {
      name: questionerName,
      questions: questions
    }
    try {
      await createQuestionerAction(questioner)
      alert('השאלון נוצר בהצלחה!')
      setQuestions([])
      setQuestionerName('')
    } catch (error) {
      console.error('שגיאה ביצירת השאלון:', error)
      alert('אירעה שגיאה ביצירת השאלון')
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium mb-1">שם שאלון:</label>
          <input 
            type="text" 
            id="name" 
            value={questionerName}
            onChange={(e) => setQuestionerName(e.target.value)} 
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="question" className="block text-lg font-medium mb-1">שאלה:</label>
          <input 
            onChange={(e) => setQuestion(e.target.value)} 
            value={question} 
            type="text" 
            id="question" 
            name="question" 
            placeholder="למשל: האם כיף למלא את השאלון?" 
            className="border rounded p-2 w-full mb-2"
          />
          <label htmlFor="false" className="block text-lg font-medium mb-1">הכי לא נכון:</label>
          <input 
            onChange={(e) => setFalseAnswer(e.target.value)} 
            value={falseAnswer}
            type="text" 
            id="false" 
            name="false" 
            placeholder="למשל: לא כיף בכלל" 
            className="border rounded p-2 w-full mb-2" 
          />
          <label htmlFor="halfFalsy" className="block text-lg font-medium mb-1">לא נכון:</label>
          <input 
            onChange={(e) => setHalfFalsy(e.target.value)} 
            value={halfFalsy}
            type="text" 
            id="halfFalsy" 
            name="halfFalsy" 
            placeholder="למשל: לא כזה" 
            className="border rounded p-2 w-full mb-2" 
          />
          <label htmlFor="halfTrue" className="block text-lg font-medium mb-1">קצת נכון:</label>
          <input 
            onChange={(e) => setHalfTrue(e.target.value)} 
            value={halfTrue}
            type="text" 
            id="halfTrue" 
            name="halfTrue" 
            placeholder="למשל: בסדר" 
            className="border rounded p-2 w-full mb-2" 
          />
          <label htmlFor="true" className="block text-lg font-medium mb-1">הכי נכון:</label>
          <input 
            onChange={(e) => setTrueAnswer(e.target.value)} 
            value={trueAnswer}
            type="text" 
            id="true" 
            name="true" 
            placeholder="למשל: כיף מאוד" 
            className="border rounded p-2 w-full mb-2"  
          />
          <button 
            type="button" 
            onClick={addQuestion} 
            className="bg-blue-500 text-white py-2 px-4 rounded mt-2 w-full"
          >
            הוספה
          </button>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">שאלות שהוספת:</h2>
          {questions.map((q, index) => (
            <div key={index} className="mb-2 p-2 border rounded">
              <p><strong>שאלה:</strong> {q.question}</p>
              <p><strong>תשובות:</strong> {q.falseAnswer}, {q.halfFalsy}, {q.halfTrue}, {q.trueAnswer}</p>
            </div>
          ))}
        </div>
        <button 
          type="submit" 
          disabled={questions.length === 0} 
          className="bg-green-500 text-white py-2 px-4 rounded w-full"
        >
          צור שאלון
        </button>
      </form>
    </div>
  )
}
