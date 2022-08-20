import "./App.css"
import QRCode from 'qrcode'
import { useState } from 'react'

function App() {
	const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 800,
			margin: 2,
			color: {
				dark: '#1b2034',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}

	return (
		<div className="app">
			<h1>QR Generator</h1>
			<div className="for-link">
        <input
          type="text"
          placeholder="Just input a link"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={GenerateQRCode}>Generate</button>
        {qr && (
          <>
            <img src={qr} />
            <a href={qr} download="qrcode.png">
              Download
            </a>
          </>
        )}
      </div>
		</div>
	)
}

export default App