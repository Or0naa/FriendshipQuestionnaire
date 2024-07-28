"use server"
import { redirect } from "next/navigation";
import { connectToMongo } from "./connectToMongo";
import { revalidatePath } from "next/cache";
import questionerService from "./quastioner.service";

export const createQuestionerAction = async (questionerObject) => {
    let newQuestionerFromDb = {};
    try {
        await connectToMongo();
        newQuestionerFromDb = await questionerService.createQuestioner(questionerObject);
        revalidatePath(`/${newQuestionerFromDb._id}`);
    } catch (error) {
        console.error('Error in createQuestionerAction:', error);
        return { message: 'not created', error: error.message };
    }
    redirect(`/create/${newQuestionerFromDb._id}`);
}

// pages/api/submit-questioner.js
export const submitQuestionerAction = async (formData) => {
    const questionerId = formData.get('questionerId');
    const questioner = await getQuestionerAction(questionerId);
    
    let totalScore = 0;
    questioner.questions.forEach((question, index) => {
        const selectedAnswer = formData.get(`question${index}`);
        if (selectedAnswer === question.falseAnswer) totalScore += 1;
        else if (selectedAnswer === question.halfFalsy) totalScore += 2;
        else if (selectedAnswer === question.halfTrue) totalScore += 3;
        else if (selectedAnswer === question.trueAnswer) totalScore += 4;
    });

    const averageScore = totalScore / questioner.questions.length;
    
    // כאן תוכל לשמור את התוצאה בדאטהבייס אם תרצה
    
    redirect(`${questionerId}/result?score=${averageScore}`);
}


export const getQuestionerAction = async (id) => {
    try {
        await connectToMongo();
        const questioner = await questionerService.getOneQuestioner(id);
        if (!questioner) {
            return { message: "Questioner not found" };
        }
        return questioner;
    } catch (error) {
        console.error('Error in getQuestionerAction:', error);
        return { message: "Error fetching questioner", error: error.message };
    }
}