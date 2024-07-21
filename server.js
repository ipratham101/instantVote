const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');

const app = express();
const port = process.env.PORT || 5000

app.use(bodyParser.json());
app.use(cors());

const serviceAccount = require('./src/intern-bf188-firebase-adminsdk-irlm1-84a3706b37.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

let votes = {
  BJP: 0,
  CONGRESS: 0,
  AAP: 0,
  APNA_DAL: 0,
};

let userVotes = {}; 

app.get('/votes', (req, res) => {
  res.json(votes);
});

app.post('/vote', async (req, res) => {
  const { party, idToken } = req.body;

 
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;

    if (userVotes[uid]) {
      return res.status(400).send('You have already voted.');
    }

    if (votes[party] !== undefined) {
      votes[party]++;
      userVotes[uid] = party; 
      res.status(200).send('Vote counted!');
    } else {
      res.status(400).send('Invalid party');
    }
  } catch (error) {
    res.status(401).send('Unauthorized');
  }
});

app.get('/results', (req, res) => {
  const winner = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);
  res.json({ winner, votes });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
