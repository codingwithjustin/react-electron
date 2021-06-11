import { useState, useMemo } from 'react'
import Chart from './Chart'
import Info from './Info'
// import DisplayWeather from './DisplayWeather'

const fs = window.require('fs')
const pathModule = window.require('path')

const { app } = window.require('@electron/remote')

const { APIKey } = require('../gw-api-config.json')

function App() {
	return (
		<div className="wrap">
			<div className="left">
				<div><Chart /></div>
			</div>
			<div className="right">
				<div><Info /></div>
			</div>
		</div>
  	)
}

export default App
