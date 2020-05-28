
import { Router } from 'express'
import task from './routes/task.js';


const router = Router();


router.get('/', async (req, res) => {
    res.status(200).json({ success: true })
})

router.use('/task', task )
// Some Other Page Api Managment simillar to task


export default router;