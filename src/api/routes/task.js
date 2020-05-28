
import { Router } from 'express'
import taskController from '../controller/taskController.js'

const router = Router();

router.get('/get-all-tasks', async (req, res) => {
    try {
        var result = await taskController.getAllTasks(req);
        res.status(200).json({ success: true, tasks: result })
    }
    catch (ex) {

        res.status(200).json({ success: true, tasks: result })
    }
})


router.get('/get-tasks-by-id', async (req, res) => {
    const tasksModel = db.model('tasks', taskSchema);
    var result = [];
    await tasksModel.find({}, function (err, docs) {
        result = docs;
    });
    res.status(200).json({ success: true, tasks: result })
})



router.post('/insert-tasks', async (req, res) => {
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
    res.status(200).json({ success: true })
})

//update task

// delete task / tasks 


export default router;