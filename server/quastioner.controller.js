const quastionerModel = require('./quastioner.model');
const QuestionerModel = require('./quastioner.model');

const create = async (data) => {
    return await QuestionerModel.create(data);
}

const getById = async (id) => {
    return await QuestionerModel.findById(id);
}

const getAll = async () => {
    return await QuestionerModel.find({});
}

const update = async (id, data) => {
    return await QuestionerModel.findByIdAndUpdate(id, data, { new: true });
}

const remove = async (id) => {
    return await QuestionerModel.findByIdAndDelete(id);
}


const createTestQuestioner = async () => {
    try {
        const newQuestioner = await QuestionerModel.create({
            name: 'Test Questioner',
            questions: [{ question: 'Test Question', falseAnswer: 'False', trueAnswer: 'True' }]
        });
        console.log('Test questioner created:', newQuestioner);
    } catch (error) {
        console.error('Error creating test questioner:', error);
    }
};


module.exports = {
    create,
    getById,
    getAll,
    update,
    remove
};