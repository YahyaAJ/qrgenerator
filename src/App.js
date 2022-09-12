import "./App.css";
import QRCode from "qrcode";
import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";

function App() {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");
  const [loading, setLoading] = useState(false);
  const color = useState();
  const GenerateQRCode = () => {
    setLoading(true);
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#1b2034",
          light: "#EEEEEEFF",
        },
      },

      (err, url) => {
        if (err) return console.error(err);
        console.log(url);
        setQr(url);
      }
    );
  };

  useEffect(() => {
    // setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [qr]);

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

        {loading === true ? (
          <div className="loading">
            <SyncLoader color="#fff" margin={7} size={9} speedMultiplier={0.7}/>
          </div>
        ) : (
          <div>
            {qr && (
              <div>
                <img src={qr} />
                <a href={qr} download="qrcode.png">
                  Download
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
