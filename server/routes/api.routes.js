import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/test', async (req, res, next) => {
  try {
    console.log('test worked');
    passport.authenticate('facebook');

    return res.end();
  } catch (e) {
    console.log('test did not work');
    return next(e);
  }
});

module.exports = router;
