const express = require('express');
const router = express.Router();
const { Post, Image, Hashtag, Comment, User } = require('../models');

router.get('/:hashtag', async (req, res, next) => {
    try {
        const where = {};
        if (parseInt(req.query.lastId, 10)) { //초기 로딩이 아닐 떄
            where.id = { [Op.lt]: parseInt(req.query.lastId, 10)}
        };
        const posts = await Post.findAll({
            where,
            limit: 10,
            order: [
                ['createdAt', 'DESC'],
                [Comment, 'createdAt', 'DESC']
            ],
            include: [{
               model: Hashtag,
               where: { name: decodeURIComponent(req.params.hashtag) } 
            }, {
                model: User,
                attributes: ['id', 'nickname'],
            }, {
                model: Image,
            }, {
                model: Comment,
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }]
            }, {
                model: User, //좋아요 누른 사람
                as: 'Likers',
                attributes: ['id'],
            }],
        });
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;