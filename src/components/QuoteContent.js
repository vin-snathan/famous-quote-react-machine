import React, { Component } from 'react';

export default (props) => {
	const { quote, author } = props.displayQuote;

	const _toEncode = `"${quote}" ${author} #quotesToLiveBy` 
	const _encoded = encodeURIComponent(_toEncode);

	return (
		<div id='quote-content'>
          	<h4 id='text'>{quote}</h4>
          	<p id='author'><em>{author}</em></p>

          <a id='tweet-link' target='_blank' href={`https://twitter.com/intent/tweet?text=${_encoded}`}><i class="icon ion-logo-twitter"></i></a>

          <button 
          	onClick={props.onClick}
          	id='new-quote'
          >Quote <i class="icon ion-md-arrow-round-forward"></i></button>
        </div>
	);
}