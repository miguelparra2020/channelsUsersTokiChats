import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Socket.io está funcionando');
});

export default router;
