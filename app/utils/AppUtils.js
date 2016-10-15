// NEED TO GO BACK AND REWRITE FOR NEW PROJECT
import $ from "jquery";
import url from "../config";

export default {
	createSchedule: function(data) {
		console.log(url + "schedules/new");
	    $.ajax({
	      type: "POST",
	      url: url + "schedules/new",
	      data: data,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        return data;
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(url + "schedules/new", status, err.toString());
	      }.bind(this)
	    });
	}
}