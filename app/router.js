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
  validateForm(req, res, widget)

  return res.redirect(`/${widget.id}`);
});

router.get('/:id', (req, res) => {
  const widget = Widget.find(req.params.id);
  return res.send(layout({ title: `Widget #${widget.id}`, widget }, show));
});

function validateForm(req, res, widget) {
  let name = req.body.name;
  let purpose = req.body.purpose;
  let active = req.body.active;

  // Validate name is not duplicate
  let isDuplicate = widget.validateForDuplicateName()
  if (isDuplicate) {
    return res.send(
      layout({ 
        error: `Widget with name ${name} already exists.`, 
        name: `${name}`, purpose: `${purpose}`, active: `${active}`}, form));
  }

  // Validate name is not empty.
  let isNameEmpty = widget.validateNameNotEmpty(name)
  if (isNameEmpty) {
    return res.send(
      layout({ 
        error: `Name cannot be empty`, 
        name: `${name}`, purpose: `${purpose}`, active: `${active}`}, form));
  }

  // Validate if active is true then purpose not empty.
  let isActiveAndPurposeEmpty = widget.validatePurposeNotEmptyIfActiveTrue(active, purpose) 
  if (isActiveAndPurposeEmpty) {
    return res.send(
      layout({ 
        error: `Purpose cannot be empty while active is true`, 
        name: `${name}`, purpose: `${purpose}`, active: `${active}`}, form));
  }

  widget.save();
}




export default router;
