import Ember from 'ember';

export default Ember.Controller.extend({
	headline: "",
	line1: "",
	line2: "",
	displayUrl: "",

	headlineCharsLeft: Ember.computed('headline', function() {
		return 25 - this.get('headline').length;
	}),
	line1CharsLeft: Ember.computed('line1', function() {
		return 35 - this.get('line1').length;
	}),
	line2CharsLeft: Ember.computed('line2', function() {
		return 35 - this.get('line2').length;
	}),
	urlCharsLeft: Ember.computed('displayUrl', function() {
		return 35 - this.get('displayUrl').length;
	}),

});
