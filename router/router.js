import express from 'express';
import { ytget, ytdata } from '../controller/controller.js';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.get("/get", ytget);
router.post('/insert', upload.fields([
  { name: 'thumbnail', maxCount: 1 },
  { name: 'video', maxCount: 1 },
  { name: 'dp', maxCount: 1 }
]), ytdata);

router.post('/insert', (req, res) => {
  console.log(req.body); 
  console.log(req.files); 
 
});

export default router;
