import express, { Request, Response } from 'express';

const router = express.Router();

router.put('/user/:id', async (req: Request, res: Response) => {
    const userId = req.params.id;
    const userData = req.body;

    try {
        //const updatedUser = await updateUser(userId, userData);
        //res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
});

export default router;