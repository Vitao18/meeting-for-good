'use strict';

const express = require('express');
const controller = require('./events.controller');

const router = express.Router();

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  return res.status(403).send('Authentication required.');
};

router.get('/', isAuthenticated, controller.index);
router.get('/getByUser/:actualDate?', isAuthenticated, controller.indexByUser);
router.get('/getbyuid/:uid', isAuthenticated, controller.indexById);
router.get('/getFull/:id', isAuthenticated, controller.showFull);
router.get('/:id', isAuthenticated, controller.show);
router.post('/', isAuthenticated, controller.create);
router.put('/:id', isAuthenticated, controller.upsert);
router.patch('/GuestNotificationDismiss/:id', isAuthenticated, controller.GuestNotificationDismiss);
router.patch('/:id', isAuthenticated, controller.patch);
router.delete('/participant/:id', isAuthenticated, controller.setGuestInactive);
router.delete('/:id', isAuthenticated, controller.setFalse);

module.exports = router;
