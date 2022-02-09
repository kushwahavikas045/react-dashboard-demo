import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Container = ({ code }) => {
  const [copied, setCopied] = useState(false);


  const handleCopy = () => {
    if (code == 'Genrate Your Code:') setCopied(false);
    else {
      setCopied(true);
    }
  }

  // if(code === 'Genrate Your Code:'){
  //  return
  // }
  return (
    <>
      <div className="col-lg-4 col-xlg-3 col-md-5" style={{ background: "black", padding: '10px', marginLeft: '20px' }} >
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <a type="button" class="btn-floating btn-lg btn-tw" style={{ float: 'right' }}><i class={`${copied ? 'fa fa-check' : 'fa fa-copy'}`}></i></a>
        </CopyToClipboard>
        <p style={{ color: 'white', fontWeigth: 300 }}>{code}</p>

      </div>

    </>
  );
};

export default Container;
