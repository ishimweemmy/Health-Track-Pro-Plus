import Patient from "../models/patient.model.js"

const getAllpatient = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching patient  data' });
  }
};

const getpatientById = async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await Patient.findByPk(id);
    if (!patient) {
      return res.status(404).json({ error: 'patient  data not found' });
    }
    res.json(patient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching patient  data' });
  }
};

const createpatient = async (req, res) => {
  const { patientName, patientNationalID, frequentSickness } = req.body;
  try {
    const patient = await Patient.create({ patientName, patientNationalID, frequentSickness });
    res.status(201).json(patient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating patient  data' });
  }
};

const updatepatient = async (req, res) => {
  const { id } = req.params;
  const { patientName, patientNationalID, frequentSickness } = req.body;
  try {
    const patient = await Patient.findByPk(id);
    if (!patient) {
      return res.status(404).json({ error: 'patient  data not found' });
    }
    const updatedRecord = await Patient.update({ patientName, patientNationalID, frequentSickness })
    res.json(updatedRecord);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating patient  data' });
  }
};

const deletepatient = async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await Patient.findByPk(id);
    if (!patient) {
      return res.status(404).json({ error: 'patient  data not found' });
    }
    await Patient.destroy();
    res.json({ message: 'patient  data deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting patient  data' });
  }
};

export {
  getAllpatient,
  getpatientById,
  createpatient,
  updatepatient,
  deletepatient,
};
