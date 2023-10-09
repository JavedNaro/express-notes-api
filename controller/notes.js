const Joi = require("joi");
const notesService = require("../../API/service/notes");
const courseSchema = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  name: Joi.string().required(),
});
module.exports = {
  getnotes: (req, res) => {
    const data = notesService.getnotes(req,res);
    res.send(data);
  },

  updatenotes: (req, res) => {
    const data = notesService.updatenotes(req.params.id, req.body);
    res.send(data);
  },
  deletenotes: (req, res) => {
    const data = notesService.deletenotes(req.params.id);
    res.send(data);
  },
  addnotes: (req, res) => {
    try {
      const validate = notesSchema.validate(req.body);
      if (validate.error) {
        res.status(400).send(validate.error);
      }
      const data = notesService.addnotes(req.body);
      res.send(data);
    } catch {
      res.status(500).send("Something went wrong");
    }
  },
};