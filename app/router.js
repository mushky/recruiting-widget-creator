import express from 'express';
import layout from './views/layout.js';
import form from './views/form.js';
import Widget from './models/widget.js';
import show from './views/show.js';

const router = express.Router();

router.get('/', (req, res) => {
  return res.send(layout({ title: 'New Widget' }, form));
})
router.post('/', (req, res) => {
  const widget = new Widget(req.body);
  widget.save();
  return res.redirect(`/${widget.id}`);
});

router.get('/:id', (req, res) => {
  const widget = Widget.find(req.params.id);
  return res.send(layout({ title: 'success', widget }, show));
});

export default router;
