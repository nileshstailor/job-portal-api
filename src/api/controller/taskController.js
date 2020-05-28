import db from '../../db/db.js';
import taskSchema from '../../db/model/task';


async function getAllTasks(req) {
    debugger;
    const tasksModel = db.model('tasks', taskSchema);
    var result = [];
    await tasksModel.find({}, function (err, docs) {
        result = docs;
    });
    return result;
};


export default { getAllTasks };
