const express = require("express");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  removeFromGroup,
  addToGroup,
  renameGroup,
} = require("../controllers/chatControllers");
const authorise = require("../middleware/authorisation");

const router = express.Router();

router.route("/").post(authorise, accessChat);
router.route("/").get(authorise, fetchChats);
router.route("/group").post(authorise, createGroupChat);
router.route("/rename").put(authorise, renameGroup);
router.route("/groupremove").put(authorise, removeFromGroup);
router.route("/groupadd").put(authorise, addToGroup);

module.exports = router;