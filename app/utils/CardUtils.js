import $ from 'jquery';
import url from '../config';

export default {
	createCard: function(data) {
	    $.ajax({
	      type: "POST",
	      url: url + "cards/new",
	      data: data,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        return data;
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(url + "cards/new", status, err.toString());
	      }.bind(this)
	    });
	},
	createLink: function(data) {
	    $.ajax({
	      type: "POST",
	      url: url + "cards/connection/new",
	      data: data,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        return data;
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(url + "bundles/new", status, err.toString());
	      }.bind(this)
	    });		
	}
}