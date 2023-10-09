const notes = [
  { id: 1, name: "Maths" },
  { id: 2, name: "Physics" },
  { id: 3, name: "Chemistry" },
];

module.exports = {
  getnotes: (req,res) => {
    return notes;
  },
  updatenotes: (id, data) => {
    const Notes = notes.find((c) => c.id === parseInt(id));
    if (!notes) {
      return "The notes with the given ID was not found."; //404
    } else {
      notes.name = data.name;
      return course;
    }
  },
  deletenotes: (id) => {
    const notes = notes.find((c) => c.id === parseInt(id));
    if (!notes) {
      return "The notes with the given ID was not found."; //404
    } else {
      const index = notes.indexOf(notes);
      notes.splice(index, 1);
      return notes;
    }
  },
  addnotes: (data) => {
    const notes = {
      id: notes.length + 1,
      name: data.name,
    };
    notes.push(notes);
    return notes;
  },
};
