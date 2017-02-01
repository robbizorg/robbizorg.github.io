import React from 'react';

export default (func) => {
	console.log(func)
	return func["data"]()
}