require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dxrbdwx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // await client.connect(); 

        const tasksCollection = client.db("taskManagementDB").collection("tasks");
        const bidsCollection = client.db("taskManagementDB").collection("bids");

        // Received data from client to server
        app.post('/tasks', async (req, res) => {
            const task = req.body;
            const result = await tasksCollection.insertOne(task);
            res.send(result);
        });

        // Show all data from server to client
        app.get('/tasks', async (req, res) => {
            const tasks = await tasksCollection.find().sort({ createdAt: -1 }).toArray();
            res.send(tasks);
        });

        // Get task details
        app.get('/tasks/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const task = await tasksCollection.findOne(query);
            res.send(task);
        });

        // Delete a task
        app.delete('/tasks/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) };
            const result = await tasksCollection.deleteOne(query);
            res.send(result);
        })

        // Update a task
        app.put('/tasks/:id', async (req, res) => {
            const id = req.params.id;
            const updateTask = req.body;
            const filter = { _id: new ObjectId(id) };
            const updateDoc = {
                $set: {
                    title: updateTask.title,
                    category: updateTask.category,
                    deadline: updateTask.deadline,
                    budget: updateTask.budget,
                    description: updateTask.description,
                    userEmail: updateTask.userEmail,
                    userName: updateTask.userName,
                },
            };
            const result = await tasksCollection.updateOne(filter, updateDoc);
            res.send(result);
        });

        // API for submitting a bid (with duplicate check)
        app.post('/bids', async (req, res) => {
            const bid = req.body;
            const { taskId, bidderEmail } = bid;
            const existingBid = await bidsCollection.findOne({ taskId, bidderEmail });

            if (existingBid) {
                return res.status(400).send({ message: 'You have already placed a bid on this task.' });
            }

            const result = await bidsCollection.insertOne(bid);
            res.send(result)
        });

        // API to get the count of bids for a user
        app.get('/bids/count/:userEmail', async (req, res) => {
            const userEmail = req.params.userEmail;
            const count = await bidsCollection.countDocuments({ bidderEmail: userEmail });
            res.send({ bidsCount: count });
        });

        // API to check if a user has already bid on a specific task
        app.get('/bids/check-bid/:taskId/:userEmail', async (req, res) => {
            const { taskId, userEmail } = req.params;
            const query = { taskId: taskId, bidderEmail: userEmail };
            const bid = await bidsCollection.findOne(query);
            res.send({ hasBid: !!bid });
        });

        // API to get all bids for a specific task (if needed)
        app.get('/bids/task/:taskId', async (req, res) => {
            const taskId = req.params.taskId;
            const bids = await bidsCollection.find({ taskId: taskId }).toArray();
            res.send(bids);
        });


        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close(); // Not typically needed in serverless environments like Vercel
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Work Window Server Running!')
});

app.listen(port, () => {
    console.log(`Work Window Server listening on port ${port}`);
});