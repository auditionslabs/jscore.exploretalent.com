'use strict'

var _ = require('lodash'),

	model = require('src/services/model.js'),
	models

models = model.$$models = require('../../stub/models/*.js', { hash: true })

describe('SERVICES: model', function() {

	describe('hashRelation()', function() {

		it('should hash the relationship array into an object', function() {

			expect(model.$$hashRelation([
				'modelKey1:modelName1',
				'modelKey2',
				'modelKey3'
			])).toEqual({
				modelKey1: 'modelName1',
				modelKey2: 'modelKey2',
				modelKey3: 'modelKey3'
			})

		})

	})

	describe('modelify()', function() {

		it('should return a dummy_model1 object with hashed object instances', function() {

			var dummy_model1 = model('dummy_model1', {
				dummy_model2: {
					dummy_model3: {
						dummy_model_key: {},
						dummy_model_keys: [ {}, {}, {} ]
					}
				}
			})

			expect(dummy_model1 instanceof models.dummy_model1).toBeTruthy()
			expect(dummy_model1.dummy_model2 instanceof models.dummy_model2).toBeTruthy()
			expect(dummy_model1.dummy_model2.dummy_model3 instanceof models.dummy_model3).toBeTruthy()
			expect(dummy_model1.dummy_model2.dummy_model3.dummy_model_key instanceof models.dummy_model4).toBeTruthy()
			_.each(dummy_model1.dummy_model2.dummy_model3.dummy_model_keys, function(item) {
				expect(item instanceof models.dummy_model4)
			})

		})

		it('should return the data when modelify `data` argument is undefined', function() {
			expect(model('dummy_model1')).toBeUndefined()
		})

	})

})
