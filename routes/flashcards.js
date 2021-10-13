const express = require("express");
const FlashCards = require("../models/FlashCards");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const flashCard = await FlashCards.find();
    res.status(200).json(flashCard);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

router.post("/", async (req, res) => {
  const flashCard = new FlashCards({
    word1: req.body.word1,
    word2: req.body.word2,
    archive: req.body.archive,
    difficult: req.body.difficult,
    easy: req.body.easy,
  });

  try {
    const savedWord = await flashCard.save();
    res.json(savedWord);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

// router.delete('/:postId', async (req, res)=>{
//     debugger
//     try{
//         const removedList = await List.findByIdAndDelete({_id: req.params.postId})
//         res.json(removedList)
//     } catch(err){
//         res.json({message: err})
//     }
// })

// router.put('/:postId', async (req, res)=>{
//     console.log(req.body.body)
//     try{
//         const updatedList = await List.findByIdAndUpdate(
//             req.params.postId,
//             {$set: {
//                 body: req.body.body
//             } },
//             {new: true})
//         res.json(updatedList)
//     } catch(err){
//         res.json({message: err})
//     }
// })

module.exports = router;
