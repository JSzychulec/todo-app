import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const TodoLists = ({ lists, className }) => {
	return (
		<ul className={className}>
			{lists.map(list => {
				return <Item list={list} />
			})}
		</ul>
	)
}

/**
 * @todo Scrollbar's track is covering sidebar's item background on hover - find a way to make it more esthetic. (possibly hide scrollbar when it's not necessary)
 */

export default styled(TodoLists)`
	margin: 0;
	margin-top: 50px;
	padding: 0;
	max-height: 100%;
  overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 8px;
		height: 8px;
	}
	
	&::-webkit-scrollbar-button {
		width: 0px;
		height: 0px;
	}
	
	&::-webkit-scrollbar-thumb {
		background: #d4d4d4;
		border: 0px none #ffffff;
		border-radius: 50px;
	}
	
	&::-webkit-scrollbar-thumb:hover {
		background: #bfbfbf;
	}
	
	&::-webkit-scrollbar-thumb:active {
		background: #8a8a8a;
	}
	
	&::-webkit-scrollbar-track {
		background: #ffffff;
		border: 0px none #ffffff;
		border-radius: 58px;
	}
	
	&::-webkit-scrollbar-track:hover {
		background: #ffffff;
	}
	
	&::-webkit-scrollbar-track:active {
		background: #ffffff;
	}
	
	&::-webkit-scrollbar-corner {
		background: transparent;
	}

`;	
