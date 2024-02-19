import mongoose from 'mongoose';
import { PlayerSchema } from '../models/playerModel';

const Player = mongoose.model('player', PlayerSchema);

export const addNewPlayer = (req,resp)=>{
    let newPlayer = Player(req.body);
    newPlayer.save()
    .then(result => {
        resp.json(result);
    })
    .catch(err => {
        resp.send(err);
    });
}

export const getPlayers = (req,resp)=>{
    Player.find()
    .then(result => {
        resp.json(result);
    })
    .catch(err => {
        resp.send(err);
    });
}

export const getPlayerByID = (req,resp)=>{
    Player.findById(req.params.PlayerId)
    .then(result => {
        resp.json(result);
    })
    .catch(err => {
        resp.send(err);
    });
}

export const updatePlayer = (req,resp)=>{
    Player.findOneAndUpdate({_id:req.params.PlayerId}, req.body, {new:true})
    .then(result => {
        resp.json(result);
    })
    .catch(err => {
        resp.send(err);
    });
}

export const deletePlayer = (req,resp)=>{
    Player.deleteOne({_id:req.params.PlayerId})
    .then(result => {
        resp.json(result);
    })
    .catch(err => {
        resp.send({message:'Deleted successfully!'});
    });
}