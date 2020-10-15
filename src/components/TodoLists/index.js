import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Item from './Item';

/**
 * @todo move it to containers since it's stateful now. 
 */

const TodoLists = ({ lists, className, location }) => {
	const currentListRef = useRef(null);

	useEffect(() => {
		if (currentListRef.current) {
			currentListRef.current.scrollIntoView({ block: "nearest", behavior: "smooth" });
		}
	})

	return (
		<ul className={className}>
			{lists.map(list => {
				if (`/${list.id}` == location.pathname) {
					return <Item currentListRef={currentListRef} key={list.id} list={list} />
				}
				return <Item key={list.id} list={list} />
			})}
		</ul>
	)
}

/**
 * @todo Scrollbar's track is covering sidebar's item background on hover - find a way to make it more esthetic. (possibly hide scrollbar when it's not necessary)
 */

export default withRouter(styled(TodoLists)`
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

`);