import { useState } from 'react';
import Feedback from './Feedback/Feedback';

function App() {
  const [visible, setVisible] = useState(false);

  const onVisible = t => {
    setVisible(t);
  };

  return (
    <div>
      <Feedback onVisible={onVisible} visible={visible} />
    </div>
  );
}

export default App;
