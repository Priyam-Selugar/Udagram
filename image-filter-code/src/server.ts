import express from 'express';
import {Request, Response} from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';
import { request } from 'http';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());
  
  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  app.get( "/filteredimage/", 
    async ( req: Request, res: Response ) => {
       // endpoint to filter an image from a public url.
      let { image_url } = req.query;
     // 1. validate the image_url query
     if (! image_url){
       res.status(400).send(`url is required`);
     }
     try{
       //2. call filterImageFromURL(image_url) to filter the image
     const filtered_image = await filterImageFromURL(image_url.toString());
     // 3. send the file in the response
     res.status(200).sendFile(filtered_image);
      //    4. deletes any files on the server on finish of the response
      res.on('finish', function() {
        let filesToDelete: Array<string> = [filtered_image];
        deleteLocalFiles(filesToDelete);
      });
    }
      catch(e)
      {
        res.status(422).send('Unable to process the provided image!');
      } 
      
  } );

  
 
 
 
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();