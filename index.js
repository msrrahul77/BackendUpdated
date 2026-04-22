import bodyParser from "body-parser";
import cors from "cors"
import express from "express"

import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';
import config from './config/index.js';

const app = express()
app.use(cors())
app.use(bodyParser.json());
const port=config.PORT||8000

app.use(bodyParser.urlencoded({ extended: true }));
const uri = `mongodb+srv://${config.DB_USER}:${config.DB_PASSWORD}@cluster0.rprg1ag.mongodb.net/?appName=Cluster0`;
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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });

      const serviceCollection = await client.db("dillBaz").collection('services')

    const priceCollection = await client.db("dillBaz").collection('prices')
      const teamCollection1 = await client.db("dillBaz").collection('teams1')

      const teamCollection = await client.db("dillBaz").collection('teams')
    // -----
          const slideShowDataCollection = await client.db("dillBaz").collection('slideShow')
          const testimonialCollection= await client.db("dillBaz").collection('testimonials')
      const heroCollection = await client.db("dillBaz").collection('hero')
      const aboutCollection = await client.db("dillBaz").collection('about')
      const workCollection = await client.db("dillBaz").collection('work')


   app.get('/work', async (req, res) =>
    {
        const query = {}
        const cursour =workCollection.find(query)
        const skillData = await cursour.toArray();
        res.send(skillData)
        })

    app.get('/work/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const service = await workCollection.findOne(query);
        res.send(service);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch service' });
    }
});
      app.post("/work", async (req, res) => {
        try {
            const data = req.body

          const result = await workCollection.insertOne(data)
          console.log(result)
          res.status(200).json({
              data:result
          })

        } catch (error) {
          console.log(error)
        }
      })
app.patch('/work/:id', async (req, res) => {
    try {
        const id = req.params.id;

        if (!ObjectId.isValid(id)) {
            return res.status(400).send({ error: 'Invalid ID format' });
        }

        const filter = { _id: new ObjectId(id) };
        const updateData = req.body;

        const updateDoc = {
            $set: updateData
        };

        const result = await workCollection.updateOne(filter, updateDoc);

        if (result.matchedCount === 0) {
            return res.status(404).send({ error: 'SlideShownot found' });
        }

        res.send({
            message: 'updated successfully',
            result
        });

    } catch (error) {
        res.status(500).send({ error: 'Failed to update service' });
    }
});
app.delete('/work/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };

        const result = await workCollection.deleteOne(query);

        if (result.deletedCount === 0) {
            return res.status(404).send({ error: 'Service not found' });
        }

        res.send({ message: 'Slide Show deleted successfully', result });
    } catch (error) {
        res.status(500).send({ error: 'Failed to delete service' });
    }
});


   app.get('/about', async (req, res) =>
    {
        const query = {}
        const cursour = aboutCollection.find(query)
        const skillData = await cursour.toArray();
        res.send(skillData)
        })

    app.get('/about/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const service = await aboutCollection.findOne(query);
        res.send(service);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch service' });
    }
});
      app.post("/about", async (req, res) => {
        try {
            const data = req.body

          const result = await aboutCollection.insertOne(data)
          console.log(result)
          res.status(200).json({
              data:result
          })

        } catch (error) {
          console.log(error)
        }
      })
app.patch('/about/:id', async (req, res) => {
    try {
        const id = req.params.id;

        if (!ObjectId.isValid(id)) {
            return res.status(400).send({ error: 'Invalid ID format' });
        }

        const filter = { _id: new ObjectId(id) };
        const updateData = req.body;

        const updateDoc = {
            $set: updateData
        };

        const result = await aboutCollection.updateOne(filter, updateDoc);

        if (result.matchedCount === 0) {
            return res.status(404).send({ error: 'SlideShownot found' });
        }

        res.send({
            message: 'updated successfully',
            result
        });

    } catch (error) {
        res.status(500).send({ error: 'Failed to update service' });
    }
});
app.delete('/about/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };

        const result = await aboutCollection.deleteOne(query);

        if (result.deletedCount === 0) {
            return res.status(404).send({ error: 'Service not found' });
        }

        res.send({ message: 'Slide Show deleted successfully', result });
    } catch (error) {
        res.status(500).send({ error: 'Failed to delete service' });
    }
});

   app.get('/hero', async (req, res) =>
    {
        const query = {}
        const cursour = heroCollection.find(query)
        const skillData = await cursour.toArray();
        res.send(skillData)
        })

    app.get('/hero/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const service = await heroCollection.findOne(query);
        res.send(service);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch service' });
    }
});
      app.post("/hero", async (req, res) => {
        try {
            const data = req.body

          const result = await heroCollection.insertOne(data)
          console.log(result)
          res.status(200).json({
              data:result
          })

        } catch (error) {
          console.log(error)
        }
      })
app.patch('/hero/:id', async (req, res) => {
    try {
        const id = req.params.id;

        if (!ObjectId.isValid(id)) {
            return res.status(400).send({ error: 'Invalid ID format' });
        }

        const filter = { _id: new ObjectId(id) };
        const updateData = req.body;

        const updateDoc = {
            $set: updateData
        };

        const result = await heroCollection.updateOne(filter, updateDoc);

        if (result.matchedCount === 0) {
            return res.status(404).send({ error: 'SlideShownot found' });
        }

        res.send({
            message: 'updated successfully',
            result
        });

    } catch (error) {
        res.status(500).send({ error: 'Failed to update service' });
    }
});
app.delete('/hero/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };

        const result = await heroCollection.deleteOne(query);

        if (result.deletedCount === 0) {
            return res.status(404).send({ error: 'Service not found' });
        }

        res.send({ message: 'Slide Show deleted successfully', result });
    } catch (error) {
        res.status(500).send({ error: 'Failed to delete service' });
    }
});




   app.get('/testimonials', async (req, res) =>
    {
        const query = {}
        const cursour = testimonialCollection.find(query)
        const skillData = await cursour.toArray();
        res.send(skillData)
        })

    app.get('/testimonials/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const service = await testimonialCollection.findOne(query);
        res.send(service);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch service' });
    }
});
      app.post("/testimonials", async (req, res) => {
        try {
            const data = req.body

          const result = await testimonialCollection.insertOne(data)
          console.log(result)
          res.status(200).json({
              data:result
          })

        } catch (error) {
          console.log(error)
        }
      })
app.patch('/testimonials/:id', async (req, res) => {
    try {
        const id = req.params.id;

        if (!ObjectId.isValid(id)) {
            return res.status(400).send({ error: 'Invalid ID format' });
        }

        const filter = { _id: new ObjectId(id) };
        const updateData = req.body;

        const updateDoc = {
            $set: updateData
        };

        const result = await testimonialCollection.updateOne(filter, updateDoc);

        if (result.matchedCount === 0) {
            return res.status(404).send({ error: 'SlideShownot found' });
        }

        res.send({
            message: 'updated successfully',
            result
        });

    } catch (error) {
        res.status(500).send({ error: 'Failed to update service' });
    }
});
app.delete('/testimonials/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };

        const result = await testimonialCollection.deleteOne(query);

        if (result.deletedCount === 0) {
            return res.status(404).send({ error: 'Service not found' });
        }

        res.send({ message: 'Slide Show deleted successfully', result });
    } catch (error) {
        res.status(500).send({ error: 'Failed to delete service' });
    }
});


   app.get('/slideshowData', async (req, res) =>
    {
        const query = {}
        const cursour = slideShowDataCollection.find(query)
        const skillData = await cursour.toArray();
        res.send(skillData)
        })

    app.get('/slideshowData/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const service = await slideShowDataCollection.findOne(query);
        res.send(service);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch service' });
    }
});
      app.post("/slideshowData", async (req, res) => {
        try {
            const data = req.body

          const result = await slideShowDataCollection.insertOne(data)
          console.log(result)
          res.status(200).json({
              data:result
          })

        } catch (error) {
          console.log(error)
        }
      })
app.patch('/slideshowData/:id', async (req, res) => {
    try {
        const id = req.params.id;

        if (!ObjectId.isValid(id)) {
            return res.status(400).send({ error: 'Invalid ID format' });
        }

        const filter = { _id: new ObjectId(id) };
        const updateData = req.body;

        const updateDoc = {
            $set: updateData
        };

        const result = await slideShowDataCollection.updateOne(filter, updateDoc);

        if (result.matchedCount === 0) {
            return res.status(404).send({ error: 'SlideShownot found' });
        }

        res.send({
            message: 'updated successfully',
            result
        });

    } catch (error) {
        res.status(500).send({ error: 'Failed to update service' });
    }
});
app.delete('/slideshowData/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };

        const result = await slideShowDataCollection.deleteOne(query);

        if (result.deletedCount === 0) {
            return res.status(404).send({ error: 'Service not found' });
        }

        res.send({ message: 'Slide Show deleted successfully', result });
    } catch (error) {
        res.status(500).send({ error: 'Failed to delete service' });
    }
});















    //----
      app.get('/services', async (req, res) =>
    {
        const query = {}
        const cursour = serviceCollection.find(query)
        const skillData = await cursour.toArray();
        res.send(skillData)
        })

    app.get('/services/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const service = await serviceCollection.findOne(query);
        res.send(service);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch service' });
    }
});
      app.post("/services", async (req, res) => {
        try {
            const data = req.body

          const result = await serviceCollection.insertOne(data)
          console.log(result)
          res.status(200).json({
              data:result
          })

        } catch (error) {
          console.log(error)
        }
      })
app.patch('/services/:id', async (req, res) => {
    try {
        const id = req.params.id;

        if (!ObjectId.isValid(id)) {
            return res.status(400).send({ error: 'Invalid ID format' });
        }

        const filter = { _id: new ObjectId(id) };
        const updateData = req.body;

        const updateDoc = {
            $set: updateData
        };

        const result = await serviceCollection.updateOne(filter, updateDoc);

        if (result.matchedCount === 0) {
            return res.status(404).send({ error: 'Service not found' });
        }

        res.send({
            message: 'Service updated successfully',
            result
        });

    } catch (error) {
        res.status(500).send({ error: 'Failed to update service' });
    }
});
app.delete('/services/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };

        const result = await serviceCollection.deleteOne(query);

        if (result.deletedCount === 0) {
            return res.status(404).send({ error: 'Service not found' });
        }

        res.send({ message: 'Service deleted successfully', result });
    } catch (error) {
        res.status(500).send({ error: 'Failed to delete service' });
    }
});





 app.get('/teams', async (req, res) =>
    {
        const query = {}
        const cursour = teamCollection.find(query)
        const teamData = await cursour.toArray();
        res.send(teamData)
        })

    app.get('/teams/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const teams = await teamCollection.findOne(query);
        res.send(teams);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch Teams' });
    }
});
      app.post("/teams", async (req, res) => {
        try {
            const data = req.body

          const result = await teamCollection.insertOne(data)
          console.log(result)
          res.status(200).json({
              data:result
          })

        } catch (error) {
          console.log(error)
        }
      })
app.patch('/teams/:id', async (req, res) => {
    try {
        const id = req.params.id;

        if (!ObjectId.isValid(id)) {
            return res.status(400).send({ error: 'Invalid ID format' });
        }

        const filter = { _id: new ObjectId(id) };
        const updateData = req.body;

        const updateDoc = {
            $set: updateData
        };

        const result = await teamCollection.updateOne(filter, updateDoc);

        if (result.matchedCount === 0) {
            return res.status(404).send({ error: 'Team Data not found' });
        }

        res.send({
            message: 'Team updated successfully',
            result
        });

    } catch (error) {
        res.status(500).send({ error: 'Failed to update service' });
    }
});
app.delete('/teams/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };

        const result = await teamCollection.deleteOne(query);

        if (result.deletedCount === 0) {
            return res.status(404).send({ error: 'Service not found' });
        }

        res.send({ message: 'Team Data deleted successfully', result });
    } catch (error) {
        res.status(500).send({ error: 'Failed to delete service' });
    }
});


// --------

 app.get('/price', async (req, res) =>
    {
        const query = {}
        const cursour = priceCollection.find(query)
        const priceData = await cursour.toArray();
        res.send(priceData)
        })

    app.get('/price/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const prices= await priceCollection.findOne(query);
        res.send(prices);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch Prices' });
    }
});
      app.post("/price", async (req, res) => {
        try {
            const data = req.body

          const result = await priceCollection.insertOne(data)
          console.log(result)
          res.status(200).json({
              data:result
          })

        } catch (error) {
          console.log(error)
        }
      })
app.patch('/price/:id', async (req, res) => {
    try {
        const id = req.params.id;

        if (!ObjectId.isValid(id)) {
            return res.status(400).send({ error: 'Invalid ID format' });
        }

        const filter = { _id: new ObjectId(id) };
        const updateData = req.body;

        const updateDoc = {
            $set: updateData
        };

        const result = await priceCollection.updateOne(filter, updateDoc);

        if (result.matchedCount === 0) {
            return res.status(404).send({ error: 'Team Data not found' });
        }

        res.send({
            message: 'Price Data updated successfully',
            result
        });

    } catch (error) {
        res.status(500).send({ error: 'Failed to update Prices' });
    }
});
app.delete('/price/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };

        const result = await priceCollection.deleteOne(query);

        if (result.deletedCount === 0) {
            return res.status(404).send({ error: 'Price not found' });
        }

        res.send({ message: 'Price Data deleted successfully', result });
    } catch (error) {
        res.status(500).send({ error: 'Failed to delete Price' });
    }
});
      app.get("/", (req, res) => {
          res.status(200).json({
        message:"Server Running",
    })
})


app.listen(port, () => {
    console.log("Dill Bazz server is runnig in port : ", port);
})
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {

  }
}
run().catch(console.dir);