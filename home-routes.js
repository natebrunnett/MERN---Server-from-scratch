const express = require('express'),
router = express.Router();
const Stats = require('./stats-model.js')

class Hello {
	async test(req, res){
		res.send({ok: true, message: "hello world"})
	}
	async countView(req, res){
		const obj = await Stats.findOne({title: 'views'});
		if(obj){
			let views = obj.stat;
			views = views + 1;
			await Stats.updateOne({title: 'views'}, {stat: views});
			//if above function succeeds then
			res.send({
				ok: true, 
				message: 'db updated', 
				updatedViews: views
			})
		} else {
			const creObj = await Stats.create({
				title: 'views',
				stat: 1
			})
			res.send({ok: true, message: 'stat created', creObj})
		}
	}
}

controller = new Hello();

router.post('/test', controller.test)
router.post('/countView', controller.countView)

module.exports = router;
