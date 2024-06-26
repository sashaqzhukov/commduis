const express = require('express');
const router = express.Router();

router.get('/admin/resolved-complaints', (req, res) => {
  // Logic to fetch resolved complaints
  const resolvedComplaints = fetchResolvedComplaints();

  // Send JSON response
  res.json(resolvedComplaints);
});

module.exports = router;
