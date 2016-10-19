/* import React from 'react';
import Autocomplete from 'react-toolbox/lib/autocomplete';
import styled from 'styled-components';
import theme from 'react-toolbox/lib/navigation/theme.scss';
import colors from 'react-toolbox/lib/_colors.scss';

let playerListActiveUrl = "http://m.mlb.com/lookup/json/named.search_autocomp.bam?active_sw=%27Y%27&sport_code=%27mlb%27&all_star_sw=%27N%27&team_all.col_in=name_display_full,file_code,name_abbrev,website_url";

const getAutocompNameList = () => {
	let autocompAjax = new XMLHttpRequest();
	autocompAjax.open("GET", playerListActiveUrl, true);
	autocompAjax.onload = function() {
	  let autocompJSONResponse = JSON.parse(autocompAjax.responseText);
	  let autocompPlayersObj = autocompJSONResponse.search_autocomp.search_autocomplete.queryResults.row;
	  let autocompNameList = Array.prototype.map.call(autocompPlayersObj, function(autocompPlayerEntry) {
	    return autocompPlayerEntry;
	  })
	  return autocompNameList;
	};
	autocompAjax.send();
};

/* const source = () => {
	getAutocompNameList().map(function(entry) {
		console.log('entry', entry);
		return entry.n;
	})
}; 

const inputGroupStyles = () => css`
	.input-group {
  position: relative;
  display: table;
  border-collapse: separate;
}
.input-group[class*="col-"] {
  float: none;
  padding-left: 0;
  padding-right: 0;
}
.input-group .form-control {
  position: relative;
  z-index: 2;
  float: left;
  width: 100%;
  margin-bottom: 0;
}
.input-group .form-control:focus {
  z-index: 3;
}
.input-group-lg > .form-control,
.input-group-lg > .input-group-addon,
.input-group-lg > .input-group-btn > .btn {
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
}
select.input-group-lg > .form-control,
select.input-group-lg > .input-group-addon,
select.input-group-lg > .input-group-btn > .btn {
  height: 46px;
  line-height: 46px;
}
textarea.input-group-lg > .form-control,
textarea.input-group-lg > .input-group-addon,
textarea.input-group-lg > .input-group-btn > .btn,
select[multiple].input-group-lg > .form-control,
select[multiple].input-group-lg > .input-group-addon,
select[multiple].input-group-lg > .input-group-btn > .btn {
  height: auto;
}
.input-group-sm > .form-control,
.input-group-sm > .input-group-addon,
.input-group-sm > .input-group-btn > .btn {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
select.input-group-sm > .form-control,
select.input-group-sm > .input-group-addon,
select.input-group-sm > .input-group-btn > .btn {
  height: 30px;
  line-height: 30px;
}
textarea.input-group-sm > .form-control,
textarea.input-group-sm > .input-group-addon,
textarea.input-group-sm > .input-group-btn > .btn,
select[multiple].input-group-sm > .form-control,
select[multiple].input-group-sm > .input-group-addon,
select[multiple].input-group-sm > .input-group-btn > .btn {
  height: auto;
}
.input-group-addon,
.input-group-btn,
.input-group .form-control {
  display: table-cell;
}
.input-group-addon:not(:first-child):not(:last-child),
.input-group-btn:not(:first-child):not(:last-child),
.input-group .form-control:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.input-group-addon,
.input-group-btn {
  width: 1%;
  white-space: nowrap;
  vertical-align: middle;
}
.input-group-addon {
  padding: 6px 12px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1;
  color: #555555;
  text-align: center;
  background-color: #eeeeee;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.input-group-addon.input-sm {
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 3px;
}
.input-group-addon.input-lg {
  padding: 10px 16px;
  font-size: 18px;
  border-radius: 6px;
}
.input-group-addon input[type="radio"],
.input-group-addon input[type="checkbox"] {
  margin-top: 0;
}
.input-group .form-control:first-child,
.input-group-addon:first-child,
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group > .btn,
.input-group-btn:first-child > .dropdown-toggle,
.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),
.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.input-group-addon:first-child {
  border-right: 0;
}
.input-group .form-control:last-child,
.input-group-addon:last-child,
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group > .btn,
.input-group-btn:last-child > .dropdown-toggle,
.input-group-btn:first-child > .btn:not(:first-child),
.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.input-group-addon:last-child {
  border-left: 0;
}
.input-group-btn {
  position: relative;
  font-size: 0;
  white-space: nowrap;
}
.input-group-btn > .btn {
  position: relative;
}
.input-group-btn > .btn + .btn {
  margin-left: -1px;
}
.input-group-btn > .btn:hover,
.input-group-btn > .btn:focus,
.input-group-btn > .btn:active {
  z-index: 2;
}
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group {
  margin-right: -1px;
}
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group {
  z-index: 2;
  margin-left: -1px;
}

`;

const navStyles = () => css`
	@media (min-width: @grid-float-breakpoint) {
  	.navbar-left  { .pull-left(); }
  	.navbar-right {
    .pull-right();
    margin-right: -@navbar-padding-horizontal;

    ~ .navbar-right {
      margin-right: 0;
    }
  }
}
`;

const formStyles = ({ invalue, type }) => css`
	
`;

const inputStyles = () => css`
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: start;
    border: 0 !important;
    margin: 0;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
	position: relative;
    z-index: 2;
    float: left;
    margin-bottom: 0;
    display: inline-block;
    vertical-align: middle;

    margin-left: -@navbar-padding-horizontal;
  	margin-right: -@navbar-padding-horizontal;
  	padding: 10px @navbar-padding-horizontal;
  	border-top: 1px solid transparent;
  	border-bottom: 1px solid transparent;
  	@shadow: inset 0 1px 0 rgba(255,255,255,.1), 0 1px 0 rgba(255,255,255,.1);
  	.box-shadow(@shadow);

  	// Mixin behavior for optimum display
  	.form-inline();

    	@media (max-width: @grid-float-breakpoint-max) {
      	margin-bottom: 5px;

      	&:last-child {
        	margin-bottom: 0;
      	}
    	}


	  // Vertically center in expanded, horizontal navbar
	  .navbar-vertical-align(@input-height-base);

	  // Undo 100% width for pull classes
	  @media (min-width: @grid-float-breakpoint) {
	    width: auto;
	    border: 0;
	    margin-left: 0;
	    margin-right: 0;
	    padding-top: 0;
	    padding-bottom: 0;
	    .box-shadow(none);
	  }
`

const styledForm = styled.form`${navStyles}`
const styledInputGroup = styled.div`${inputGroupStyles}`
const styledInput = styled.input`${inputStyles}`


const source = ["Trey Turner", "Daniel Murphy", "Ryan Zimmerman"];

class AutocompleteSearch extends React.Component {
	state = {
		names: source
	}

	handleChange = (value) => {
		this.setState({names: value});
	};

	render() {
		return (
			<styledForm>
					<styledInputGroup>
						<styledInput>
							<Autocomplete
								direction="down"
								selectedPosition="above"
								label="Player Searc"
								suggestionMatch="anywhere"
								onChange={this.handleChange}
								source={source}
								value={this.state.names}
							/>
						</styledInput>
					</styledInputGroup>
			</styledForm>
		);
	}
}

export default AutocompleteSearch;

*/