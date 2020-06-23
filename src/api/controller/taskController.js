import db from '../../db/db.js';
import taskSchema from '../../db/model/task';


async function getAllTasks(req) {
    // debugger;
    const tasksModel = db.model('tasks', taskSchema);
    var result = [];
    await tasksModel.find({}, function (err, docs) {
        result = docs;
    });
    return result;
};


async function insertTask(req) {
    debugger;
    const tasksModel = db.model('tasks', taskSchema);
    const task = new tasksModel({
        title: "Food Delivery Mobile Application",
        content: "Content",
        minBudget: 2500,
        maxBudget: 4500,
        employer: {
            area: 'germany'
        }
    });
    task.save();
    return true;
};




export default { getAllTasks, insertTask };
