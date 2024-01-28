const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const projectPath = 'C:/Users/Aset/Desktop/ass2';
app.use(express.static(path.join(projectPath, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(projectPath, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
