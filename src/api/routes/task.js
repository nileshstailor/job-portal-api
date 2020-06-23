
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



router.get('/insert-tasks', async (req, res) => {

    try {
        var result = await taskController.insertTask(req);
        res.status(200).json({ success: true, tasks: result })
    }
    catch (ex) {

        res.status(200).json({ success: true, tasks: result })
    }
   
    
})

//update task

// delete task / tasks 


export default router;