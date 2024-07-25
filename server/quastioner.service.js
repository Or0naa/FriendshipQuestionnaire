const questionerController = require('./quastioner.controller');

const createQuestioner = async (data) => {
    try {
        const newQuestioner = await questionerController.create(data);
        return newQuestioner;
    } catch (error) {
        console.error('Error creating questioner:', error);
        throw error;
    }
}

const getOneQuestioner = async (id) => {
    try {
        const questioner = await questionerController.getById(id);
        return questioner;
    } catch (error) {
        console.error('Error getting questioner:', error);
        throw error;
    }
}

const getAllQuestioners = async () => {
    try {
        const questioners = await questionerController.getAll();
        return questioners;
    } catch (error) {
        console.error('Error getting all questioners:', error);
        throw error;
    }
}

const updateQuestioner = async (id, data) => {
    try {
        const updatedQuestioner = await questionerController.update(id, data);
        return updatedQuestioner;
    } catch (error) {
        console.error('Error updating questioner:', error);
        throw error;
    }
}

const deleteQuestioner = async (id) => {
    try {
        const deletedQuestioner = await questionerController.remove(id);
        return deletedQuestioner;
    } catch (error) {
        console.error('Error deleting questioner:', error);
        throw error;
    }
}

module.exports = {
    createQuestioner,
    getOneQuestioner,
    getAllQuestioners,
    updateQuestioner,
    deleteQuestioner
};