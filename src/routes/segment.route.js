import { Router } from 'express';
import  { createSegment, getSegments, updateSegmentStatus } from '../controllers/segment.controller.js';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const segmentRoute  = Router();


segmentRoute.post('/create', createSegment);
segmentRoute.get('/get', getSegments);
segmentRoute.put('/update', updateSegmentStatus);
export default segmentRoute;

