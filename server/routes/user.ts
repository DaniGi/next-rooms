import { Router, Request, Response } from 'express';
import User from '../models/user';

const router = Router();

router.get('/:username', async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      const newUser = new User({
        username: req.params.username,
      });
      await newUser.save();
      res.status(200).json({
        username: newUser.username,
        online: true,
        friends: [],
        rooms: [],
      });
    } else {
      res.status(200).json({
        username: user.username,
        online: true,
        friends: user.friends,
        rooms: user.rooms,
      });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

export default router;
