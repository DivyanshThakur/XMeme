import xMeme from '../models/xMeme.js';
import mongoose from 'mongoose';

export const getMemes = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    try {
        const xMemes = await xMeme.find().limit(100).sort({$natural:-1});
        res.status(200).json(xMemes);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createMeme = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const meme = req.body;

    const savedMeme = await xMeme.findOne({
        name: meme.name,
        url: meme.url,
        caption: meme.caption
    });

    if(savedMeme === null){
        const newMeme = new xMeme(meme);

        try {
            newMeme.save((err, room) =>{
                res.status(201).json({"id": room.id});
            });
        } catch (error) {
            res.status(409).json({message: error.message});
        }
    }else {
        res.status(409).json({message: "The X-Meme already exists"});
    }
}

export const getMemeById = async (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('No meme with that id');
    
    const meme = await xMeme.findById(id);
    res.json(meme);
}

export const updateMeme = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const {id} = req.params;
    const meme = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('No meme with that id');

    await xMeme.findByIdAndUpdate(id, meme, {new: true});

    res.status(200).send();
}

export const deleteMeme = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('No meme with that id');

    await xMeme.findByIdAndRemove(id);

    res.json({message: "Meme deleted successfully"});

}

export const likeMeme = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('No meme with that id');

    const meme = await xMeme.findById(id);

    const updatedMeme = await xMeme.findByIdAndUpdate(id, {likeCount: meme.likeCount + 1}, {new: true});

    res.json(updatedMeme);
}