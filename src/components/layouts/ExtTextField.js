import React, { Fragment, useState, useEffect, useContext, useRef } from 'react';
import { ImgInfoContext } from '../../store/ImgInfo';
import { setSrcText, getTransText } from '../../services/API_Service';
import '../../styles/layout/_TextArea.scss';

function ExtTextField(props) {
  const { imgId, extrTexts, setExtrTexts, transTexts, setTransTexts, lan } = useContext(ImgInfoContext);

  const result = props.texts.map((data, index) => {
    return { pk: index, text: data };
  });

  const [modTextResults, setModTextResults] = useState(result); // 수정된 텍스트
  const [sendText, setSendText] = useState([]);
  const mounted = useRef(false);

  function modifyText(e, i) {
    setModTextResults(modTextResults.map((item, index) => (index === i ? { pk: index, text: e.target.value } : item)));
  }

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      setExtrTexts(sendText);
      SendData();
    }
  }, [sendText]);

  function BtnClicked() {
    const result = modTextResults.map(data => data.text);
    setSendText(result);
  }

  function SendData() {
    setSrcText(imgId, sendText);
    getTransText(imgId, lan).then(response => {
      const result = response.data.text_lists.map(data => {
        return data;
      });
      setTransTexts(result);
    });
  }

  return (
    <Fragment>
      <div className="TextSection">
        {modTextResults.map(data => (
          <textarea
            className="TextArea"
            key={data.pk}
            value={data.text}
            onChange={e => modifyText(e, data.pk)}
          ></textarea>
        ))}
      </div>
      <div className="BtnSection">
        <button className="commonBtn" onClick={BtnClicked}>
          번역
        </button>
      </div>
    </Fragment>
  );
}

export default ExtTextField;
